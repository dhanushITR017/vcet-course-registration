# Java Implementation - Scenario 17
## Online Course Registration & Student Enrollment Analysis System

**Student Details:**
- **Name:** Dhanush K
- **Register Number:** 732925ITR017
- **Class:** 25IT3A
- **Institution:** Velalar College of Engineering and Technology (VCET), Erode - 12
- **Department:** Information Technology
- **Course:** 25ITT32 Java Programming

---

### Key Java Features Demonstrated:
1. **Unit 1 (Java Fundamentals):** Classes, Encapsulation, Constructors, Access Modifiers, and Console I/O.
2. **Unit 2 (OOP & Interfaces):** Model inheritance, separation of concerns across service layers, and Serializable implementation.
3. **Unit 3 (Exceptions & Multithreading):** Custom exceptions (`CourseFullException`, `DuplicateEnrollmentException`), robust `try-catch-finally`, and synchronized thread-safe enrollment methods.
4. **Unit 4 (Database Connectivity):** JDBC driver connection structure (`database.DatabaseConnection`) with transaction control.
5. **Unit 5 (Generics, Collections, Lambdas & Streams):** ConcurrentHashMap, Stream API filtering, mapping, groupingBy collectors, and custom comparators.

---

### Compilation & Execution:

```bash
# 1. Navigate to java/src directory
cd java/src

# 2. Compile all source files
javac -d ../bin models/*.java exceptions/*.java services/*.java database/*.java Main.java

# 3. Run the application
java -cp ../bin Main
```
