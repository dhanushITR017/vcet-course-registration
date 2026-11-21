package models;

import java.io.Serializable;
import java.util.Objects;

/**
 * Model representing a Student.
 * Scenario 17: Online Course Registration and Student Enrollment Analysis System
 * Student: Dhanush K | Reg No: 732925ITR017 | Class: 25IT3A
 * Institution: Velalar College of Engineering and Technology
 */
public class Student implements Serializable {
    private static final long serialVersionUID = 1L;

    private String studentId;
    private String name;
    private String department;
    private int yearOfStudy;
    private String email;

    public Student() {
    }

    public Student(String studentId, String name, String department, int yearOfStudy, String email) {
        this.studentId = studentId;
        this.name = name;
        this.department = department;
        this.yearOfStudy = yearOfStudy;
        this.email = email;
    }

    public String getStudentId() {
        return studentId;
    }

    public void setStudentId(String studentId) {
        this.studentId = studentId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDepartment() {
        return department;
    }

    public void setDepartment(String department) {
        this.department = department;
    }

    public int getYearOfStudy() {
        return yearOfStudy;
    }

    public void setYearOfStudy(int yearOfStudy) {
        this.yearOfStudy = yearOfStudy;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Student student = (Student) o;
        return Objects.equals(studentId, student.studentId);
    }

    @Override
    public int hashCode() {
        return Objects.hash(studentId);
    }

    @Override
    public String toString() {
        return String.format("[%s] %-18s | Dept: %-6s | Year: %d | Email: %s",
                studentId, name, department, yearOfStudy, email);
    }
}
