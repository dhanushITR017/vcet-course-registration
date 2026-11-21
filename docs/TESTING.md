# Software Testing & Quality Assurance Documentation
## 25ITT33 Software Engineering - Unit 4
**Scenario 17: Online Course Registration and Student Enrollment Analysis System**  
**Student:** Dhanush K | **Reg No:** 732925ITR017 | **Class:** 25IT3A | **VCET IT**

---

## 1. Testing Strategy & Objectives
The goal of testing in Scenario 17 is to verify that:
1. Student registration accurately records demographic data.
2. Course seat limits are strictly enforced (Boundary Value Testing).
3. Duplicate course registrations for the same student are completely prevented.
4. Enrollment status transitions (`REGISTERED` -> `IN_PROGRESS` -> `COMPLETED`) operate correctly.
5. Dropping a course releases the reserved seat back to the available pool.

---

## 2. Test Execution Matrix

| Test Case ID | Test Objective | Test Input Data | Expected Result | Actual Result | Status |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **TC-01** | Student Creation | `ID: STU001, Name: Dhanush K, Dept: IT, Year: 3` | Student object created and stored | Object stored successfully | **PASS** |
| **TC-02** | Normal Course Enrollment | `Student: STU001, Course: CRS101 (Seats: 10)` | Enrollment created (`ENR101`), Enrolled count = 1 | Enrollment confirmed | **PASS** |
| **TC-03** | Duplicate Enrollment Prevention | `Student: STU001, Course: CRS101` (Again) | System rejects with `DuplicateEnrollmentException` | Exception caught: "Student already registered" | **PASS** |
| **TC-04** | Capacity Limit Boundary (At limit) | Fill 3 seats in `CRS101` (Cap: 3) | 3 enrollments confirmed, seats remaining = 0 | 3 confirmed, course marked FULL | **PASS** |
| **TC-05** | Capacity Overflow (Boundary + 1) | 4th student attempts enrollment in `CRS101` | System rejects with `CourseFullException` | Exception caught: "Max capacity of 3 reached" | **PASS** |
| **TC-06** | Course Completion & Grading | Mark `ENR101` complete with score 96.5% | Status updated to `COMPLETED`, score recorded | Status and score saved | **PASS** |
| **TC-07** | Course Cancellation (Seat Release) | Cancel enrollment `ENR101` | Status = `CANCELLED`, enrolled count decrements | Seat restored to available pool | **PASS** |
| **TC-08** | SQL Integrity Constraint | Direct SQL duplicate insert: `('ENR999', 'STU001', 'CRS101')` | MySQL rejects with Error 1062 (Duplicate Key) | Constraint enforced | **PASS** |
| **TC-09** | Python Data Preprocessing | Ingest dataset with 22 records | Data cleaned, null checks verified, 0 unhandled duplicates | Cleaned DataFrame ready | **PASS** |
| **TC-10** | Visualization Output | Run `generate_visualizations()` | 4 high-res charts output in `generated_charts/` | 4 PNG files generated | **PASS** |

---

## 3. White-Box Testing (Cyclomatic Complexity)
For `EnrollmentService.enrollStudent`:
- Number of Binary Decision Nodes ($P$) = 5
- Cyclomatic Complexity $V(G) = P + 1 = 6$
- All 6 execution paths (Student missing, Course missing, Duplicate detected, Capacity full, Atomic reservation fail, Successful registration) have been tested and verified in `Main.java`.

**Test Result Summary: 10/10 Tests Passed (100% Pass Rate).**
