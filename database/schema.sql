-- ============================================================================
-- VELALAR COLLEGE OF ENGINEERING AND TECHNOLOGY, ERODE - 12
-- DEPARTMENT OF INFORMATION TECHNOLOGY | ACADEMIC YEAR 2026-27 (ODD)
-- 25ITT31 - DATABASE MANAGEMENT SYSTEMS
-- SCENARIO 17: ONLINE COURSE REGISTRATION AND STUDENT ENROLLMENT ANALYSIS SYSTEM
-- DEVELOPER: DHANUSH K | REG NO: 732925ITR017 | CLASS: 25IT3A
-- ============================================================================

-- Create Database if not exists
CREATE DATABASE IF NOT EXISTS course_registration_db;
USE course_registration_db;

-- ----------------------------------------------------------------------------
-- TABLE 1: Students
-- Stores student demographic and academic profile
-- ----------------------------------------------------------------------------
DROP TABLE IF EXISTS enrollments;
DROP TABLE IF EXISTS courses;
DROP TABLE IF EXISTS students;
DROP TABLE IF EXISTS categories;

CREATE TABLE categories (
    category_id VARCHAR(10) PRIMARY KEY,
    category_name VARCHAR(100) NOT NULL UNIQUE,
    description TEXT
);

CREATE TABLE students (
    student_id VARCHAR(15) PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    department VARCHAR(50) NOT NULL,
    year_of_study INT NOT NULL CHECK (year_of_study BETWEEN 1 AND 4),
    email VARCHAR(100) NOT NULL UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ----------------------------------------------------------------------------
-- TABLE 2: Courses
-- Stores course details, category, duration, and maximum enrollment capacity
-- ----------------------------------------------------------------------------
CREATE TABLE courses (
    course_id VARCHAR(15) PRIMARY KEY,
    course_name VARCHAR(150) NOT NULL,
    category_id VARCHAR(10) NOT NULL,
    duration_hours INT NOT NULL CHECK (duration_hours > 0),
    max_capacity INT NOT NULL CHECK (max_capacity > 0),
    enrolled_count INT NOT NULL DEFAULT 0 CHECK (enrolled_count <= max_capacity),
    instructor VARCHAR(100) NOT NULL,
    status ENUM('ACTIVE', 'UPCOMING', 'CLOSED') DEFAULT 'ACTIVE',
    CONSTRAINT fk_courses_category FOREIGN KEY (category_id) REFERENCES categories(category_id)
        ON UPDATE CASCADE ON DELETE RESTRICT
);

-- ----------------------------------------------------------------------------
-- TABLE 3: Enrollments
-- Stores enrollment associations, status, and course completion records
-- Prevents duplicate active registrations using a UNIQUE composite constraint
-- ----------------------------------------------------------------------------
CREATE TABLE enrollments (
    enrollment_id VARCHAR(20) PRIMARY KEY,
    student_id VARCHAR(15) NOT NULL,
    course_id VARCHAR(15) NOT NULL,
    registration_date DATE NOT NULL,
    status ENUM('REGISTERED', 'IN_PROGRESS', 'COMPLETED', 'CANCELLED') DEFAULT 'REGISTERED',
    completion_score DECIMAL(5,2) DEFAULT NULL CHECK (completion_score IS NULL OR (completion_score >= 0.00 AND completion_score <= 100.00)),
    last_updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT fk_enrollments_student FOREIGN KEY (student_id) REFERENCES students(student_id)
        ON UPDATE CASCADE ON DELETE CASCADE,
    CONSTRAINT fk_enrollments_course FOREIGN KEY (course_id) REFERENCES courses(course_id)
        ON UPDATE CASCADE ON DELETE CASCADE,
    -- Prevent duplicate registration for the same student in the same course
    CONSTRAINT uq_student_course UNIQUE (student_id, course_id)
);

-- ----------------------------------------------------------------------------
-- INDEXES FOR QUERY OPTIMIZATION (Unit 3 of 25ITT31)
-- ----------------------------------------------------------------------------
CREATE INDEX idx_students_dept ON students(department);
CREATE INDEX idx_courses_category ON courses(category_id);
CREATE INDEX idx_enrollments_status ON enrollments(status);
CREATE INDEX idx_enrollments_student ON enrollments(student_id);
CREATE INDEX idx_enrollments_course ON enrollments(course_id);

-- ----------------------------------------------------------------------------
-- VIEWS (Unit 2: SQL Views)
-- ----------------------------------------------------------------------------
CREATE OR REPLACE VIEW v_course_enrollment_summary AS
SELECT 
    c.course_id,
    c.course_name,
    cat.category_name,
    c.duration_hours,
    c.max_capacity,
    c.enrolled_count,
    (c.max_capacity - c.enrolled_count) AS available_seats,
    ROUND((c.enrolled_count * 100.0 / c.max_capacity), 1) AS occupancy_percentage,
    c.instructor
FROM courses c
JOIN categories cat ON c.category_id = cat.category_id;

CREATE OR REPLACE VIEW v_student_course_details AS
SELECT 
    e.enrollment_id,
    s.student_id,
    s.name AS student_name,
    s.department,
    s.year_of_study,
    c.course_id,
    c.course_name,
    e.registration_date,
    e.status,
    e.completion_score
FROM enrollments e
JOIN students s ON e.student_id = s.student_id
JOIN courses c ON e.course_id = c.course_id;

-- ----------------------------------------------------------------------------
-- TRIGGERS (Unit 2: Advanced SQL - Triggers)
-- Automatically increment and decrement course enrolled_count safely
-- ----------------------------------------------------------------------------
DELIMITER //

CREATE TRIGGER trg_after_enrollment_insert
AFTER INSERT ON enrollments
FOR EACH ROW
BEGIN
    IF NEW.status IN ('REGISTERED', 'IN_PROGRESS', 'COMPLETED') THEN
        UPDATE courses 
        SET enrolled_count = enrolled_count + 1 
        WHERE course_id = NEW.course_id;
    END IF;
END//

CREATE TRIGGER trg_after_enrollment_update
AFTER UPDATE ON enrollments
FOR EACH ROW
BEGIN
    -- If status changed to CANCELLED, release a seat
    IF OLD.status != 'CANCELLED' AND NEW.status = 'CANCELLED' THEN
        UPDATE courses 
        SET enrolled_count = enrolled_count - 1 
        WHERE course_id = NEW.course_id;
    END IF;
    -- If status revived from CANCELLED, occupy a seat
    IF OLD.status = 'CANCELLED' AND NEW.status != 'CANCELLED' THEN
        UPDATE courses 
        SET enrolled_count = enrolled_count + 1 
        WHERE course_id = NEW.course_id;
    END IF;
END//

DELIMITER ;
