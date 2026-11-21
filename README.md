# Online Course Registration and Student Enrollment Analysis System
### Project-Based Assessment — Scenario 17

[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages%2024%2F7-brightgreen?style=for-the-badge&logo=github)](https://dhanushitr017.github.io/vcet-course-registration/)
[![Student](https://img.shields.io/badge/Developer-Dhanush%20K%20(732925ITR017)-blue?style=for-the-badge)](https://github.com/dhanushITR017)
[![Class](https://img.shields.io/badge/Class-25IT3A-orange?style=for-the-badge)](https://github.com/dhanushITR017)
[![Institution](https://img.shields.io/badge/VCET-Information%20Technology-purple?style=for-the-badge)](https://velalarengg.ac.in)

---

## 📌 Project Overview
* **Institution:** Velalar College of Engineering and Technology (Autonomous), Erode – 12
* **Department:** Department of Information Technology
* **Academic Year:** 2026–27 (ODD)
* **Student Name:** **Dhanush K**
* **Register Number:** **732925ITR017**
* **Class:** **25IT3A**
* **Assigned Topic:** **Scenario 17 — Online Course Registration and Student Enrollment Analysis System**
* **GitHub Repository:** [https://github.com/dhanushITR017/vcet-course-registration](https://github.com/dhanushITR017/vcet-course-registration)
* **24/7 Live Website:** [https://dhanushitr017.github.io/vcet-course-registration/](https://dhanushitr017.github.io/vcet-course-registration/)

---

## 🎯 Problem Statement & Scope
An educational institution offers various certificate courses, skill development programs, and technical training sessions. Managing course details, student registrations, enrollment limits, and completion records manually can lead to duplicate registrations, difficulties tracking available seats, and delays in identifying popular courses.

This system provides a fullstack software engineering solution implemented with **Java (25ITT32)**, **DBMS (25ITT31)**, **Software Engineering (25ITT33)**, and **Foundations of Data Science (25ITC31)**.

---

## 🌟 Key Features & Functional Requirements

1. **Student Record Management:** Stores student ID, name, engineering department, and year of study.
2. **Dynamic Course Catalog:** Maintains course ID, title, category, duration, maximum seat capacity, and instructor assignments.
3. **Duplicate Registration Prevention:** Rejects duplicate active registrations for the same course (`DuplicateEnrollmentException`).
4. **Seat Capacity Enforcement:** Automatically verifies seat availability before registration and prevents overbooking (`CourseFullException`).
5. **Lifecycle Tracking & Completion Records:** Tracks status (`REGISTERED`, `IN_PROGRESS`, `COMPLETED`, `CANCELLED`) and records completion percentage grades.
6. **Administrative Reporting & Dynamic Aggregation:** Live summaries on course occupancy, available seats, and department-wise participation.
7. **Python Data Science & EDA Visualizations:** Ingests dataset via Pandas/NumPy to produce publication-grade charts of popularity, capacity utilization, and department distributions.
8. **Interactive SQL Terminal on Live Website:** Run DDL/DML, multi-table joins, nested subqueries, and triggers in real-time in the browser with formatted output tables.

---

## 🏛️ Four Courses Integration Matrix

| Course Code & Name | Role & Responsibility in Scenario 17 | Core Artifacts |
| :--- | :--- | :--- |
| **25ITT31: Database Management Systems** | 3NF relational schema, integrity constraints, triggers for seat counters, transaction management, and SQL terminal queries. | `database/schema.sql`<br>`database/sample_data.sql`<br>`database/queries.sql`<br>`database/terminal_guide.md`<br>`docs/DBMS_DESIGN.md` |
| **25ITT32: Java Programming** | Object-oriented domain models, custom exception handling, synchronized thread-safe registrations, and Stream API reports. | `java/src/Main.java`<br>`java/src/models/*`<br>`java/src/services/*`<br>`java/src/exceptions/*` |
| **25ITT33: Software Engineering** | Agile Scrum process, IEEE 830 SRS, structured UML diagrams (Architecture, Class, Component, Activity), testing suite (V(G)=6), and COCOMO estimation. | `docs/SRS.md`<br>`docs/SOFTWARE_ENGINEERING.md`<br>`docs/TESTING.md` |
| **25ITC31: Foundations of Data Science** | Ingestion of relational records, Pandas data cleaning, missing score handling, and Matplotlib/Seaborn visual charts. | `python/enrollment_analysis.py`<br>`python/requirements.txt`<br>`python/generated_charts/*` |

---

## 📐 Structured Software Engineering Diagrams

The live website features high-definition, interactive vector SVG diagrams strictly adhering to your assessment guidelines:
1. **Overall System Architecture Diagram:** Layered presentation, business logic, persistence, and analytics architecture.
2. **UML Class Diagram:** 3-compartment UML boxes (Class, Attributes, Operations) with inheritance arrows and associations.
3. **UML Component Diagram:** Component boxes with Ports, Provided lollipop interfaces (ball), and Required socket interfaces (cup).
4. **UML Activity Diagram:** Start node, Action states, Decision Diamonds (`[Seat Available]`, `[Duplicate Check]`), Fork and Join synchronization bars, and Final bullseye node.
5. **Entity-Relationship (ER) Diagram:** Chen notation with Rectangles (Entities), Ellipses (Attributes, PK underlined), Diamonds (Relationships), and Cardinality ratios (1:N, M:N).

---

## 🚀 Execution & Setup Instructions

### 1. Web Application (24/7 Live on GitHub Pages)
* Open [https://dhanushitr017.github.io/vcet-course-registration/](https://dhanushitr017.github.io/vcet-course-registration/) in any web browser.
* Zero installation or server setup required.

### 2. Java Application
```bash
# Navigate to Java source folder
cd java/src

# Compile all source files
javac -d ../bin models/*.java exceptions/*.java services/*.java database/*.java Main.java

# Run application
java -cp ../bin Main
```

### 3. Database Execution (MySQL CLI)
```bash
# Log into MySQL
mysql -u root -p

# Run schema and seed scripts
SOURCE database/schema.sql;
SOURCE database/sample_data.sql;

# Run sample join query
SELECT * FROM v_course_enrollment_summary;
```
*(Refer to `database/terminal_guide.md` for full command line tutorials and expected output tables)*

### 4. Python Data Science & Visualizations
```bash
# Install dependencies
pip install -r python/requirements.txt

# Run exploratory analysis and generate charts
python python/enrollment_analysis.py
```
*(Charts are output into `python/generated_charts/` and embedded dynamically on the website)*

---

## 🧪 Testing Summary

* **White-Box Testing:** Basis Path Testing with Cyclomatic Complexity $V(G) = 6$ across all execution paths.
* **Black-Box Testing:** Boundary Value Analysis and Equivalence Partitioning for capacity overflow and duplicate detection.
* **Test Pass Rate:** **10/10 Tests Passed (100% Success)**.

---

## 👤 Developer Profile
* **Name:** Dhanush K
* **Register Number:** 732925ITR017
* **Class:** 25IT3A
* **Degree:** B.Tech. Information Technology
* **Institution:** Velalar College of Engineering and Technology, Erode – 638012
