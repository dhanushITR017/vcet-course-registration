/**
 * Master Application Controller & State Engine
 * Scenario 17: Online Course Registration and Student Enrollment Analysis System
 * Student: Dhanush K | Reg No: 732925ITR017 | Class: 25IT3A
 * Institution: Velalar College of Engineering and Technology, Erode - 12
 */

const AppState = {
  activeStudentId: "732925ITR017", // Default to Dhanush K
  students: [],
  courses: [],
  enrollments: [],
  storageKey: "VCET_SCENARIO_17_DATA_v1",

  // Initial Seed Data
  getSeedData() {
    return {
      students: [
        { studentId: "732925ITR017", name: "Dhanush K", department: "IT", yearOfStudy: 3, email: "dhanush.it@vcet.edu.in" },
        { studentId: "732925ITR047", name: "Praveen Raj M", department: "IT", yearOfStudy: 3, email: "praveen.it@vcet.edu.in" },
        { studentId: "732925ITR077", name: "Karthik Raja S", department: "IT", yearOfStudy: 3, email: "karthik.it@vcet.edu.in" },
        { studentId: "732925ITR107", name: "Yuvan Shankar V", department: "IT", yearOfStudy: 3, email: "yuvan.it@vcet.edu.in" },
        { studentId: "732925CSR012", name: "Sowmiya S", department: "CSE", yearOfStudy: 2, email: "sowmiya.cse@vcet.edu.in" },
        { studentId: "732925CSR034", name: "Abhishek Sharma R", department: "CSE", yearOfStudy: 3, email: "abhishek.cse@vcet.edu.in" },
        { studentId: "732925ADR009", name: "Gokul Nath R", department: "AIDS", yearOfStudy: 3, email: "gokul.aids@vcet.edu.in" },
        { studentId: "732925ADR021", name: "Deepika V", department: "AIDS", yearOfStudy: 2, email: "deepika.aids@vcet.edu.in" },
        { studentId: "732925ECR045", name: "Harini K", department: "ECE", yearOfStudy: 4, email: "harini.ece@vcet.edu.in" },
        { studentId: "732925ECR089", name: "Vigneshwaran P", department: "ECE", yearOfStudy: 2, email: "vignesh.ece@vcet.edu.in" },
        { studentId: "732925MER014", name: "Arun Kumar M", department: "MECH", yearOfStudy: 3, email: "arun.mech@vcet.edu.in" },
        { studentId: "732925EER028", name: "Nandhini Devi B", department: "EEE", yearOfStudy: 4, email: "nandhini.eee@vcet.edu.in" }
      ],
      courses: [
        { courseId: "CRS101", courseName: "Full Stack Web Development", category: "Skill Development", durationHours: 45, maxCapacity: 10, enrolledCount: 5, instructor: "Dr. S. Kaviya" },
        { courseId: "CRS102", courseName: "Applied Machine Learning", category: "Technical Training", durationHours: 60, maxCapacity: 8, enrolledCount: 5, instructor: "Prof. M. Prakash" },
        { courseId: "CRS103", courseName: "Cloud Computing & DevOps", category: "Certificate Course", durationHours: 30, maxCapacity: 6, enrolledCount: 4, instructor: "Dr. R. Anand" },
        { courseId: "CRS104", courseName: "Database Design & SQL Mastery", category: "Skill Development", durationHours: 40, maxCapacity: 10, enrolledCount: 2, instructor: "Prof. T. Divya" },
        { courseId: "CRS105", courseName: "Cybersecurity & Ethical Hacking", category: "Technical Training", durationHours: 50, maxCapacity: 6, enrolledCount: 3, instructor: "Dr. N. Karthik" },
        { courseId: "CRS106", courseName: "Data Analysis with Python", category: "Skill Development", durationHours: 35, maxCapacity: 12, enrolledCount: 3, instructor: "Prof. K. Soundarya" }
      ],
      enrollments: [
        { enrollmentId: "ENR101", studentId: "732925ITR017", courseId: "CRS101", registrationDate: "2026-08-01", status: "COMPLETED", completionScore: 96.50 },
        { enrollmentId: "ENR102", studentId: "732925ITR017", courseId: "CRS102", registrationDate: "2026-08-05", status: "IN_PROGRESS", completionScore: null },
        { enrollmentId: "ENR103", studentId: "732925ITR017", courseId: "CRS104", registrationDate: "2026-08-10", status: "COMPLETED", completionScore: 92.00 },
        { enrollmentId: "ENR104", studentId: "732925ITR047", courseId: "CRS101", registrationDate: "2026-08-02", status: "COMPLETED", completionScore: 88.50 },
        { enrollmentId: "ENR105", studentId: "732925ITR047", courseId: "CRS103", registrationDate: "2026-08-06", status: "IN_PROGRESS", completionScore: null },
        { enrollmentId: "ENR106", studentId: "732925ITR077", courseId: "CRS102", registrationDate: "2026-08-07", status: "IN_PROGRESS", completionScore: null },
        { enrollmentId: "ENR107", studentId: "732925ITR077", courseId: "CRS105", registrationDate: "2026-08-12", status: "REGISTERED", completionScore: null },
        { enrollmentId: "ENR108", studentId: "732925ITR107", courseId: "CRS101", registrationDate: "2026-08-03", status: "COMPLETED", completionScore: 85.00 },
        { enrollmentId: "ENR109", studentId: "732925ITR107", courseId: "CRS104", registrationDate: "2026-08-11", status: "IN_PROGRESS", completionScore: null },
        { enrollmentId: "ENR110", studentId: "732925CSR012", courseId: "CRS101", registrationDate: "2026-08-04", status: "IN_PROGRESS", completionScore: null },
        { enrollmentId: "ENR111", studentId: "732925CSR012", courseId: "CRS106", registrationDate: "2026-08-14", status: "COMPLETED", completionScore: 91.00 },
        { enrollmentId: "ENR112", studentId: "732925CSR034", courseId: "CRS102", registrationDate: "2026-08-08", status: "COMPLETED", completionScore: 94.00 },
        { enrollmentId: "ENR113", studentId: "732925CSR034", courseId: "CRS105", registrationDate: "2026-08-13", status: "IN_PROGRESS", completionScore: null },
        { enrollmentId: "ENR114", studentId: "732925ADR009", courseId: "CRS102", registrationDate: "2026-08-09", status: "COMPLETED", completionScore: 98.00 },
        { enrollmentId: "ENR115", studentId: "732925ADR009", courseId: "CRS106", registrationDate: "2026-08-15", status: "COMPLETED", completionScore: 95.50 },
        { enrollmentId: "ENR116", studentId: "732925ADR021", courseId: "CRS102", registrationDate: "2026-08-09", status: "IN_PROGRESS", completionScore: null },
        { enrollmentId: "ENR117", studentId: "732925ADR021", courseId: "CRS106", registrationDate: "2026-08-16", status: "IN_PROGRESS", completionScore: null },
        { enrollmentId: "ENR118", studentId: "732925ECR045", courseId: "CRS103", registrationDate: "2026-08-07", status: "COMPLETED", completionScore: 89.00 },
        { enrollmentId: "ENR119", studentId: "732925ECR045", courseId: "CRS105", registrationDate: "2026-08-13", status: "REGISTERED", completionScore: null },
        { enrollmentId: "ENR120", studentId: "732925ECR089", courseId: "CRS103", registrationDate: "2026-08-08", status: "IN_PROGRESS", completionScore: null },
        { enrollmentId: "ENR121", studentId: "732925MER014", courseId: "CRS101", registrationDate: "2026-08-06", status: "REGISTERED", completionScore: null },
        { enrollmentId: "ENR122", studentId: "732925EER028", courseId: "CRS103", registrationDate: "2026-08-09", status: "COMPLETED", completionScore: 90.50 }
      ]
    };
  },

  // Load from local storage or seed
  init() {
    const saved = localStorage.getItem(this.storageKey);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        this.students = parsed.students || [];
        this.courses = parsed.courses || [];
        this.enrollments = parsed.enrollments || [];
      } catch (e) {
        this.resetToDefaults();
      }
    } else {
      this.resetToDefaults();
    }
  },

  save() {
    localStorage.setItem(this.storageKey, JSON.stringify({
      students: this.students,
      courses: this.courses,
      enrollments: this.enrollments
    }));
  },

  resetToDefaults() {
    const seed = this.getSeedData();
    this.students = seed.students;
    this.courses = seed.courses;
    this.enrollments = seed.enrollments;
    this.save();
    showToast("Application data reset to institutional default records.", "info");
    this.renderAll();
  },

  // Enroll Student with Validation
  enrollStudent(studentId, courseId) {
    const student = this.students.find(s => s.studentId === studentId);
    if (!student) {
      showToast(`Error: Student ID '${studentId}' not found.`, "error");
      return false;
    }

    const course = this.courses.find(c => c.courseId === courseId);
    if (!course) {
      showToast(`Error: Course ID '${courseId}' not found.`, "error");
      return false;
    }

    // 1. Rule: Prevent Duplicate Registration (Functional Requirement 3)
    const existing = this.enrollments.find(e => 
      e.studentId === studentId && 
      e.courseId === courseId && 
      (e.status === "REGISTERED" || e.status === "IN_PROGRESS" || e.status === "COMPLETED")
    );

    if (existing) {
      showToast(`[REJECTED] Duplicate Registration: ${student.name} is already ${existing.status} in ${course.courseName}.`, "error");
      return false;
    }

    // 2. Rule: Check Course Capacity (Functional Requirement 4)
    if (course.enrolledCount >= course.maxCapacity) {
      showToast(`[REJECTED] Course Full: '${course.courseName}' has reached maximum limit of ${course.maxCapacity} seats!`, "error");
      return false;
    }

    // Success: Register
    course.enrolledCount++;
    const newEnrollmentId = "ENR" + (this.enrollments.length + 101);
    const today = new Date().toISOString().split('T')[0];

    const newEnrollment = {
      enrollmentId: newEnrollmentId,
      studentId: studentId,
      courseId: courseId,
      registrationDate: today,
      status: "REGISTERED",
      completionScore: null
    };

    this.enrollments.unshift(newEnrollment);
    this.save();
    showToast(`[SUCCESS] Enrolled ${student.name} in ${course.courseName}! (ID: ${newEnrollmentId})`, "success");
    this.renderAll();
    return true;
  },

  // Complete course & score
  completeCourse(enrollmentId, score) {
    const enr = this.enrollments.find(e => e.enrollmentId === enrollmentId);
    if (enr) {
      enr.status = "COMPLETED";
      enr.completionScore = parseFloat(score);
      this.save();
      showToast(`Enrollment ${enrollmentId} marked as COMPLETED with score ${score}%`, "success");
      this.renderAll();
    }
  },

  // Drop enrollment & free seat
  dropEnrollment(enrollmentId) {
    const enr = this.enrollments.find(e => e.enrollmentId === enrollmentId);
    if (enr && enr.status !== "CANCELLED") {
      enr.status = "CANCELLED";
      const course = this.courses.find(c => c.courseId === enr.courseId);
      if (course && course.enrolledCount > 0) {
        course.enrolledCount--;
      }
      this.save();
      showToast(`Enrollment ${enrollmentId} cancelled. 1 seat restored to course pool.`, "warning");
      this.renderAll();
    }
  },

  renderAll() {
    this.renderKPIs();
    this.renderCourseCatalog();
    this.renderEnrollmentsTable();
    this.renderStudentSwitcher();
    this.renderCharts();
  },

  renderKPIs() {
    const totalStudents = this.students.length;
    const totalCourses = this.courses.length;
    const totalEnrollments = this.enrollments.filter(e => e.status !== "CANCELLED").length;
    const completedCount = this.enrollments.filter(e => e.status === "COMPLETED").length;
    const totalCap = this.courses.reduce((sum, c) => sum + c.maxCapacity, 0);
    const totalEnr = this.courses.reduce((sum, c) => sum + c.enrolledCount, 0);
    const occupancyRate = totalCap > 0 ? ((totalEnr / totalCap) * 100).toFixed(1) + "%" : "0%";

    const kpiStudents = document.getElementById("kpi-students");
    const kpiCourses = document.getElementById("kpi-courses");
    const kpiEnrollments = document.getElementById("kpi-enrollments");
    const kpiOccupancy = document.getElementById("kpi-occupancy");

    if (kpiStudents) kpiStudents.textContent = totalStudents;
    if (kpiCourses) kpiCourses.textContent = totalCourses;
    if (kpiEnrollments) kpiEnrollments.textContent = `${totalEnrollments} (${completedCount} Finished)`;
    if (kpiOccupancy) kpiOccupancy.textContent = occupancyRate;
  },

  renderStudentSwitcher() {
    const select = document.getElementById("active-student-select");
    const studentInfoDisplay = document.getElementById("active-student-info");
    if (!select) return;

    select.innerHTML = this.students.map(s => `
      <option value="${s.studentId}" ${s.studentId === this.activeStudentId ? "selected" : ""}>
        ${s.name} (${s.studentId}) - Dept: ${s.department} Year ${s.yearOfStudy}
      </option>
    `).join("");

    const current = this.students.find(s => s.studentId === this.activeStudentId);
    if (current && studentInfoDisplay) {
      studentInfoDisplay.innerHTML = `
        <strong>Active Student:</strong> <span style="color:var(--primary); font-weight:700;">${current.name}</span> | 
        Reg No: <strong>${current.studentId}</strong> | Dept: <strong>${current.department}</strong> | Year: <strong>${current.yearOfStudy}</strong>
      `;
    }
  },

  renderCourseCatalog() {
    const container = document.getElementById("course-catalog-cards");
    const modalSelect = document.getElementById("reg-course-select");
    if (!container) return;

    container.innerHTML = this.courses.map(c => {
      const seatsLeft = Math.max(0, c.maxCapacity - c.enrolledCount);
      const isFull = c.enrolledCount >= c.maxCapacity;
      const isFilling = !isFull && seatsLeft <= 2;
      const occupancyPct = ((c.enrolledCount / c.maxCapacity) * 100).toFixed(0);

      let badgeHtml = `<span class="badge badge-success">${seatsLeft} Seats Available</span>`;
      if (isFull) {
        badgeHtml = `<span class="badge badge-danger">COURSE FULL (0 Seats)</span>`;
      } else if (isFilling) {
        badgeHtml = `<span class="badge badge-warning">Filling Fast (${seatsLeft} Left)</span>`;
      }

      return `
        <div class="card card-hover" style="display:flex; flex-direction:column; justify-content:space-between; border-top: 4px solid ${isFull ? '#ef4444' : '#2563eb'};">
          <div>
            <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:10px;">
              <span class="badge badge-primary">${c.courseId}</span>
              ${badgeHtml}
            </div>
            <h3 style="font-size:1.15rem; font-weight:700; margin-bottom:6px; color:var(--text-main);">${c.courseName}</h3>
            <p style="font-size:0.84rem; color:var(--text-muted); margin-bottom:12px;">Category: <strong>${c.category}</strong></p>

            <div style="background:var(--bg-main); padding:10px 14px; border-radius:var(--radius-sm); font-size:0.84rem; margin-bottom:14px;">
              <div style="display:flex; justify-content:space-between; margin-bottom:4px;">
                <span>Duration: <strong>${c.durationHours} Hours</strong></span>
                <span>Instructor: <strong>${c.instructor}</strong></span>
              </div>
              <div style="display:flex; justify-content:space-between; margin-bottom:6px;">
                <span>Capacity: <strong>${c.enrolledCount} / ${c.maxCapacity}</strong></span>
                <span>Occupancy: <strong>${occupancyPct}%</strong></span>
              </div>
              <div style="width:100%; height:6px; background:#e2e8f0; border-radius:3px; overflow:hidden;">
                <div style="width:${occupancyPct}%; height:100%; background:${isFull ? '#ef4444' : '#2563eb'}; transition: width 0.3s ease;"></div>
              </div>
            </div>
          </div>

          <div style="display:flex; gap:8px;">
            <button class="btn btn-primary btn-sm" style="flex:1;" onclick="AppState.openEnrollModal('${c.courseId}')" ${isFull ? 'disabled style="opacity:0.6; cursor:not-allowed;"' : ''}>
              ${isFull ? 'Seat Full' : 'Quick Register'}
            </button>
            <button class="btn btn-outline btn-sm" onclick="AppState.viewCourseRoster('${c.courseId}')">
              Roster
            </button>
          </div>
        </div>
      `;
    }).join("");

    if (modalSelect) {
      modalSelect.innerHTML = this.courses.map(c => `
        <option value="${c.courseId}">
          ${c.courseName} (${c.courseId}) - Seats Left: ${c.maxCapacity - c.enrolledCount}/${c.maxCapacity}
        </option>
      `).join("");
    }
  },

  renderEnrollmentsTable() {
    const tbody = document.getElementById("enrollments-table-body");
    if (!tbody) return;

    if (this.enrollments.length === 0) {
      tbody.innerHTML = `<tr><td colspan="7" style="text-align:center; padding:30px; color:var(--text-muted);">No enrollment records found.</td></tr>`;
      return;
    }

    tbody.innerHTML = this.enrollments.map(e => {
      const student = this.students.find(s => s.studentId === e.studentId) || { name: "Unknown", department: "N/A" };
      const course = this.courses.find(c => c.courseId === e.courseId) || { courseName: "Unknown", category: "N/A" };

      let statusBadge = `<span class="badge badge-primary">REGISTERED</span>`;
      if (e.status === "COMPLETED") statusBadge = `<span class="badge badge-success">COMPLETED</span>`;
      else if (e.status === "IN_PROGRESS") statusBadge = `<span class="badge badge-warning">IN PROGRESS</span>`;
      else if (e.status === "CANCELLED") statusBadge = `<span class="badge badge-danger">CANCELLED</span>`;

      const scoreDisplay = e.completionScore !== null && e.completionScore !== undefined 
        ? `<strong style="color:#059669;">${e.completionScore.toFixed(1)}%</strong>` 
        : `<span style="color:var(--text-muted);">Pending</span>`;

      return `
        <tr>
          <td><span style="font-family:var(--font-mono); font-weight:700;">${e.enrollmentId}</span></td>
          <td>
            <strong>${student.name}</strong><br>
            <span style="font-size:0.78rem; color:var(--text-muted);">${e.studentId} • ${student.department}</span>
          </td>
          <td>
            <strong>${course.courseName}</strong><br>
            <span style="font-size:0.78rem; color:var(--text-muted);">${e.courseId}</span>
          </td>
          <td>${e.registrationDate}</td>
          <td>${statusBadge}</td>
          <td>${scoreDisplay}</td>
          <td>
            <div style="display:flex; gap:6px;">
              ${e.status !== "COMPLETED" && e.status !== "CANCELLED" ? `
                <button class="btn btn-outline btn-sm" onclick="AppState.promptComplete('${e.enrollmentId}')">Complete</button>
                <button class="btn btn-danger btn-sm" onclick="AppState.dropEnrollment('${e.enrollmentId}')">Drop</button>
              ` : `<span style="font-size:0.8rem; color:var(--text-muted);">Closed</span>`}
            </div>
          </td>
        </tr>
      `;
    }).join("");
  },

  renderCharts() {
    Charts.drawCourseCapacityChart("chart-course-capacity", this.courses);
    Charts.drawDepartmentPieChart("chart-dept-pie", this.students, this.enrollments);
    Charts.drawStatusChart("chart-status-bar", this.enrollments);
  },

  openEnrollModal(courseId) {
    this.enrollStudent(this.activeStudentId, courseId);
  },

  viewCourseRoster(courseId) {
    const course = this.courses.find(c => c.courseId === courseId);
    if (!course) return;
    const roster = this.enrollments.filter(e => e.courseId === courseId);
    
    let msg = `Roster for ${course.courseName} (${roster.length} students):\n\n`;
    roster.forEach(r => {
      const s = this.students.find(st => st.studentId === r.studentId);
      msg += `• [${r.enrollmentId}] ${s ? s.name : r.studentId} - Status: ${r.status}\n`;
    });
    alert(msg);
  },

  promptComplete(enrollmentId) {
    const scoreStr = prompt("Enter course completion score percentage (e.g. 94.5):", "90.0");
    if (scoreStr !== null && !isNaN(parseFloat(scoreStr))) {
      this.completeCourse(enrollmentId, parseFloat(scoreStr));
    }
  }
};

// Simple Toast Notification System
function showToast(message, type = "info") {
  let container = document.getElementById("toast-container");
  if (!container) {
    container = document.createElement("div");
    container.id = "toast-container";
    container.className = "toast-container";
    document.body.appendChild(container);
  }

  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `<span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateX(100%)";
    toast.style.transition = "all 0.3s ease";
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

// Global Tab Switching
function switchTab(tabId) {
  document.querySelectorAll(".page-view").forEach(el => el.classList.remove("active"));
  document.querySelectorAll(".nav-btn").forEach(el => el.classList.remove("active"));

  const targetView = document.getElementById(tabId);
  if (targetView) targetView.classList.add("active");

  const activeBtn = document.querySelector(`[data-tab="${tabId}"]`);
  if (activeBtn) activeBtn.classList.add("active");

  // Re-render charts or diagrams if tab demands
  if (tabId === "tab-analytics" || tabId === "tab-portal") {
    AppState.renderCharts();
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// SQL Terminal Actions
function loadSqlPreset(presetId) {
  const preset = SqlEngine.presets.find(p => p.id === presetId);
  const inputEl = document.getElementById("sql-terminal-input");
  if (preset && inputEl) {
    inputEl.value = preset.sql;
  }
}

function runSqlFromTerminal() {
  const inputEl = document.getElementById("sql-terminal-input");
  const outputEl = document.getElementById("sql-terminal-output");
  const tableContainer = document.getElementById("sql-terminal-table-container");
  if (!inputEl || !outputEl) return;

  const sqlQuery = inputEl.value;
  const result = SqlEngine.executeQuery(sqlQuery, AppState);

  if (result.isError) {
    outputEl.textContent = `mysql> ${sqlQuery}\n\n${result.error}`;
    outputEl.style.color = "#f87171";
    if (tableContainer) tableContainer.innerHTML = "";
    return;
  }

  outputEl.style.color = "#38bdf8";
  const asciiTable = SqlEngine.formatAsciiTable(result.headers, result.rows);
  outputEl.textContent = `mysql> ${sqlQuery}\n\n${asciiTable}`;

  // Render HTML data table
  if (tableContainer && result.headers.length > 0) {
    let html = `
      <div style="margin-top:16px;">
        <h4 style="color:var(--text-muted); font-size:0.8rem; text-transform:uppercase; margin-bottom:8px;">Live HTML Table Result (${result.count} records):</h4>
        <div class="table-responsive">
          <table>
            <thead>
              <tr>${result.headers.map(h => `<th>${h}</th>`).join("")}</tr>
            </thead>
            <tbody>
              ${result.rows.map(r => `<tr>${r.map(c => `<td>${c}</td>`).join("")}</tr>`).join("")}
            </tbody>
          </table>
        </div>
      </div>
    `;
    tableContainer.innerHTML = html;
  }
}

// Theme Toggle
function toggleTheme() {
  const current = document.documentElement.getAttribute("data-theme");
  const next = current === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", next);
  localStorage.setItem("VCET_THEME", next);
  AppState.renderCharts();
}

// Initialize on DOM Ready
document.addEventListener("DOMContentLoaded", () => {
  // Restore theme
  const savedTheme = localStorage.getItem("VCET_THEME") || "light";
  document.documentElement.setAttribute("data-theme", savedTheme);

  // Init App State
  AppState.init();
  AppState.renderAll();

  // Setup active student dropdown change
  const select = document.getElementById("active-student-select");
  if (select) {
    select.addEventListener("change", (e) => {
      AppState.activeStudentId = e.target.value;
      AppState.renderStudentSwitcher();
      showToast(`Switched active student to: ${e.target.options[e.target.selectedIndex].text}`, "info");
    });
  }

  // Load Diagrams into containers
  const archContainer = document.getElementById("diagram-architecture");
  const classContainer = document.getElementById("diagram-class");
  const compContainer = document.getElementById("diagram-component");
  const actContainer = document.getElementById("diagram-activity");
  const erContainer = document.getElementById("diagram-er");

  if (archContainer) archContainer.innerHTML = Diagrams.renderArchitecture();
  if (classContainer) classContainer.innerHTML = Diagrams.renderClassDiagram();
  if (compContainer) compContainer.innerHTML = Diagrams.renderComponentDiagram();
  if (actContainer) actContainer.innerHTML = Diagrams.renderActivityDiagram();
  if (erContainer) erContainer.innerHTML = Diagrams.renderERDiagram();

  // Load first SQL preset
  loadSqlPreset("q_available_courses");
  runSqlFromTerminal();
});
