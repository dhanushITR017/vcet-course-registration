# 25ITT31 Database Management Systems - Architecture & Design
## ER Modeling, Relational Normalization, and Query Analysis
**Scenario 17: Online Course Registration and Student Enrollment Analysis System**  
**Student:** Dhanush K | **Reg No:** 732925ITR017 | **Class:** 25IT3A | **VCET IT**

---

## 1. Unit 1: Database Systems and Design

### 1.1 Purpose of Database in Scenario 17
Manual records result in duplicate registrations, overbooked seats, and lost records. The relational database enforces ACID transactions, primary key uniqueness, foreign key cascades, and check constraints.

### 1.2 Entity-Relationship (ER) Diagram (Chen Notation - Matching Reference Image 4)

```
                            ( name )       ( email )
                               \             /
                    ( dept )---[  STUDENT  ]---( year )
                               /           \
                       ( student_id )*   ( created_at )
                                      |
                                      | 1
                                      |
                                    < ENROLLS IN > ------( reg_date )
                                      |            ------( status )
                                      | M          ------( score )
                                      |
                        ( duration )  |   ( max_capacity )
                                \     |     /
              ( category_id )---[  COURSE  ]---( enrolled_count )
                                /     |     \
                       ( course_id )* |    ( instructor )
                                      |
                                      | M
                                      |
                                  < BELONGS TO >
                                      |
                                      | 1
                                      |
                            ( desc )--[ CATEGORY ]--( cat_name )
                                      |
                                  ( cat_id )*

Note: * indicates PRIMARY KEY (Underlined in standard Chen notation)
```

### 1.3 Entities & Attributes Specification:
1. **STUDENT:**
   - `student_id` (PK, VARCHAR(15))
   - `name` (VARCHAR(100))
   - `department` (VARCHAR(50))
   - `year_of_study` (INT)
   - `email` (VARCHAR(100), UNIQUE)
2. **COURSE:**
   - `course_id` (PK, VARCHAR(15))
   - `course_name` (VARCHAR(150))
   - `category_id` (FK, VARCHAR(10))
   - `duration_hours` (INT)
   - `max_capacity` (INT)
   - `enrolled_count` (INT)
   - `instructor` (VARCHAR(100))
3. **CATEGORY:**
   - `category_id` (PK, VARCHAR(10))
   - `category_name` (VARCHAR(100))
   - `description` (TEXT)
4. **ENROLLMENT (Associative Entity for M:N Relationship):**
   - `enrollment_id` (PK, VARCHAR(20))
   - `student_id` (FK, VARCHAR(15))
   - `course_id` (FK, VARCHAR(15))
   - `registration_date` (DATE)
   - `status` (ENUM)
   - `completion_score` (DECIMAL(5,2))
   - *Composite Unique Constraint:* `(student_id, course_id)` prevents duplicate enrollments.

---

## 2. Unit 2: Relational Model & SQL Operations
Refer to `database/schema.sql` and `database/queries.sql` for all DDL, DML, multi-table Joins, Aggregates, Nested Subqueries, Views, and Triggers.

---

## 3. Unit 3: Normalization (UNF to 3NF/BCNF)

### 3.1 Unnormalized Form (UNF)
A flat registration spreadsheet contains repeating groups:
`REGISTRATION(student_id, name, department, year, email, course_id, course_name, category, duration, capacity, instructor, reg_date, status, score)`

### 3.2 First Normal Form (1NF)
- **Eliminate Repeating Groups & Ensure Atomic Values:**
- Each row contains atomic scalar values.
- Primary composite key: `(student_id, course_id)`.
- Functional Dependencies:
  - $FD_1: student\_id \rightarrow name, department, year, email$
  - $FD_2: course\_id \rightarrow course\_name, category, duration, capacity, instructor$
  - $FD_3: (student\_id, course\_id) \rightarrow reg\_date, status, score$

### 3.3 Second Normal Form (2NF)
- **Eliminate Partial Dependencies:**
- In 1NF, $FD_1$ depends solely on part of the candidate key (`student_id`), and $FD_2$ depends solely on `course_id`.
- Decompose into:
  - `STUDENTS(student_id [PK], name, department, year, email)`
  - `COURSES(course_id [PK], course_name, category, duration, capacity, instructor)`
  - `ENROLLMENTS(enrollment_id [PK], student_id [FK], course_id [FK], reg_date, status, score)`

### 3.4 Third Normal Form (3NF) & BCNF
- **Eliminate Transitive Dependencies:**
- In `COURSES`, `category` has its own attributes (`category_name`, `description`). Transitive dependency: $course\_id \rightarrow category\_id \rightarrow category\_name$.
- Decompose `COURSES` and `CATEGORIES`:
  - `CATEGORIES(category_id [PK], category_name, description)`
  - `COURSES(course_id [PK], course_name, category_id [FK], duration, capacity, enrolled_count, instructor)`
- All determinants in all resulting relations are candidate keys. Thus, the database schema is in **3NF and BCNF**.

---

## 4. Unit 4: Transaction Management (ACID)
During enrollment, seat reservation and record creation must be atomic:
```sql
START TRANSACTION;
-- 1. Check capacity and reserve
UPDATE courses 
SET enrolled_count = enrolled_count + 1 
WHERE course_id = 'CRS101' AND enrolled_count < max_capacity;

-- 2. Insert enrollment record
INSERT INTO enrollments (enrollment_id, student_id, course_id, registration_date, status)
VALUES ('ENR125', '732925ITR017', 'CRS101', CURRENT_DATE, 'REGISTERED');

-- 3. Commit only if both succeed
COMMIT;
```
If capacity is exceeded or duplicate is detected, `ROLLBACK` executes, preserving consistency.

---

## 5. Unit 5: NoSQL Database Comparison (Relational vs. MongoDB)
- **Relational MySQL:** Selected for primary transactional core due to strict ACID compliance, declarative constraints (`CHECK`, `FOREIGN KEY`), and zero anomaly risks during concurrent seat reservations.
- **MongoDB Document Store:** Ideal for analytical reporting, student event logging, and course reviews where JSON documents can embed unstructured feedback and multi-media certificates:
  ```json
  {
    "_id": "ENR101",
    "student": { "id": "732925ITR017", "name": "Dhanush K", "dept": "IT" },
    "course": { "id": "CRS101", "name": "Full Stack Web Dev" },
    "completion": { "status": "COMPLETED", "score": 96.5, "certified_at": "2026-08-01" }
  }
  ```
