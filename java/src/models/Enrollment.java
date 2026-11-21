package models;

import java.io.Serializable;
import java.time.LocalDate;
import java.util.Objects;

/**
 * Model representing a Student Course Enrollment record.
 * Scenario 17: Online Course Registration and Student Enrollment Analysis System
 */
public class Enrollment implements Serializable {
    private static final long serialVersionUID = 1L;

    public enum Status {
        REGISTERED,
        IN_PROGRESS,
        COMPLETED,
        CANCELLED
    }

    private String enrollmentId;
    private String studentId;
    private String courseId;
    private LocalDate registrationDate;
    private Status status;
    private Double completionScore; // Optional score upon completion

    public Enrollment() {
    }

    public Enrollment(String enrollmentId, String studentId, String courseId, LocalDate registrationDate, Status status) {
        this.enrollmentId = enrollmentId;
        this.studentId = studentId;
        this.courseId = courseId;
        this.registrationDate = registrationDate;
        this.status = status;
        this.completionScore = null;
    }

    public Enrollment(String enrollmentId, String studentId, String courseId, LocalDate registrationDate, Status status, Double completionScore) {
        this.enrollmentId = enrollmentId;
        this.studentId = studentId;
        this.courseId = courseId;
        this.registrationDate = registrationDate;
        this.status = status;
        this.completionScore = completionScore;
    }

    public String getEnrollmentId() {
        return enrollmentId;
    }

    public void setEnrollmentId(String enrollmentId) {
        this.enrollmentId = enrollmentId;
    }

    public String getStudentId() {
        return studentId;
    }

    public void setStudentId(String studentId) {
        this.studentId = studentId;
    }

    public String getCourseId() {
        return courseId;
    }

    public void setCourseId(String courseId) {
        this.courseId = courseId;
    }

    public LocalDate getRegistrationDate() {
        return registrationDate;
    }

    public void setRegistrationDate(LocalDate registrationDate) {
        this.registrationDate = registrationDate;
    }

    public Status getStatus() {
        return status;
    }

    public void setStatus(Status status) {
        this.status = status;
    }

    public Double getCompletionScore() {
        return completionScore;
    }

    public void setCompletionScore(Double completionScore) {
        this.completionScore = completionScore;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Enrollment that = (Enrollment) o;
        return Objects.equals(enrollmentId, that.enrollmentId);
    }

    @Override
    public int hashCode() {
        return Objects.hash(enrollmentId);
    }

    @Override
    public String toString() {
        String scoreStr = (completionScore != null) ? String.format("%.1f%%", completionScore) : "N/A";
        return String.format("[%s] Student: %s | Course: %s | Date: %s | Status: %-11s | Score: %s",
                enrollmentId, studentId, courseId, registrationDate, status, scoreStr);
    }
}
