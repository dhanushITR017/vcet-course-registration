package exceptions;

/**
 * Thrown when a student attempts to register for a course they are already actively enrolled in.
 */
public class DuplicateEnrollmentException extends Exception {
    private final String studentId;
    private final String courseId;

    public DuplicateEnrollmentException(String studentId, String courseId) {
        super(String.format("Duplicate Enrollment Error: Student '%s' is already registered for course '%s'.", studentId, courseId));
        this.studentId = studentId;
        this.courseId = courseId;
    }

    public String getStudentId() {
        return studentId;
    }

    public String getCourseId() {
        return courseId;
    }
}
