/**
 * Lightweight, Ultra-Crisp Canvas Chart Visualizer for Data Science (25ITC31)
 * Scenario 17: Online Course Registration and Student Enrollment Analysis System
 * Student: Dhanush K | Reg No: 732925ITR017 | Class: 25IT3A | VCET IT
 */

const Charts = {
  // Chart 1: Course Capacity vs. Actual Enrolled (Bar Chart)
  drawCourseCapacityChart(canvasId, courses) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;

    ctx.clearRect(0, 0, width, height);

    const padding = { top: 40, right: 30, bottom: 80, left: 60 };
    const chartWidth = width - padding.left - padding.right;
    const chartHeight = height - padding.top - padding.bottom;

    const maxVal = Math.max(...courses.map(c => Math.max(c.maxCapacity, c.enrolledCount)), 12) + 2;

    // Draw Grid Lines
    ctx.strokeStyle = '#e2e8f0';
    ctx.lineWidth = 1;
    ctx.fillStyle = '#64748b';
    ctx.font = '11px Inter, sans-serif';
    ctx.textAlign = 'right';

    const ySteps = 5;
    for (let i = 0; i <= ySteps; i++) {
      const val = Math.round((maxVal / ySteps) * i);
      const y = padding.top + chartHeight - (val / maxVal) * chartHeight;
      ctx.beginPath();
      ctx.moveTo(padding.left, y);
      ctx.lineTo(width - padding.right, y);
      ctx.stroke();
      ctx.fillText(val, padding.left - 10, y + 4);
    }

    // Draw Bars
    const groupWidth = chartWidth / courses.length;
    const barWidth = groupWidth * 0.32;

    courses.forEach((c, idx) => {
      const groupX = padding.left + idx * groupWidth;

      // Max Capacity Bar (Slate/Grey)
      const capHeight = (c.maxCapacity / maxVal) * chartHeight;
      const capY = padding.top + chartHeight - capHeight;
      ctx.fillStyle = '#94a3b8';
      ctx.fillRect(groupX + groupWidth * 0.15, capY, barWidth, capHeight);

      // Enrolled Count Bar (Primary Blue or Red if full)
      const enrHeight = (c.enrolledCount / maxVal) * chartHeight;
      const enrY = padding.top + chartHeight - enrHeight;
      ctx.fillStyle = c.enrolledCount >= c.maxCapacity ? '#ef4444' : '#2563eb';
      ctx.fillRect(groupX + groupWidth * 0.15 + barWidth + 4, enrY, barWidth, enrHeight);

      // Numbers on top of enrolled bar
      ctx.fillStyle = '#0f172a';
      ctx.font = 'bold 10.5px Inter, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(c.enrolledCount, groupX + groupWidth * 0.15 + barWidth + 4 + barWidth / 2, enrY - 6);

      // Label below
      ctx.save();
      ctx.translate(groupX + groupWidth / 2, height - padding.bottom + 15);
      ctx.rotate(-Math.PI / 6);
      ctx.fillStyle = '#334155';
      ctx.font = '11px Inter, sans-serif';
      ctx.textAlign = 'right';
      const shortName = c.courseName.length > 18 ? c.courseName.substring(0, 16) + '..' : c.courseName;
      ctx.fillText(shortName, 0, 0);
      ctx.restore();
    });

    // Legend
    ctx.textAlign = 'left';
    ctx.font = 'bold 11px Inter, sans-serif';

    ctx.fillStyle = '#94a3b8';
    ctx.fillRect(width - 240, 15, 12, 12);
    ctx.fillStyle = '#334155';
    ctx.fillText('Max Capacity', width - 222, 25);

    ctx.fillStyle = '#2563eb';
    ctx.fillRect(width - 130, 15, 12, 12);
    ctx.fillStyle = '#334155';
    ctx.fillText('Enrolled Students', width - 112, 25);
  },

  // Chart 2: Department-wise Participation (Doughnut Chart)
  drawDepartmentPieChart(canvasId, students, enrollments) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;

    ctx.clearRect(0, 0, width, height);

    // Tally enrollments by department
    const deptMap = {};
    enrollments.forEach(e => {
      const student = students.find(s => s.studentId === e.studentId);
      const dept = student ? student.department : 'Other';
      deptMap[dept] = (deptMap[dept] || 0) + 1;
    });

    const labels = Object.keys(deptMap);
    const counts = Object.values(deptMap);
    const total = counts.reduce((a, b) => a + b, 0);

    const colors = ['#2563eb', '#10b981', '#f59e0b', '#8b5cf6', '#ec4899', '#06b6d4'];

    const centerX = width * 0.42;
    const centerY = height * 0.5;
    const outerRadius = Math.min(centerX, centerY) - 30;
    const innerRadius = outerRadius * 0.52;

    let startAngle = -Math.PI / 2;

    counts.forEach((count, i) => {
      const sliceAngle = (count / total) * 2 * Math.PI;
      const endAngle = startAngle + sliceAngle;

      ctx.beginPath();
      ctx.arc(centerX, centerY, outerRadius, startAngle, endAngle);
      ctx.arc(centerX, centerY, innerRadius, endAngle, startAngle, true);
      ctx.closePath();
      ctx.fillStyle = colors[i % colors.length];
      ctx.fill();
      ctx.lineWidth = 2;
      ctx.strokeStyle = '#ffffff';
      ctx.stroke();

      startAngle = endAngle;
    });

    // Center text
    ctx.fillStyle = '#0f172a';
    ctx.font = 'bold 20px Inter, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(total, centerX, centerY + 2);
    ctx.font = '11px Inter, sans-serif';
    ctx.fillStyle = '#64748b';
    ctx.fillText('Total Registrations', centerX, centerY + 18);

    // Draw Legend
    const legendX = width * 0.72;
    let legendY = 60;
    ctx.textAlign = 'left';

    labels.forEach((label, i) => {
      ctx.fillStyle = colors[i % colors.length];
      ctx.fillRect(legendX, legendY, 14, 14);
      ctx.fillStyle = '#1e293b';
      ctx.font = 'bold 12px Inter, sans-serif';
      const pct = ((counts[i] / total) * 100).toFixed(1);
      ctx.fillText(`${label}: ${counts[i]} (${pct}%)`, legendX + 22, legendY + 12);
      legendY += 28;
    });
  },

  // Chart 3: Enrollment Status Distribution (Bar Chart)
  drawStatusChart(canvasId, enrollments) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;

    ctx.clearRect(0, 0, width, height);

    const statuses = ['COMPLETED', 'IN_PROGRESS', 'REGISTERED', 'CANCELLED'];
    const colors = {
      'COMPLETED': '#10b981',
      'IN_PROGRESS': '#2563eb',
      'REGISTERED': '#f59e0b',
      'CANCELLED': '#ef4444'
    };

    const counts = statuses.map(s => enrollments.filter(e => e.status === s).length);
    const maxVal = Math.max(...counts, 6) + 2;

    const padding = { top: 30, right: 30, bottom: 50, left: 50 };
    const chartWidth = width - padding.left - padding.right;
    const chartHeight = height - padding.top - padding.bottom;

    // Draw Grid
    ctx.strokeStyle = '#e2e8f0';
    ctx.lineWidth = 1;
    ctx.fillStyle = '#64748b';
    ctx.font = '11px Inter, sans-serif';
    ctx.textAlign = 'right';

    for (let i = 0; i <= 4; i++) {
      const val = Math.round((maxVal / 4) * i);
      const y = padding.top + chartHeight - (val / maxVal) * chartHeight;
      ctx.beginPath();
      ctx.moveTo(padding.left, y);
      ctx.lineTo(width - padding.right, y);
      ctx.stroke();
      ctx.fillText(val, padding.left - 8, y + 4);
    }

    const barWidth = chartWidth / (statuses.length * 2);

    statuses.forEach((s, idx) => {
      const count = counts[idx];
      const barHeight = (count / maxVal) * chartHeight;
      const x = padding.left + idx * (chartWidth / statuses.length) + barWidth / 2;
      const y = padding.top + chartHeight - barHeight;

      ctx.fillStyle = colors[s];
      ctx.fillRect(x, y, barWidth, barHeight);

      // Value label
      ctx.fillStyle = '#0f172a';
      ctx.font = 'bold 12px Inter, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(count, x + barWidth / 2, y - 6);

      // Status label
      ctx.fillStyle = '#334155';
      ctx.font = '11px Inter, sans-serif';
      ctx.fillText(s, x + barWidth / 2, height - padding.bottom + 20);
    });
  }
};
