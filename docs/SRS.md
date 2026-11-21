# Software Requirements Specification (SRS)
## Scenario 17: Online Course Registration and Student Enrollment Analysis System

**Academic Year:** 2026-27 (ODD)  
**Institution:** Velalar College of Engineering and Technology, Erode - 12  
**Department:** Information Technology  
**Developer:** Dhanush K | **Reg No:** 732925ITR017 | **Class:** 25IT3A  
**Course Code:** 25ITT33 Software Engineering (Unit 2: Requirements Engineering)

---

## 1. Introduction

### 1.1 Purpose
The purpose of this document is to define the formal functional and non-functional specifications for the **Online Course Registration and Student Enrollment Analysis System**. This system automates the management of certificate courses, skill development programs, and technical training sessions, eliminating manual registration bottlenecks, duplicate enrollments, seat capacity overflows, and reporting delays.

### 1.2 Scope
The software system encompasses:
- Student profile and academic record management.
- Course catalog management with dynamic capacity limits.
- Real-time seat reservation engine with duplicate enrollment prevention.
- Course completion tracking and score assignment.
- Administrative reporting and automated analytical data extraction.
- Statistical data visualization of course popularity and student participation using Python.

### 1.3 Definitions, Acronyms, and Abbreviations
- **SRS:** Software Requirements Specification
- **DBMS:** Database Management System
- **MVC:** Model-View-Controller
- **CRUD:** Create, Read, Update, Delete
- **ACID:** Atomicity, Consistency, Isolation, Durability
- **VCET:** Velalar College of Engineering and Technology

---

## 2. Overall Description

### 2.1 Product Perspective
The system functions as a modular fullstack web application with client-side interactive rendering, a Java backend business-logic layer, a relational MySQL database schema, and an offline/online Python Data Science analytics engine.

### 2.2 User Characteristics
- **Students:** Browse catalog, check real-time seat availability, enroll in courses, view active enrollments, and track completion certificates.
- **Instructors / Faculty:** Monitor assigned course rosters, input completion grades/scores, and view completion metrics.
- **Department Administrators / HOD:** Add/modify courses, adjust capacity limits, view enrollment analytics across departments, and generate institutional compliance reports.

### 2.3 General Constraints
- **Hosting:** 100% free, 24/7 continuous uptime hosted via GitHub Pages.
- **Data Integrity:** Zero tolerance for overbooking (enrollments cannot exceed course capacity) and duplicate enrollments.

---

## 3. Specific Functional Requirements (Scenario 17)

### FR-01: Maintain Student Details
* The system shall store student identification details: Student ID (Unique Primary Key), Full Name, Department (IT, CSE, AIDS, ECE, MECH, EEE), Year of Study (1–4), and Institutional Email.
* Input validation shall ensure valid email patterns and appropriate academic year bounds.

### FR-02: Maintain Course Details
* The system shall store course records: Course ID (Primary Key), Course Name, Category (Skill Development, Certificate Course, Technical Training), Duration (Hours), Maximum Enrollment Capacity, and Assigned Instructor.
* The system shall calculate available seats dynamically: `available_seats = max_capacity - enrolled_count`.

### FR-03: Course Registration & Duplicate Prevention
* The system shall allow eligible students to register for active courses.
* The system shall strictly prevent duplicate active registrations for the same student in the same course, raising an immediate descriptive error (`DuplicateEnrollmentException`).

### FR-04: Course Capacity Enforcement
* The system shall verify available seat capacity before confirming an enrollment.
* If `enrolled_count >= max_capacity`, the registration shall be rejected with `CourseFullException` and prevent seat overbooking.

### FR-05: Enrollment & Course Completion Tracking
* The system shall track the lifecycle status of each enrollment: `REGISTERED`, `IN_PROGRESS`, `COMPLETED`, or `CANCELLED`.
* The system shall allow instructors to record completion percentage scores (0.00% – 100.00%) upon successful course completion.
* Dropping/cancelling an enrollment shall atomically decrement `enrolled_count` and restore available seats.

### FR-06: Reporting & Analytical Summaries
* The system shall generate tabular summaries showing:
  - Course enrollment vs. total capacity.
  - Available seat tallies per course.
  - Student completion rates and average scores.
  - Department-wise participation distribution.

### FR-07: Python-Based Data Retrieval & Visualization
* The system shall provide data extract endpoints / datasets for Python processing.
* The Python engine shall preprocess data using NumPy & Pandas and render high-resolution visualizations (Matplotlib/Seaborn) for course popularity, capacity utilization, and student demographics.

---

## 4. Non-Functional Requirements

### 4.1 Performance Requirements
- Registration requests shall process and return confirmation within < 200 ms.
- Dynamic charts and diagrams shall render instantaneously on the web interface.

### 4.2 Security Requirements
- Role-based input sanitization against SQL injection and XSS.
- Strict referential integrity enforcement on relational database foreign keys.

### 4.3 Reliability & Availability
- Hosted on GitHub Pages with 99.99% availability, 24/7 access without server spin-down or sleeping.

### 4.4 Usability & Accessibility
- Clean, intuitive, modern responsive UI designed with accessibility standards, dark/light visual contrast, and zero dependency overhead.
