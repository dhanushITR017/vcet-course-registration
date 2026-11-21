package models;

import java.io.Serializable;
import java.util.Objects;

/**
 * Model representing a Course in the system.
 * Scenario 17: Online Course Registration and Student Enrollment Analysis System
 */
public class Course implements Serializable {
    private static final long serialVersionUID = 1L;

    private String courseId;
    private String courseName;
    private String category; // Skill Development, Certificate Course, Technical Training
    private int durationHours;
    private int maxCapacity;
    private int enrolledCount;
    private String instructor;

    public Course() {
    }

    public Course(String courseId, String courseName, String category, int durationHours, int maxCapacity, String instructor) {
        this.courseId = courseId;
        this.courseName = courseName;
        this.category = category;
        this.durationHours = durationHours;
        this.maxCapacity = maxCapacity;
        this.enrolledCount = 0;
        this.instructor = instructor;
    }

    public Course(String courseId, String courseName, String category, int durationHours, int maxCapacity, int enrolledCount, String instructor) {
        this.courseId = courseId;
        this.courseName = courseName;
        this.category = category;
        this.durationHours = durationHours;
        this.maxCapacity = maxCapacity;
        this.enrolledCount = enrolledCount;
        this.instructor = instructor;
    }

    public String getCourseId() {
        return courseId;
    }

    public void setCourseId(String courseId) {
        this.courseId = courseId;
    }

    public String getCourseName() {
        return courseName;
    }

    public void setCourseName(String courseName) {
        this.courseName = courseName;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public int getDurationHours() {
        return durationHours;
    }

    public void setDurationHours(int durationHours) {
        this.durationHours = durationHours;
    }

    public int getMaxCapacity() {
        return maxCapacity;
    }

    public void setMaxCapacity(int maxCapacity) {
        this.maxCapacity = maxCapacity;
    }

    public int getEnrolledCount() {
        return enrolledCount;
    }

    public void setEnrolledCount(int enrolledCount) {
        this.enrolledCount = enrolledCount;
    }

    public String getInstructor() {
        return instructor;
    }

    public void setInstructor(String instructor) {
        this.instructor = instructor;
    }

    public int getAvailableSeats() {
        return Math.max(0, maxCapacity - enrolledCount);
    }

    public boolean isFull() {
        return enrolledCount >= maxCapacity;
    }

    public synchronized boolean incrementEnrollment() {
        if (enrolledCount < maxCapacity) {
            enrolledCount++;
            return true;
        }
        return false;
    }

    public synchronized void decrementEnrollment() {
        if (enrolledCount > 0) {
            enrolledCount--;
        }
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Course course = (Course) o;
        return Objects.equals(courseId, course.courseId);
    }

    @Override
    public int hashCode() {
        return Objects.hash(courseId);
    }

    @Override
    public String toString() {
        return String.format("[%s] %-28s | %-20s | %2dh | Cap: %2d/%2d | Seats Left: %2d",
                courseId, courseName, category, durationHours, enrolledCount, maxCapacity, getAvailableSeats());
    }
}
