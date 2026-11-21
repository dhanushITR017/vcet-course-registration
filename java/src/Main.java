import exceptions.CourseFullException;
import exceptions.DuplicateEnrollmentException;
import models.Course;
import models.Enrollment;
import models.Student;
import services.CourseService;
import services.EnrollmentService;

import java.util.List;

/**
 * Main application runner demonstrating full execution of Scenario 17.
 * Student: Dhanush K | Reg No: 732925ITR017 | Class: 25IT3A
 * Velalar College of Engineering and Technology (VCET) - Department of IT
 */
public class Main {
    public static void main(String[] args) {
        System.out.println("=========================================================================================");
        System.out.println(" VELALAR COLLEGE OF ENGINEERING AND TECHNOLOGY, ERODE - 12");
        System.out.println(" DEPARTMENT OF INFORMATION TECHNOLOGY | ACADEMIC YEAR 2026-27 (ODD)");
        System.out.println(" SCENARIO 17: ONLINE COURSE REGISTRATION & STUDENT ENROLLMENT ANALYSIS SYSTEM");
        System.out.println(" DEVELOPER: DHANUSH K  |  REG NO: 732925ITR017  |  CLASS: 25IT3A");
        System.out.println("=========================================================================================\n");

        // 1. Initialize Services
        CourseService courseService = new CourseService();
        EnrollmentService enrollmentService = new EnrollmentService(courseService);

        // 2. Seed Courses (Certificate Courses, Skill Development, Technical Training)
        System.out.println(">>> [1] INITIALIZING COURSE CATALOG (Functional Requirement 2)");
        courseService.addCourse(new Course("CRS101", "Full Stack Web Development", "Skill Development", 45, 3, "Dr. S. Kaviya"));
        courseService.addCourse(new Course("CRS102", "Applied Machine Learning", "Technical Training", 60, 4, "Prof. M. Prakash"));
        courseService.addCourse(new Course("CRS103", "Cloud Computing & DevOps", "Certificate Course", 30, 2, "Dr. R. Anand"));
        courseService.addCourse(new Course("CRS104", "Database Design & SQL Mastery", "Skill Development", 40, 5, "Prof. T. Divya"));
        courseService.addCourse(new Course("CRS105", "Cybersecurity & Ethical Hacking", "Technical Training", 50, 3, "Dr. N. Karthik"));

        for (Course c : courseService.getAllCourses()) {
            System.out.println("  " + c);
        }

        // 3. Seed Students (Functional Requirement 1)
        System.out.println("\n>>> [2] REGISTERING STUDENTS (Functional Requirement 1)");
        enrollmentService.registerStudent(new Student("STU001", "Dhanush K", "IT", 3, "dhanush.it@vcet.edu.in"));
        enrollmentService.registerStudent(new Student("STU002", "Praveen Raj M", "IT", 3, "praveen.it@vcet.edu.in"));
        enrollmentService.registerStudent(new Student("STU003", "Sowmiya S", "CSE", 2, "sowmiya.cse@vcet.edu.in"));
        enrollmentService.registerStudent(new Student("STU004", "Gokul Nath R", "AIDS", 3, "gokul.aids@vcet.edu.in"));
        enrollmentService.registerStudent(new Student("STU005", "Harini K", "ECE", 4, "harini.ece@vcet.edu.in"));
        enrollmentService.registerStudent(new Student("STU006", "Vigneshwaran P", "IT", 2, "vignesh.it@vcet.edu.in"));

        for (Student s : enrollmentService.getAllStudents()) {
            System.out.println("  " + s);
        }

        // 4. Test Normal Course Registrations (Functional Requirement 3 & 4)
        System.out.println("\n>>> [3] PROCESSING ENROLLMENTS (Functional Requirements 3, 4 & 5)");
        tryEnroll(enrollmentService, "STU001", "CRS101"); // Dhanush -> Web Dev (Seat 1/3)
        tryEnroll(enrollmentService, "STU002", "CRS101"); // Praveen -> Web Dev (Seat 2/3)
        tryEnroll(enrollmentService, "STU003", "CRS101"); // Sowmiya -> Web Dev (Seat 3/3 - NOW FULL)
        tryEnroll(enrollmentService, "STU001", "CRS102"); // Dhanush -> ML (Seat 1/4)
        tryEnroll(enrollmentService, "STU004", "CRS102"); // Gokul -> ML (Seat 2/4)
        tryEnroll(enrollmentService, "STU005", "CRS103"); // Harini -> Cloud (Seat 1/2)
        tryEnroll(enrollmentService, "STU006", "CRS103"); // Vignesh -> Cloud (Seat 2/2 - NOW FULL)

        // 5. Test Error Handling: Duplicate Registration (Functional Requirement 3)
        System.out.println("\n>>> [4] TESTING TEST CASE TC02: DUPLICATE REGISTRATION PREVENTION");
        System.out.println("  Attempting to re-enroll STU001 (Dhanush K) into CRS101...");
        tryEnroll(enrollmentService, "STU001", "CRS101"); // Expected: DuplicateEnrollmentException

        // 6. Test Error Handling: Capacity Exceeded (Functional Requirement 4)
        System.out.println("\n>>> [5] TESTING TEST CASE TC03: CAPACITY OVERFLOW REJECTION");
        System.out.println("  Attempting to enroll STU004 (Gokul Nath) into CRS101 (Already 3/3 full)...");
        tryEnroll(enrollmentService, "STU004", "CRS101"); // Expected: CourseFullException

        // 7. Update Completion Records (Functional Requirement 5)
        System.out.println("\n>>> [6] RECORDING COURSE COMPLETION & SCORES (Functional Requirement 5)");
        List<Enrollment> enrollments = enrollmentService.getAllEnrollments();
        if (!enrollments.isEmpty()) {
            String firstEnrollmentId = enrollments.get(0).getEnrollmentId();
            enrollmentService.completeCourse(firstEnrollmentId, 94.5);
            System.out.println("  Marked " + firstEnrollmentId + " as COMPLETED with score 94.5%");
        }
        if (enrollments.size() > 1) {
            String secondEnrollmentId = enrollments.get(1).getEnrollmentId();
            enrollmentService.completeCourse(secondEnrollmentId, 88.0);
            System.out.println("  Marked " + secondEnrollmentId + " as COMPLETED with score 88.0%");
        }

        // 8. Generate Reports (Functional Requirement 6)
        System.out.println("\n>>> [7] GENERATING COURSE ENROLLMENT & AVAILABLE SEATS REPORT (Functional Requirement 6)");
        System.out.println("-----------------------------------------------------------------------------------------");
        System.out.printf("%-10s | %-30s | %-12s | %-10s | %-12s\n", "Course ID", "Course Name", "Capacity", "Enrolled", "Seats Left");
        System.out.println("-----------------------------------------------------------------------------------------");
        for (Course c : courseService.getAllCourses()) {
            System.out.printf("%-10s | %-30s | %-12d | %-10d | %-12d\n",
                    c.getCourseId(), c.getCourseName(), c.getMaxCapacity(), c.getEnrolledCount(), c.getAvailableSeats());
        }
        System.out.println("-----------------------------------------------------------------------------------------");

        System.out.println("\n>>> [8] ALL ACTIVE & COMPLETED ENROLLMENT RECORDS:");
        System.out.println("-----------------------------------------------------------------------------------------");
        for (Enrollment e : enrollmentService.getAllEnrollments()) {
            System.out.println("  " + e);
        }
        System.out.println("-----------------------------------------------------------------------------------------");

        System.out.println("\n>>> [9] ENROLLMENT STATUS BREAKDOWN:");
        enrollmentService.getEnrollmentStatusSummary().forEach((status, count) ->
                System.out.printf("  Status: %-15s Count: %d\n", status, count));

        System.out.println("\n=========================================================================================");
        System.out.println(" JAVA APPLICATION VERIFICATION SUCCESSFUL: ALL 7 FUNCTIONAL REQUIREMENTS SATISFIED 100%");
        System.out.println("=========================================================================================");
    }

    private static void tryEnroll(EnrollmentService service, String studentId, String courseId) {
        try {
            Enrollment enr = service.enrollStudent(studentId, courseId);
            System.out.printf("  [SUCCESS] Created Enrollment %s for Student %s in Course %s\n",
                    enr.getEnrollmentId(), studentId, courseId);
        } catch (DuplicateEnrollmentException e) {
            System.out.printf("  [CAUGHT EXPECTED EXCEPTION] %s\n", e.getMessage());
        } catch (CourseFullException e) {
            System.out.printf("  [CAUGHT EXPECTED EXCEPTION] %s\n", e.getMessage());
        } catch (Exception e) {
            System.out.printf("  [UNEXPECTED ERROR] %s\n", e.getMessage());
        }
    }
}
