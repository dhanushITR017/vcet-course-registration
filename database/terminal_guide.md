# DBMS Terminal Execution Guide & SQL Output Tables
## 25ITT31 Database Management Systems
**Scenario 17: Online Course Registration and Student Enrollment Analysis System**  
**Student:** Dhanush K | **Reg No:** 732925ITR017 | **Class:** 25IT3A | **VCET IT**

---

## 1. How to Run in MySQL Terminal (CLI)

### Step 1: Open Terminal / Command Prompt
Open your terminal (PowerShell, Command Prompt, or Linux/macOS bash) and log into MySQL:
```bash
mysql -u root -p
```
*(Enter your MySQL root password when prompted)*

### Step 2: Create & Load the Schema
```sql
-- 1. Create and select the database
CREATE DATABASE course_registration_db;
USE course_registration_db;

-- 2. Execute the schema script (or run via source command)
SOURCE D:/pro76/database/schema.sql;

-- 3. Populate sample data
SOURCE D:/pro76/database/sample_data.sql;
```

---

## 2. Executing Queries & Viewing Output Tables

### Query 1: Retrieve Available Courses with Seat Counters
```sql
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
```

#### Terminal Output Table:
```
+-----------+-----------------------------------+----------------+--------------+----------------+-----------------+
| course_id | course_name                       | duration_hours | max_capacity | enrolled_count | seats_available |
+-----------+-----------------------------------+----------------+--------------+----------------+-----------------+
| CRS106    | Data Analysis with Python         |             35 |           12 |              3 |               9 |
| CRS104    | Database Design & SQL Mastery     |             40 |           10 |              2 |               8 |
| CRS101    | Full Stack Web Development        |             45 |           10 |              5 |               5 |
| CRS105    | Cybersecurity & Ethical Hacking   |             50 |            6 |              3 |               3 |
| CRS102    | Applied Machine Learning          |             60 |            8 |              5 |               3 |
| CRS103    | Cloud Computing & DevOps          |             30 |            6 |              4 |               2 |
+-----------+-----------------------------------+----------------+--------------+----------------+-----------------+
6 rows in set (0.00 sec)
```

---

### Query 2: Multi-Table Join for Student Course Details
```sql
SELECT 
    e.enrollment_id,
    s.student_id,
    s.name AS student_name,
    s.department,
    c.course_name,
    e.status,
    COALESCE(CONCAT(e.completion_score, '%'), 'Pending') AS score
FROM enrollments e
INNER JOIN students s ON e.student_id = s.student_id
INNER JOIN courses c ON e.course_id = c.course_id
WHERE s.student_id = '732925ITR017';
```

#### Terminal Output Table:
```
+---------------+---------------+--------------+------------+-------------------------------+-------------+---------+
| enrollment_id | student_id    | student_name | department | course_name                   | status      | score   |
+---------------+---------------+--------------+------------+-------------------------------+-------------+---------+
| ENR101        | 732925ITR017  | Dhanush K    | IT         | Full Stack Web Development    | COMPLETED   | 96.50%  |
| ENR102        | 732925ITR017  | Dhanush K    | IT         | Applied Machine Learning      | IN_PROGRESS | Pending |
| ENR103        | 732925ITR017  | Dhanush K    | IT         | Database Design & SQL Mastery | COMPLETED   | 92.00%  |
+---------------+---------------+--------------+------------+-------------------------------+-------------+---------+
3 rows in set (0.00 sec)
```

---

### Query 3: Course Popularity & Completion Analysis
```sql
SELECT 
    c.course_id,
    c.course_name,
    c.max_capacity,
    COUNT(e.enrollment_id) AS total_enrolled,
    ROUND((COUNT(e.enrollment_id) * 100.0 / c.max_capacity), 1) AS occupancy_pct,
    ROUND(AVG(e.completion_score), 2) AS avg_score,
    SUM(CASE WHEN e.status = 'COMPLETED' THEN 1 ELSE 0 END) AS completed_count
FROM courses c
LEFT JOIN enrollments e ON c.course_id = e.course_id
GROUP BY c.course_id, c.course_name, c.max_capacity
ORDER BY total_enrolled DESC;
```

#### Terminal Output Table:
```
+-----------+-----------------------------------+--------------+----------------+---------------+-----------+-----------------+
| course_id | course_name                       | max_capacity | total_enrolled | occupancy_pct | avg_score | completed_count |
+-----------+-----------------------------------+--------------+----------------+---------------+-----------+-----------------+
| CRS101    | Full Stack Web Development        |           10 |              5 |          50.0 |     89.67 |               3 |
| CRS102    | Applied Machine Learning          |            8 |              5 |          62.5 |     96.00 |               2 |
| CRS103    | Cloud Computing & DevOps          |            6 |              4 |          66.7 |     89.75 |               2 |
| CRS105    | Cybersecurity & Ethical Hacking   |            6 |              3 |          50.0 |      NULL |               0 |
| CRS106    | Data Analysis with Python         |           12 |              3 |          25.0 |     93.25 |               2 |
| CRS104    | Database Design & SQL Mastery     |           10 |              2 |          20.0 |     92.00 |               1 |
+-----------+-----------------------------------+--------------+----------------+---------------+-----------+-----------------+
6 rows in set (0.00 sec)
```

---

### Query 4: Department-wise Participation Analysis
```sql
SELECT 
    s.department,
    COUNT(DISTINCT s.student_id) AS total_students,
    COUNT(e.enrollment_id) AS total_enrollments
FROM students s
JOIN enrollments e ON s.student_id = e.student_id
GROUP BY s.department
ORDER BY total_enrollments DESC;
```

#### Terminal Output Table:
```
+------------+----------------+-------------------+
| department | total_students | total_enrollments |
+------------+----------------+-------------------+
| IT         |              4 |                 9 |
| AIDS       |              2 |                 4 |
| CSE        |              2 |                 4 |
| ECE        |              2 |                 3 |
| MECH       |              1 |                 1 |
| EEE        |              1 |                 1 |
+------------+----------------+-------------------+
6 rows in set (0.01 sec)
```

---

### Query 5: Verification of Duplicate Registration Prevention
```sql
-- Attempting to register Dhanush K (732925ITR017) again into CRS101:
INSERT INTO enrollments (enrollment_id, student_id, course_id, registration_date, status)
VALUES ('ENR999', '732925ITR017', 'CRS101', '2026-11-21', 'REGISTERED');
```

#### Terminal Output Error:
```
ERROR 1062 (23000): Duplicate entry '732925ITR017-CRS101' for key 'enrollments.uq_student_course'
```
*Confirmation:* Integrity constraint `uq_student_course` successfully rejected the duplicate registration!

---

## 3. Web-Based Interactive SQL Terminal
On the live deployed website (`https://dhanushitr017.github.io/vcet-course-registration/`), evaluators and students can test all these queries without installing MySQL, using the built-in **Interactive SQL Terminal** located on the DBMS tab!
