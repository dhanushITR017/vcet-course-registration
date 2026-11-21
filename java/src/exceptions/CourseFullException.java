package exceptions;

/**
 * Thrown when a registration attempt exceeds maximum course enrollment capacity.
 */
public class CourseFullException extends Exception {
    private final String courseId;
    private final int capacity;

    public CourseFullException(String courseId, int capacity) {
        super(String.format("Course Full Error: Course '%s' has reached maximum capacity of %d seats.", courseId, capacity));
        this.courseId = courseId;
        this.capacity = capacity;
    }

    public String getCourseId() {
        return courseId;
    }

    public int getCapacity() {
        return capacity;
    }
}
