package services;

import exceptions.CourseFullException;
import exceptions.DuplicateEnrollmentException;
import models.Course;
import models.Enrollment;
import models.Student;

import java.time.LocalDate;
import java.util.*;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.atomic.AtomicInteger;
import java.util.stream.Collectors;

/**
 * Service class managing student enrollment, duplicate check, capacity enforcement, and reporting.
 * Scenario 17: Online Course Registration and Student Enrollment Analysis System
 */
public class EnrollmentService {
    private final CourseService courseService;
    private final Map<String, Student> studentMap = new ConcurrentHashMap<>();
    private final Map<String, Enrollment> enrollmentMap = new ConcurrentHashMap<>();
    private final AtomicInteger enrollmentCounter = new AtomicInteger(100);

    public EnrollmentService(CourseService courseService) {
        this.courseService = courseService;
    }

    public void registerStudent(Student student) {
        studentMap.put(student.getStudentId(), student);
    }

    public Optional<Student> getStudentById(String studentId) {
        return Optional.ofNullable(studentMap.get(studentId));
    }

    public List<Student> getAllStudents() {
        return new ArrayList<>(studentMap.values());
    }

    /**
     * Registers a student for a course with full thread-safety,
     * duplicate enrollment prevention, and capacity checks.
     */
    public synchronized Enrollment enrollStudent(String studentId, String courseId)
            throws DuplicateEnrollmentException, CourseFullException, IllegalArgumentException {

        // Validate student exists
        if (!studentMap.containsKey(studentId)) {
            throw new IllegalArgumentException("Student ID " + studentId + " not found in system.");
        }

        // Validate course exists
        Course course = courseService.getCourseById(courseId)
                .orElseThrow(() -> new IllegalArgumentException("Course ID " + courseId + " not found in system."));

        // Rule 1: Prevent duplicate registrations (active status)
        boolean alreadyEnrolled = enrollmentMap.values().stream()
                .anyMatch(e -> e.getStudentId().equals(studentId)
                        && e.getCourseId().equals(courseId)
                        && (e.getStatus() == Enrollment.Status.REGISTERED || e.getStatus() == Enrollment.Status.IN_PROGRESS));

        if (alreadyEnrolled) {
            throw new DuplicateEnrollmentException(studentId, courseId);
        }

        // Rule 2: Check course capacity before confirming
        if (course.isFull()) {
            throw new CourseFullException(courseId, course.getMaxCapacity());
        }

        // Atomically increment course count
        boolean seatReserved = course.incrementEnrollment();
        if (!seatReserved) {
            throw new CourseFullException(courseId, course.getMaxCapacity());
        }

        // Generate enrollment record
        String enrollmentId = "ENR" + enrollmentCounter.incrementAndGet();
        Enrollment enrollment = new Enrollment(
                enrollmentId,
                studentId,
                courseId,
                LocalDate.now(),
                Enrollment.Status.REGISTERED
        );

        enrollmentMap.put(enrollmentId, enrollment);
        return enrollment;
    }

    /**
     * Updates completion status and assigns score
     */
    public synchronized boolean completeCourse(String enrollmentId, double score) {
        Enrollment enrollment = enrollmentMap.get(enrollmentId);
        if (enrollment != null && enrollment.getStatus() != Enrollment.Status.COMPLETED) {
            enrollment.setStatus(Enrollment.Status.COMPLETED);
            enrollment.setCompletionScore(score);
            return true;
        }
        return false;
    }

    /**
     * Drops / Cancels an enrollment and frees up a course seat
     */
    public synchronized boolean dropEnrollment(String enrollmentId) {
        Enrollment enrollment = enrollmentMap.get(enrollmentId);
        if (enrollment != null && enrollment.getStatus() != Enrollment.Status.CANCELLED) {
            enrollment.setStatus(Enrollment.Status.CANCELLED);
            courseService.getCourseById(enrollment.getCourseId())
                    .ifPresent(Course::decrementEnrollment);
            return true;
        }
        return false;
    }

    public List<Enrollment> getAllEnrollments() {
        return new ArrayList<>(enrollmentMap.values());
    }

    public List<Enrollment> getEnrollmentsByStudent(String studentId) {
        return enrollmentMap.values().stream()
                .filter(e -> e.getStudentId().equals(studentId))
                .collect(Collectors.toList());
    }

    public List<Enrollment> getEnrollmentsByCourse(String courseId) {
        return enrollmentMap.values().stream()
                .filter(e -> e.getCourseId().equals(courseId))
                .collect(Collectors.toList());
    }

    public List<Enrollment> getCompletedEnrollments() {
        return enrollmentMap.values().stream()
                .filter(e -> e.getStatus() == Enrollment.Status.COMPLETED)
                .collect(Collectors.toList());
    }

    /**
     * Generates a summarized enrollment status report
     */
    public Map<String, Long> getEnrollmentStatusSummary() {
        return enrollmentMap.values().stream()
                .collect(Collectors.groupingBy(e -> e.getStatus().name(), Collectors.counting()));
    }
}
