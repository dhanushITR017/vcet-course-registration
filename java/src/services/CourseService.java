package services;

import models.Course;
import java.util.*;
import java.util.concurrent.ConcurrentHashMap;
import java.util.stream.Collectors;

/**
 * Service class for Course Catalog Management.
 * Implements collections, streams, filtering and validation.
 */
public class CourseService {
    private final Map<String, Course> courseMap = new ConcurrentHashMap<>();

    public void addCourse(Course course) {
        courseMap.put(course.getCourseId(), course);
    }

    public Optional<Course> getCourseById(String courseId) {
        return Optional.ofNullable(courseMap.get(courseId));
    }

    public List<Course> getAllCourses() {
        return new ArrayList<>(courseMap.values());
    }

    public List<Course> getAvailableCourses() {
        return courseMap.values().stream()
                .filter(c -> !c.isFull())
                .sorted(Comparator.comparing(Course::getCourseName))
                .collect(Collectors.toList());
    }

    public List<Course> getCoursesByCategory(String category) {
        return courseMap.values().stream()
                .filter(c -> c.getCategory().equalsIgnoreCase(category))
                .collect(Collectors.toList());
    }

    public List<Course> getCoursesByPopularity() {
        return courseMap.values().stream()
                .sorted(Comparator.comparingInt(Course::getEnrolledCount).reversed())
                .collect(Collectors.toList());
    }
}
