# 25ITT33 Software Engineering - Complete Course Integration
## Unit-Wise Process, Roles, and Architectural Models
**Scenario 17: Online Course Registration and Student Enrollment Analysis System**  
**Student:** Dhanush K | **Reg No:** 732925ITR017 | **Class:** 25IT3A | **VCET IT**

---

## Unit 1: Software Process

### 1.1 Nature of Software & Engineering Principles
The Online Course Registration System is an interactive, data-driven web-based enterprise system designed for academic institutions. Software engineering methodologies are applied to systematically elicit, design, construct, test, and manage the system while eliminating manual human errors.

### 1.2 Process Model Selection: Agile Scrum vs. Prescriptive Waterfall Hybrid
For this project, an **Agile Scrum process model** with prescriptive engineering checkpoints was chosen:
- **Sprint 1 (Requirements & Analysis):** Elicitation of Scenario 17 requirements, boundary constraints (prevent duplicate enrollments, enforce seat capacities), and creation of the IEEE 830 SRS.
- **Sprint 2 (System & Database Design):** Architecture modeling (MVC layered architecture), UML design (Class, Component, Activity, Use Case), and 3NF Relational Database design.
- **Sprint 3 (Core Implementation):** Development of Java core models, custom exception handlers, synchronization controls, and SQL DDL/DML/Triggers.
- **Sprint 4 (Analytics & Data Science):** Python Pandas data wrangling pipeline, EDA, and Matplotlib/Seaborn visual charts.
- **Sprint 5 (Testing & Web Deployment):** White-box and black-box test validation, GitHub Pages 24/7 web app deployment, and documentation compilation.

```
+-----------------------------------------------------------------------------------------+
|                               AGILE SPRINT LIFECYCLE                                    |
|                                                                                         |
|  [Sprint 1: SRS] ---> [Sprint 2: UML & DB] ---> [Sprint 3: Java] ---> [Sprint 4: EDA]  |
|         ^                                                                      |        |
|         |                                                                      v        |
|         +---------------------- [Sprint 5: Testing & Deploy] <-----------------+        |
+-----------------------------------------------------------------------------------------+
```

---

## Unit 2: Requirements Engineering

### 2.1 Elicitation & Domain Analysis
Requirements were elicited based on educational institutional needs:
1. Student enrollment overhead and manual registration tracking.
2. The danger of course overbooking when multiple students register simultaneously.
3. Preventing duplicate student enrollments in the same course.
4. Tracking post-registration lifecycle (in-progress, completion score, cancellation).

### 2.2 Use Case Modeling
Actors identified:
- **Student:** View Courses, Register for Course, View My Enrollments, Drop Course.
- **Faculty / Instructor:** View Enrolled Students, Grade & Update Course Completion.
- **Administrator / HOD:** Manage Course Offerings, Adjust Capacity Limits, View Analytics.

---

## Unit 3: Software Design & Structured Diagrams

### 3.1 Overall System Architecture
The application adopts a **Layered MVC (Model-View-Controller) Architecture**:
1. **Presentation Layer:** Responsive Web Portal with live UI/UX, SQL terminal simulator, and interactive data visualization charts.
2. **Controller / Service Layer:** Business logic controllers enforcing capacity validation and duplicate registration rejection.
3. **Domain Model Layer:** Java OOP entity classes (`Student`, `Course`, `Enrollment`).
4. **Data Access & Persistence Layer:** MySQL Relational Database with ACID constraints and JDBC connection manager.
5. **Analytics Subsystem:** Python NumPy, Pandas, Matplotlib, and Seaborn data pipeline.

```
+-----------------------------------------------------------------------------------------+
|                                OVERALL SYSTEM ARCHITECTURE                              |
+-----------------------------------------------------------------------------------------+
|                                                                                         |
|  [ PRESENTATION LAYER ]                                                                 |
|  +---------------------------+  +---------------------------+  +---------------------+  |
|  | Web Registration Portal   |  | Interactive SQL Terminal  |  | Analytics Dashboard |  |
|  +---------------------------+  +---------------------------+  +---------------------+  |
|                                       | (HTTP / REST)                                   |
|  [ BUSINESS & SERVICE LAYER ]         v                                                 |
|  +-----------------------------------------------------------------------------------+  |
|  | EnrollmentService.java  <--->  CourseService.java  <--->  Validation Engine       |  |
|  |  * Duplicate Check            * Capacity Validation       * Exception Handling    |  |
|  +-----------------------------------------------------------------------------------+  |
|                                       |                                                 |
|  [ DOMAIN MODEL LAYER ]               v                                                 |
|  +-------------------+  +-------------------+  +-------------------------------------+  |
|  | Student.java      |  | Course.java       |  | Enrollment.java                     |  |
|  +-------------------+  +-------------------+  +-------------------------------------+  |
|                                       |                                                 |
|  [ DATA PERSISTENCE & ANALYTICS LAYER ]                                                 |
|  +-----------------------------------------+   +-------------------------------------+  |
|  | MySQL Relational Database (3NF)         |   | Python Data Science Pipeline        |  |
|  | Tables: students, courses, enrollments  |   | Pandas / NumPy / Matplotlib / Seaborn|  |
|  +-----------------------------------------+   +-------------------------------------+  |
+-----------------------------------------------------------------------------------------+
```

---

### 3.2 UML Class Diagram (Matching Reference Image 2 Style)
Class diagram featuring 3 compartments (Class Name, Attributes, Operations) and relationships:

```
+-------------------------------------+
|               Student               |
+-------------------------------------+
| - studentId: String                 |
| - name: String                      |
| - department: String                |
| - yearOfStudy: int                  |
| - email: String                     |
+-------------------------------------+
| + getStudentId(): String            |
| + getName(): String                 |
| + getDepartment(): String           |
| + toString(): String                |
+-------------------------------------+
                  ^
                  | 1
                  |
                  | enrolls in
                  |
                  | *
+-------------------------------------+          1 +-------------------------------------+
|             Enrollment              |----------->|               Course                |
+-------------------------------------+            +-------------------------------------+
| - enrollmentId: String              |            | - courseId: String                  |
| - studentId: String                 |            | - courseName: String                |
| - courseId: String                  |            | - category: String                  |
| - registrationDate: LocalDate       |            | - durationHours: int                |
| - status: Enrollment.Status         |            | - maxCapacity: int                  |
| - completionScore: Double           |            | - enrolledCount: int                |
+-------------------------------------+            | - instructor: String                |
| + getEnrollmentId(): String         |            +-------------------------------------+
| + setStatus(Status): void           |            | + isFull(): boolean                 |
| + setCompletionScore(Double): void  |            | + getAvailableSeats(): int          |
| + toString(): String                |            | + incrementEnrollment(): boolean    |
+-------------------------------------+            | + decrementEnrollment(): void       |
                                                   +-------------------------------------+
```

---

### 3.3 UML Component Diagram (Matching Reference Image 3 Style)
Features components with ports, provided lollipop interfaces (circles), and required socket interfaces (semi-circles):

```
+------------------------------------------------------------------------------------------------+
| <<component>>                                                                                  |
| Online Course Registration & Enrollment System                                                 |
|                                                                                                |
|   (O-- [Port]  Registration UI                                                                 |
|    Provided Interface: IRegisterView                                                           |
|                                                                                                |
|       +------------------------------------+                                                   |
|       | <<component>>                      |                                                   |
|       | Registration Controller            |                                                   |
|       +------------------------------------+                                                   |
|              |                    |                                                            |
|             (O Provided          ) ( Required                                                  |
|              | ICourseCatalog     | IEnrollmentValidator                                       |
|              v                    v                                                            |
|       +-------------------+  +------------------------------------+                            |
|       | <<component>>     |  | <<component>>                      |                            |
|       | Course Catalog    |  | Capacity & Duplicate Engine        |                            |
|       | Manager           |  +------------------------------------+                            |
|       +-------------------+                  |                                                 |
|                                             ) ( Required Database Connection                   |
|                                              | IDatabaseAccess                                 |
|                                              v                                                 |
|                                      +-------------------------------+                         |
|                                      | <<component>>                 |                         |
|                                      | Persistence Layer             |--[Port]--(O DatabaseAPI |
|                                      | (MySQL / Relational DB)       |                         |
|                                      +-------------------------------+                         |
|                                                      |                                         |
|                                                     ) ( Required: IDataExtractor               |
|                                                      v                                         |
|                                      +-------------------------------+                         |
|                                      | <<component>>                 |                         |
|                                      | Python Analytics Engine       |                         |
|                                      +-------------------------------+                         |
+------------------------------------------------------------------------------------------------+
```

---

### 3.4 UML Activity Diagram (Matching Reference Image 1 Style)
Follows exact flow with initial node, action states, branching/decision diamonds, fork/join concurrency bars, and final node:

```
                              ( * ) Initial Node
                                |
                                v
                       [ Receive Registration Request ]
                                |
                                v
               < Is Course Capacity Available? >
                   /                        \
      [No / Full] /                          \ [Yes / Seat Available]
                 v                            v
      [ Throw CourseFullException ]   < Is Student Already Enrolled? >
                 |                        /                      \
                 |          [Yes / Dup]  /                        \ [No / Valid]
                 |                      v                          v
                 |           [ Throw DuplicateException ]    ====== FORK BAR ======
                 |                      |                     /                  \
                 |                      |                    v                    v
                 |                      |           [ Decrement Seat ]    [ Create Enrollment ]
                 |                      |           [ & Update Course]    [ Record (REGISTERED)]
                 |                      |                    \                    /
                 |                      |                     ====== JOIN BAR ======
                 |                      |                                |
                 |                      |                                v
                 |                      |                      [ Send Confirmation ]
                 \                      |                                /
                  \                     v                               /
                   +----------------> ( X ) Final End State <----------+
```

---

## Unit 4: Software Testing

### 4.1 Verification vs. Validation
- **Verification:** Review of SRS, design diagrams, code inspections, and cyclomatic complexity checks.
- **Validation:** Executing test cases against actual Java classes, SQL constraints, and web user interactions.

### 4.2 White-Box Testing (Basis Path Testing & Cyclomatic Complexity)
For `EnrollmentService.enrollStudent(studentId, courseId)`:
- Predicate nodes:
  1. `studentMap.containsKey(studentId)`
  2. `courseService.getCourseById(courseId).isPresent()`
  3. `alreadyEnrolled == true`
  4. `course.isFull() == true`
  5. `seatReserved == false`
- **Cyclomatic Complexity $V(G) = P + 1 = 5 + 1 = 6$ independent paths.**
All 6 independent paths are tested in `Main.java` and verified.

### 4.3 Black-Box Test Cases (Equivalence Partitioning & Boundary Value Analysis)

| Test ID | Module / Feature | Input Test Data | Expected Output | Actual Output | Status |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **TC-01** | Student Registration | `STU001, Dhanush K, IT, 3` | Student registered in memory/db | Registered successfully | **PASS** |
| **TC-02** | Valid Course Enrollment | `STU001` into `CRS101` (Cap: 10, Enr: 0) | Enrollment created (`ENR101`), Enr count = 1 | Enrollment confirmed | **PASS** |
| **TC-03** | Duplicate Enrollment Rejection | `STU001` into `CRS101` (Already registered) | `DuplicateEnrollmentException` thrown | Exception caught, enrollment blocked | **PASS** |
| **TC-04** | Course Capacity Boundary Check | Register 11th student into `CRS101` (Cap: 10) | `CourseFullException` thrown | Exception caught, no overbooking | **PASS** |
| **TC-05** | Course Completion & Grading | `ENR101`, Score = 96.5% | Status set to `COMPLETED`, Score stored | Record updated accurately | **PASS** |
| **TC-06** | Course Drop / Seat De-allocation | Drop enrollment `ENR101` | Status set to `CANCELLED`, Seat count incremented | Seat released back to pool | **PASS** |
| **TC-07** | SQL View Query Execution | `SELECT * FROM v_course_enrollment_summary` | Tabular summary with available seats & occupancy % | Formatted table output | **PASS** |
| **TC-08** | Python Data Extraction & Plotting | Ingest dataset, run `generate_visualizations()` | 4 PNG charts generated in `generated_charts/` | Charts created and rendered | **PASS** |

---

## Unit 5: Project Management

### 5.1 The 4 P's Framework
- **People:** Developer (Dhanush K), Faculty evaluators, Academic end-users.
- **Product:** Online Course Registration & Enrollment Analysis Web Application.
- **Process:** Agile 5-sprint plan with iterative releases and continuous integration.
- **Project:** 2-week turnaround, delivery of live website, Java codebase, SQL scripts, and Python analytics.

### 5.2 Estimation Metrics
- **Function Points (FP):**
  - External Inputs (EI): 5 (Student reg, course reg, enrollment, grade update, cancellation)
  - External Outputs (EO): 4 (Enrollment receipt, course catalog, completion certificate, status summary)
  - External Inquiries (EQ): 3 (Search courses, view available seats, student lookup)
  - Internal Logical Files (ILF): 3 (Students, Courses, Enrollments)
  - External Interface Files (EIF): 1 (Python CSV export)
  - Unadjusted Function Points (UFP) = 74 FP.
- **Basic COCOMO Estimation:**
  - Organic Project Mode: $Effort = 2.4 \times (KLOC)^{1.05} \approx 2.4 \times (1.2)^{1.05} = 2.91$ Person-Months.

### 5.3 Risk Management Matrix
1. **Concurrency Risk (Simultaneous Overbooking):** Mitigated via synchronized Java methods and database composite unique keys.
2. **Hosting Interruption:** Mitigated by utilizing GitHub Pages for 100% 24/7 free uptime with zero runtime container costs.
