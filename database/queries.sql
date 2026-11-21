-- ============================================================================
-- 25ITT31 DATABASE MANAGEMENT SYSTEMS - LAB & TERMINAL QUERIES
-- SCENARIO 17: ONLINE COURSE REGISTRATION AND STUDENT ENROLLMENT ANALYSIS SYSTEM
-- DEVELOPER: DHANUSH K | REG NO: 732925ITR017 | CLASS: 25IT3A
-- ============================================================================

USE course_registration_db;

-- ============================================================================
-- QUERY 1: BASIC DDL & SELECTION (Unit 1 & 2)
-- Retrieve all available courses where capacity has not been exceeded
-- ============================================================================
SELECT 
    course_id, 
    course_name, 
    duration_hours, 
    max_capacity, 
    enrolled_count, 
    (max_capacity - enrolled_count) AS seats_available 
FROM courses 
WHERE enrolled_count < max_capacity 
ORDER BY seats_available DESC;

-- ============================================================================
-- QUERY 2: MULTI-TABLE INNER JOIN (Unit 2: Intermediate SQL - Joins)
-- List all student enrollments with student name, department, course name and status
-- ============================================================================
SELECT 
    e.enrollment_id,
    s.student_id,
    s.name AS student_name,
    s.department,
    c.course_name,
    e.registration_date,
    e.status,
    COALESCE(CONCAT(e.completion_score, '%'), 'Pending') AS grade
FROM enrollments e
INNER JOIN students s ON e.student_id = s.student_id
INNER JOIN courses c ON e.course_id = c.course_id
ORDER BY e.registration_date ASC;

-- ============================================================================
-- QUERY 3: AGGREGATE FUNCTIONS & GROUP BY (Unit 2)
-- Analyze course popularity: Total enrollments, avg completion score, and completion rate
-- ============================================================================
SELECT 
    c.course_id,
    c.course_name,
    c.max_capacity,
    COUNT(e.enrollment_id) AS total_enrolled,
    ROUND((COUNT(e.enrollment_id) * 100.0 / c.max_capacity), 1) AS occupancy_pct,
    ROUND(AVG(e.completion_score), 2) AS avg_completion_score,
    SUM(CASE WHEN e.status = 'COMPLETED' THEN 1 ELSE 0 END) AS completed_count
FROM courses c
LEFT JOIN enrollments e ON c.course_id = e.course_id
GROUP BY c.course_id, c.course_name, c.max_capacity
ORDER BY total_enrolled DESC;

-- ============================================================================
-- QUERY 4: NESTED SUBQUERY WITH IN & EXISTS (Unit 2: Nested Subqueries)
-- Find students who have completed courses with duration greater than 40 hours
-- ============================================================================
SELECT 
    s.student_id,
    s.name,
    s.department,
    s.year_of_study
FROM students s
WHERE s.student_id IN (
    SELECT e.student_id 
    FROM enrollments e 
    WHERE e.status = 'COMPLETED' 
      AND e.course_id IN (
          SELECT c.course_id 
          FROM courses c 
          WHERE c.duration_hours >= 40
      )
);

-- ============================================================================
-- QUERY 5: DEPARTMENT-WISE ENROLLMENT DISTRIBUTION
-- Count registrations grouped by engineering department
-- ============================================================================
SELECT 
    s.department,
    COUNT(DISTINCT s.student_id) AS total_participating_students,
    COUNT(e.enrollment_id) AS total_course_registrations
FROM students s
JOIN enrollments e ON s.student_id = e.student_id
GROUP BY s.department
ORDER BY total_course_registrations DESC;

-- ============================================================================
-- QUERY 6: TEST CASE VERIFICATION - PREVENT DUPLICATE REGISTRATION
-- (Attempting this query will trigger MySQL Error 1062 - Duplicate entry)
-- ============================================================================
-- INSERT INTO enrollments (enrollment_id, student_id, course_id, registration_date, status)
-- VALUES ('ENR999', '732925ITR017', 'CRS101', '2026-11-21', 'REGISTERED');
-- RESULT: ERROR 1062 (23000): Duplicate entry '732925ITR017-CRS101' for key 'uq_student_course'

-- ============================================================================
-- QUERY 7: VIEW QUERY
-- Querying the pre-created abstraction view
-- ============================================================================
SELECT * FROM v_course_enrollment_summary;
