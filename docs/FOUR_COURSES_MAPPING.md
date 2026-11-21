# Four Courses Integration Matrix
## Academic Year 2026-27 (ODD) | Activity: Project-Based Assessment
**Scenario 17: Online Course Registration and Student Enrollment Analysis System**  
**Student:** Dhanush K | **Reg No:** 732925ITR017 | **Class:** 25IT3A  
**Institution:** Velalar College of Engineering and Technology, Erode - 12 (Department of IT)

---

| Course Code & Name | Syllabus Scope | Specific Role in Scenario 17 | Implemented Technical Deliverables |
| :--- | :--- | :--- | :--- |
| **25ITT31: Database Management Systems (DBMS)** | Unit 1: Database Design & ER Model<br>Unit 2: SQL (DDL, DML, Joins, Triggers)<br>Unit 3: Normalization (1NF-3NF/BCNF)<br>Unit 4: Transaction Management (ACID)<br>Unit 5: NoSQL Databases | Provides the central relational persistence engine, guarantees data consistency, prevents duplicate enrollments via unique key constraints, and synchronizes seat counters via database triggers. | - `database/schema.sql`<br>- `database/sample_data.sql`<br>- `database/queries.sql`<br>- `database/terminal_guide.md`<br>- Interactive Web SQL Terminal |
| **25ITT32: Java Programming** | Unit 1: Java Fundamentals & Classes<br>Unit 2: Inheritance & Packages<br>Unit 3: Exceptions & Multithreading<br>Unit 4: String Handling & JDBC<br>Unit 5: Generics, Collections, Streams | Implements the core object-oriented business logic, synchronized thread-safe course registration, custom domain exception handling, and functional reporting streams. | - `java/src/models/*.java`<br>- `java/src/exceptions/*.java`<br>- `java/src/services/*.java`<br>- `java/src/database/*.java`<br>- `java/src/Main.java`<br>- `java/README.md` |
| **25ITT33: Software Engineering** | Unit 1: Software Process (Agile Scrum)<br>Unit 2: Requirements Engineering (SRS)<br>Unit 3: Software Design & UML Modeling<br>Unit 4: Verification & Validation Testing<br>Unit 5: Project Management & Metrics | Guides the entire engineering lifecycle: requirements elicitation, structured architectural and behavioral modeling (Class, Component, Activity, Use Case), basis path testing, and effort estimation. | - `docs/SRS.md`<br>- `docs/SOFTWARE_ENGINEERING.md`<br>- `docs/TESTING.md`<br>- Architecture Diagram<br>- Class Diagram<br>- Component Diagram<br>- Activity Diagram |
| **25ITC31: Foundations of Data Science** | Unit 1: Data Science Fundamentals<br>Unit 2: Python Foundations<br>Unit 3: Data Wrangling (NumPy, Pandas)<br>Unit 4: Data Cleaning & Preprocessing<br>Unit 5: Exploratory Data Analysis & Viz | Ingests registration and enrollment datasets, calculates statistical distribution metrics, cleans records, and generates graphical visualizations for institutional decision making. | - `python/enrollment_analysis.py`<br>- `python/requirements.txt`<br>- `python/README.md`<br>- `python/generated_charts/*.png`<br>- Interactive Web Chart Dashboard |

---

### Verification Note:
Every syllabus unit across all four courses has a concrete, working implementation within this repository and on the live deployed web portal.
