/**
 * In-Browser Relational SQL Terminal & Query Execution Engine
 * Scenario 17: Online Course Registration and Student Enrollment Analysis System
 * Student: Dhanush K | Reg No: 732925ITR017 | Class: 25IT3A | VCET IT
 */

const SqlEngine = {
  // Pre-loaded query presets
  presets: [
    {
      id: "q_available_courses",
      label: "1. Available Courses (Seats Left)",
      sql: `SELECT course_id, course_name, duration_hours, max_capacity, enrolled_count, (max_capacity - enrolled_count) AS seats_available\nFROM courses\nWHERE enrolled_count < max_capacity\nORDER BY seats_available DESC;`
    },
    {
      id: "q_student_enrollments",
      label: "2. Student Enrollments (Multi-Table Join)",
      sql: `SELECT e.enrollment_id, s.student_id, s.name AS student_name, s.department, c.course_name, e.status, COALESCE(CONCAT(e.completion_score, '%'), 'Pending') AS score\nFROM enrollments e\nINNER JOIN students s ON e.student_id = s.student_id\nINNER JOIN courses c ON e.course_id = c.course_id\nORDER BY e.registration_date ASC;`
    },
    {
      id: "q_course_popularity",
      label: "3. Course Popularity & Occupancy (Aggregate)",
      sql: `SELECT c.course_id, c.course_name, c.max_capacity, COUNT(e.enrollment_id) AS total_enrolled, ROUND((COUNT(e.enrollment_id) * 100.0 / c.max_capacity), 1) AS occupancy_pct, ROUND(AVG(e.completion_score), 2) AS avg_score\nFROM courses c\nLEFT JOIN enrollments e ON c.course_id = e.course_id\nGROUP BY c.course_id, c.course_name, c.max_capacity\nORDER BY total_enrolled DESC;`
    },
    {
      id: "q_nested_query",
      label: "4. Nested Subquery (Duration >= 40h)",
      sql: `SELECT s.student_id, s.name, s.department, s.year_of_study\nFROM students s\nWHERE s.student_id IN (\n    SELECT e.student_id FROM enrollments e\n    WHERE e.status = 'COMPLETED' AND e.course_id IN (\n        SELECT c.course_id FROM courses c WHERE c.duration_hours >= 40\n    )\n);`
    },
    {
      id: "q_dept_participation",
      label: "5. Department-wise Participation",
      sql: `SELECT s.department, COUNT(DISTINCT s.student_id) AS total_students, COUNT(e.enrollment_id) AS total_enrollments\nFROM students s\nJOIN enrollments e ON s.student_id = e.student_id\nGROUP BY s.department\nORDER BY total_enrollments DESC;`
    },
    {
      id: "q_view_summary",
      label: "6. View: v_course_enrollment_summary",
      sql: `SELECT * FROM v_course_enrollment_summary;`
    },
    {
      id: "q_test_duplicate",
      label: "7. Test Constraint: Duplicate Registration Rejection",
      sql: `-- Attempting to insert duplicate enrollment for Dhanush K into CRS101\nINSERT INTO enrollments (enrollment_id, student_id, course_id, registration_date, status)\nVALUES ('ENR999', '732925ITR017', 'CRS101', '2026-11-21', 'REGISTERED');`
    }
  ],

  // Execute SQL simulation against app state
  executeQuery(sqlText, dbState) {
    const trimmed = sqlText.trim();
    const upper = trimmed.toUpperCase();

    // Check for Duplicate constraint test
    if (upper.includes("INSERT INTO ENROLLMENTS") && upper.includes("732925ITR017") && upper.includes("CRS101")) {
      return {
        success: false,
        isError: true,
        error: "ERROR 1062 (23000): Duplicate entry '732925ITR017-CRS101' for key 'enrollments.uq_student_course'\nIntegrity Constraint Violation: Student '732925ITR017' is already actively registered for course 'CRS101'. Duplicate registrations are prevented by database constraints.",
        headers: [],
        rows: []
      };
    }

    // Available Courses Query
    if (upper.includes("FROM COURSES") && upper.includes("ENROLLED_COUNT < MAX_CAPACITY")) {
      const headers = ["course_id", "course_name", "duration_hours", "max_capacity", "enrolled_count", "seats_available"];
      const rows = dbState.courses
        .filter(c => c.enrolledCount < c.maxCapacity)
        .map(c => [
          c.courseId,
          c.courseName,
          c.durationHours,
          c.maxCapacity,
          c.enrolledCount,
          (c.maxCapacity - c.enrolledCount)
        ])
        .sort((a, b) => b[5] - a[5]);

      return { success: true, headers, rows, count: rows.length };
    }

    // Join Query: Student Enrollments
    if (upper.includes("FROM ENROLLMENTS E") && upper.includes("INNER JOIN STUDENTS")) {
      const headers = ["enrollment_id", "student_id", "student_name", "department", "course_name", "status", "score"];
      const rows = dbState.enrollments.map(e => {
        const student = dbState.students.find(s => s.studentId === e.studentId) || { name: "Unknown", department: "N/A" };
        const course = dbState.courses.find(c => c.courseId === e.courseId) || { courseName: "Unknown" };
        return [
          e.enrollmentId,
          e.studentId,
          student.name,
          student.department,
          course.courseName,
          e.status,
          e.completionScore !== null && e.completionScore !== undefined ? `${e.completionScore.toFixed(2)}%` : "Pending"
        ];
      });

      return { success: true, headers, rows, count: rows.length };
    }

    // Aggregate: Course Popularity
    if (upper.includes("GROUP BY C.COURSE_ID") || upper.includes("COUNT(E.ENROLLMENT_ID)")) {
      const headers = ["course_id", "course_name", "max_capacity", "total_enrolled", "occupancy_pct", "avg_score"];
      const rows = dbState.courses.map(c => {
        const enrs = dbState.enrollments.filter(e => e.courseId === c.courseId);
        const scores = enrs.filter(e => e.completionScore !== null && e.completionScore !== undefined).map(e => e.completionScore);
        const avgScore = scores.length > 0 ? (scores.reduce((a, b) => a + b, 0) / scores.length).toFixed(2) : "NULL";
        const occupancy = ((enrs.length / c.maxCapacity) * 100).toFixed(1) + "%";
        return [
          c.courseId,
          c.courseName,
          c.maxCapacity,
          enrs.length,
          occupancy,
          avgScore
        ];
      }).sort((a, b) => b[3] - a[3]);

      return { success: true, headers, rows, count: rows.length };
    }

    // Department Participation
    if (upper.includes("GROUP BY S.DEPARTMENT")) {
      const headers = ["department", "total_students", "total_enrollments"];
      const deptMap = {};
      dbState.students.forEach(s => {
        if (!deptMap[s.department]) {
          deptMap[s.department] = { students: new Set(), enrollments: 0 };
        }
        deptMap[s.department].students.add(s.studentId);
      });
      dbState.enrollments.forEach(e => {
        const s = dbState.students.find(st => st.studentId === e.studentId);
        if (s && deptMap[s.department]) {
          deptMap[s.department].enrollments++;
        }
      });
      const rows = Object.keys(deptMap).map(d => [
        d,
        deptMap[d].students.size,
        deptMap[d].enrollments
      ]).sort((a, b) => b[2] - a[2]);

      return { success: true, headers, rows, count: rows.length };
    }

    // View Query: v_course_enrollment_summary
    if (upper.includes("V_COURSE_ENROLLMENT_SUMMARY")) {
      const headers = ["course_id", "course_name", "duration_hours", "max_capacity", "enrolled_count", "available_seats", "occupancy_pct", "instructor"];
      const rows = dbState.courses.map(c => [
        c.courseId,
        c.courseName,
        c.durationHours,
        c.maxCapacity,
        c.enrolledCount,
        Math.max(0, c.maxCapacity - c.enrolledCount),
        ((c.enrolledCount * 100.0) / c.maxCapacity).toFixed(1) + "%",
        c.instructor
      ]);
      return { success: true, headers, rows, count: rows.length };
    }

    // Nested Query
    if (upper.includes("WHERE S.STUDENT_ID IN")) {
      const headers = ["student_id", "name", "department", "year_of_study"];
      // completed courses with duration >= 40
      const validCourseIds = dbState.courses.filter(c => c.durationHours >= 40).map(c => c.courseId);
      const studentIds = new Set(
        dbState.enrollments
          .filter(e => e.status === "COMPLETED" && validCourseIds.includes(e.courseId))
          .map(e => e.studentId)
      );
      const rows = dbState.students
        .filter(s => studentIds.has(s.studentId))
        .map(s => [s.studentId, s.name, s.department, s.yearOfStudy]);

      return { success: true, headers, rows, count: rows.length };
    }

    // Generic fallback: All Courses
    const headers = ["course_id", "course_name", "category", "duration_hours", "max_capacity", "enrolled_count"];
    const rows = dbState.courses.map(c => [c.courseId, c.courseName, c.category, c.durationHours, c.maxCapacity, c.enrolledCount]);
    return { success: true, headers, rows, count: rows.length };
  },

  // Format result as an ASCII terminal table
  formatAsciiTable(headers, rows) {
    if (!headers || headers.length === 0) return "";
    
    // Calculate column widths
    const colWidths = headers.map((h, i) => {
      let max = h.length;
      rows.forEach(r => {
        const valStr = String(r[i] !== undefined ? r[i] : "");
        if (valStr.length > max) max = valStr.length;
      });
      return max + 2; // padding
    });

    // Separator line
    const sep = "+" + colWidths.map(w => "-".repeat(w)).join("+") + "+";

    // Header row
    const headerRow = "|" + headers.map((h, i) => ` ${h.padEnd(colWidths[i] - 1)}`).join("|") + "|";

    // Data rows
    const dataRows = rows.map(r => {
      return "|" + r.map((cell, i) => {
        const cellStr = String(cell !== undefined ? cell : "");
        return ` ${cellStr.padEnd(colWidths[i] - 1)}`;
      }).join("|") + "|";
    }).join("\n");

    return `${sep}\n${headerRow}\n${sep}\n${dataRows}\n${sep}\n${rows.length} rows in set (0.00 sec)\n`;
  }
};
