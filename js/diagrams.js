/**
 * High-Definition Structured SVG Diagrams Generator
 * Scenario 17: Online Course Registration and Student Enrollment Analysis System
 * Student: Dhanush K | Reg No: 732925ITR017 | Class: 25IT3A
 * Follows exact UML & Chen notations from student's reference images.
 */

const Diagrams = {
  // 1. Overall System Architecture Diagram
  renderArchitecture() {
    return `
    <svg viewBox="0 0 1000 620" class="diagram-svg" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="gradArchHead" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#1e3a8a"/>
          <stop offset="100%" stop-color="#2563eb"/>
        </linearGradient>
        <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
          <feDropShadow dx="0" dy="4" stdDeviation="4" flood-opacity="0.12"/>
        </filter>
        <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 1 L 10 5 L 0 9 z" fill="#3b82f6"/>
        </marker>
        <marker id="arrowDown" viewBox="0 0 10 10" refX="5" refY="6" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 1 0 L 5 10 L 9 0 z" fill="#2563eb"/>
        </marker>
      </defs>

      <!-- Background Box -->
      <rect x="20" y="20" width="960" height="580" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="2"/>
      
      <!-- Layer 1: Presentation Layer -->
      <rect x="50" y="50" width="900" height="100" rx="12" fill="#eff6ff" stroke="#3b82f6" stroke-width="2" filter="url(#shadow)"/>
      <rect x="50" y="50" width="900" height="32" rx="12" fill="url(#gradArchHead)"/>
      <text x="500" y="72" fill="#ffffff" font-size="14" font-weight="700" text-anchor="middle" font-family="Inter, sans-serif">1. PRESENTATION LAYER (CLIENT-SIDE SINGLE PAGE APPLICATION - GITHUB PAGES 24/7)</text>
      
      <rect x="70" y="95" width="260" height="42" rx="6" fill="#ffffff" stroke="#93c5fd" stroke-width="1.5"/>
      <text x="200" y="121" fill="#1e3a8a" font-size="12" font-weight="600" text-anchor="middle">Course Registration Portal</text>

      <rect x="370" y="95" width="260" height="42" rx="6" fill="#ffffff" stroke="#93c5fd" stroke-width="1.5"/>
      <text x="500" y="121" fill="#1e3a8a" font-size="12" font-weight="600" text-anchor="middle">Interactive SQL Terminal</text>

      <rect x="670" y="95" width="260" height="42" rx="6" fill="#ffffff" stroke="#93c5fd" stroke-width="1.5"/>
      <text x="800" y="121" fill="#1e3a8a" font-size="12" font-weight="600" text-anchor="middle">Data Analytics Dashboard</text>

      <!-- Connection Lines 1 -> 2 -->
      <line x1="500" y1="150" x2="500" y2="190" stroke="#2563eb" stroke-width="2.5" marker-end="url(#arrowDown)"/>

      <!-- Layer 2: Business Logic & Service Layer -->
      <rect x="50" y="190" width="900" height="120" rx="12" fill="#f0fdf4" stroke="#10b981" stroke-width="2" filter="url(#shadow)"/>
      <rect x="50" y="190" width="900" height="32" rx="12" fill="#059669"/>
      <text x="500" y="212" fill="#ffffff" font-size="14" font-weight="700" text-anchor="middle">2. BUSINESS LOGIC & CONTROLLER LAYER (JAVA 25ITT32 / SERVICE ENGINE)</text>

      <rect x="70" y="235" width="260" height="60" rx="6" fill="#ffffff" stroke="#86efac" stroke-width="1.5"/>
      <text x="200" y="258" fill="#065f46" font-size="12" font-weight="700" text-anchor="middle">EnrollmentService.java</text>
      <text x="200" y="278" fill="#64748b" font-size="10.5" text-anchor="middle">Synchronized Seat Reservation</text>

      <rect x="370" y="235" width="260" height="60" rx="6" fill="#ffffff" stroke="#86efac" stroke-width="1.5"/>
      <text x="500" y="258" fill="#065f46" font-size="12" font-weight="700" text-anchor="middle">Validation Engine</text>
      <text x="500" y="278" fill="#64748b" font-size="10.5" text-anchor="middle">Duplicate & Capacity Verification</text>

      <rect x="670" y="235" width="260" height="60" rx="6" fill="#ffffff" stroke="#86efac" stroke-width="1.5"/>
      <text x="800" y="258" fill="#065f46" font-size="12" font-weight="700" text-anchor="middle">CourseService.java</text>
      <text x="800" y="278" fill="#64748b" font-size="10.5" text-anchor="middle">Catalog Filtering & Seat Counters</text>

      <!-- Connection Lines 2 -> 3 -->
      <line x1="500" y1="310" x2="500" y2="350" stroke="#2563eb" stroke-width="2.5" marker-end="url(#arrowDown)"/>

      <!-- Layer 3: Persistence & Analytics Layer -->
      <rect x="50" y="350" width="900" height="210" rx="12" fill="#fffbeb" stroke="#f59e0b" stroke-width="2" filter="url(#shadow)"/>
      <rect x="50" y="350" width="900" height="32" rx="12" fill="#d97706"/>
      <text x="500" y="372" fill="#ffffff" font-size="14" font-weight="700" text-anchor="middle">3. DATA PERSISTENCE & ANALYTICS LAYER (DBMS 25ITT31 & DATA SCIENCE 25ITC31)</text>

      <!-- MySQL Relational DB -->
      <rect x="70" y="395" width="410" height="145" rx="8" fill="#ffffff" stroke="#fde68a" stroke-width="1.5"/>
      <text x="275" y="420" fill="#92400e" font-size="13" font-weight="700" text-anchor="middle">MySQL Relational Database (3NF)</text>
      <line x1="85" y1="432" x2="465" y2="432" stroke="#e2e8f0" stroke-width="1"/>
      <text x="90" y="455" fill="#334155" font-size="11.5">• Table students (student_id PK, name, dept, year, email)</text>
      <text x="90" y="478" fill="#334155" font-size="11.5">• Table courses (course_id PK, capacity, enrolled_count)</text>
      <text x="90" y="501" fill="#334155" font-size="11.5">• Table enrollments (UNIQUE composite key, status, score)</text>
      <text x="90" y="524" fill="#16a34a" font-size="11" font-weight="600">ACID Transactions & Automated Seat-Counter Triggers</text>

      <!-- Python Data Science Engine -->
      <rect x="520" y="395" width="410" height="145" rx="8" fill="#ffffff" stroke="#fde68a" stroke-width="1.5"/>
      <text x="725" y="420" fill="#92400e" font-size="13" font-weight="700" text-anchor="middle">Python Data Science Pipeline (25ITC31)</text>
      <line x1="535" y1="432" x2="915" y2="432" stroke="#e2e8f0" stroke-width="1"/>
      <text x="540" y="455" fill="#334155" font-size="11.5">• Data Ingestion & Relational Table Retrieval</text>
      <text x="540" y="478" fill="#334155" font-size="11.5">• Pandas Wrangling & Missing Score Handling</text>
      <text x="540" y="501" fill="#334155" font-size="11.5">• Matplotlib & Seaborn Chart Visualizations</text>
      <text x="540" y="524" fill="#2563eb" font-size="11" font-weight="600">Course Popularity, Dept Distribution & Completion EDA</text>

      <!-- Footer watermark -->
      <text x="500" y="590" fill="#94a3b8" font-size="11" text-anchor="middle">VCET Erode - Dept of IT | Dhanush K (732925ITR017) | Scenario 17 Architecture</text>
    </svg>
    `;
  },

  // 2. UML Class Diagram (Strictly Matching User Reference Image 2 Style)
  renderClassDiagram() {
    return `
    <svg viewBox="0 0 1000 680" class="diagram-svg" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="umlInherit" viewBox="0 0 16 16" refX="16" refY="8" markerWidth="14" markerHeight="14" orient="auto">
          <polygon points="0,0 16,8 0,16" fill="#ffffff" stroke="#1e293b" stroke-width="2"/>
        </marker>
        <marker id="umlNav" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto">
          <polyline points="0,0 10,5 0,10" fill="none" stroke="#1e293b" stroke-width="1.5"/>
        </marker>
      </defs>

      <!-- Title -->
      <text x="500" y="40" font-size="22" font-weight="800" text-anchor="middle" fill="#0f172a" font-family="Arial, sans-serif">Class Diagram</text>
      <text x="500" y="65" font-size="12" fill="#64748b" text-anchor="middle">Scenario 17: Online Course Registration System | Developer: Dhanush K (732925ITR017)</text>

      <!-- Base Class / Common Entity: Person (Inheritance demonstration matching reference image 2) -->
      <g transform="translate(360, 90)">
        <rect width="280" height="150" fill="#f1f5f9" stroke="#0f172a" stroke-width="2"/>
        <line x1="0" y1="36" x2="280" y2="36" stroke="#0f172a" stroke-width="1.5"/>
        <line x1="0" y1="105" x2="280" y2="105" stroke="#0f172a" stroke-width="1.5"/>
        
        <!-- Header -->
        <text x="140" y="24" font-size="15" font-weight="700" text-anchor="middle" fill="#0f172a">Person</text>
        <!-- Attributes -->
        <text x="15" y="58" font-size="12" fill="#0f172a">+ id: String</text>
        <text x="15" y="78" font-size="12" fill="#0f172a">+ name: String</text>
        <text x="15" y="98" font-size="12" fill="#0f172a">+ email: String</text>
        <!-- Operations -->
        <text x="15" y="125" font-size="12" fill="#0f172a">+ getDetails(): String</text>
        <text x="15" y="142" font-size="12" fill="#0f172a">+ validateEmail(): boolean</text>
      </g>

      <!-- Derived Class 1: Student (Inherits from Person) -->
      <g transform="translate(60, 310)">
        <rect width="270" height="230" fill="#ffffff" stroke="#0f172a" stroke-width="2"/>
        <line x1="0" y1="36" x2="270" y2="36" stroke="#0f172a" stroke-width="1.5"/>
        <line x1="0" y1="130" x2="270" y2="130" stroke="#0f172a" stroke-width="1.5"/>

        <text x="135" y="24" font-size="15" font-weight="700" text-anchor="middle" fill="#0f172a">Student</text>
        <!-- Attributes -->
        <text x="15" y="58" font-size="12" fill="#0f172a">+ department: String</text>
        <text x="15" y="78" font-size="12" fill="#0f172a">+ yearOfStudy: int</text>
        <text x="15" y="98" font-size="12" fill="#0f172a">- registeredCourses: List</text>
        <text x="15" y="118" font-size="12" fill="#0f172a">+ status: String</text>
        <!-- Operations -->
        <text x="15" y="152" font-size="12" fill="#0f172a">+ getDepartment(): String</text>
        <text x="15" y="172" font-size="12" fill="#0f172a">+ getYearOfStudy(): int</text>
        <text x="15" y="192" font-size="12" fill="#0f172a">+ canEnroll(): boolean</text>
        <text x="15" y="212" font-size="12" fill="#0f172a">+ toString(): String</text>
      </g>

      <!-- Derived Class 2: Instructor (Inherits from Person) -->
      <g transform="translate(670, 310)">
        <rect width="270" height="230" fill="#ffffff" stroke="#0f172a" stroke-width="2"/>
        <line x1="0" y1="36" x2="270" y2="36" stroke="#0f172a" stroke-width="1.5"/>
        <line x1="0" y1="130" x2="270" y2="130" stroke="#0f172a" stroke-width="1.5"/>

        <text x="135" y="24" font-size="15" font-weight="700" text-anchor="middle" fill="#0f172a">Instructor</text>
        <!-- Attributes -->
        <text x="15" y="58" font-size="12" fill="#0f172a">+ department: String</text>
        <text x="15" y="78" font-size="12" fill="#0f172a">+ designation: String</text>
        <text x="15" y="98" font-size="12" fill="#0f172a">+ assignedCourses: List</text>
        <text x="15" y="118" font-size="12" fill="#0f172a">+ maxLoad: int = 3</text>
        <!-- Operations -->
        <text x="15" y="152" font-size="12" fill="#0f172a">+ assignCourse(Course): void</text>
        <text x="15" y="172" font-size="12" fill="#0f172a">+ gradeStudent(String, double): void</text>
        <text x="15" y="192" font-size="12" fill="#0f172a">+ viewRoster(): List</text>
        <text x="15" y="212" font-size="12" fill="#0f172a">+ toString(): String</text>
      </g>

      <!-- Associative / Core Class 3: Enrollment -->
      <g transform="translate(360, 310)">
        <rect width="280" height="230" fill="#ffffff" stroke="#0f172a" stroke-width="2"/>
        <line x1="0" y1="36" x2="280" y2="36" stroke="#0f172a" stroke-width="1.5"/>
        <line x1="0" y1="140" x2="280" y2="140" stroke="#0f172a" stroke-width="1.5"/>

        <text x="140" y="24" font-size="15" font-weight="700" text-anchor="middle" fill="#0f172a">Enrollment</text>
        <!-- Attributes -->
        <text x="15" y="58" font-size="12" fill="#0f172a">+ enrollmentId: String</text>
        <text x="15" y="78" font-size="12" fill="#0f172a">+ studentId: String</text>
        <text x="15" y="98" font-size="12" fill="#0f172a">+ courseId: String</text>
        <text x="15" y="118" font-size="12" fill="#0f172a">+ registrationDate: LocalDate</text>
        <text x="15" y="135" font-size="12" fill="#0f172a">+ status: Status</text>
        <!-- Operations -->
        <text x="15" y="162" font-size="12" fill="#0f172a">+ completeCourse(double): void</text>
        <text x="15" y="182" font-size="12" fill="#0f172a">+ cancelEnrollment(): void</text>
        <text x="15" y="202" font-size="12" fill="#0f172a">+ getScore(): Double</text>
        <text x="15" y="222" font-size="12" fill="#0f172a">+ isDuplicate(): boolean</text>
      </g>

      <!-- Core Entity Class 4: Course (at the bottom) -->
      <g transform="translate(200, 560)">
        <rect width="600" height="100" fill="#f8fafc" stroke="#0f172a" stroke-width="2"/>
        <line x1="0" y1="32" x2="600" y2="32" stroke="#0f172a" stroke-width="1.5"/>
        <line x1="300" y1="32" x2="300" y2="100" stroke="#cbd5e1" stroke-width="1"/>

        <text x="300" y="22" font-size="14" font-weight="700" text-anchor="middle" fill="#0f172a">Course</text>
        <!-- Attributes -->
        <text x="20" y="52" font-size="11.5" fill="#0f172a">+ courseId: String | courseName: String</text>
        <text x="20" y="72" font-size="11.5" fill="#0f172a">+ category: String | durationHours: int</text>
        <text x="20" y="90" font-size="11.5" fill="#0f172a">+ maxCapacity: int | enrolledCount: int</text>
        <!-- Operations -->
        <text x="320" y="52" font-size="11.5" fill="#0f172a">+ isFull(): boolean</text>
        <text x="320" y="72" font-size="11.5" fill="#0f172a">+ getAvailableSeats(): int</text>
        <text x="320" y="90" font-size="11.5" fill="#0f172a">+ incrementEnrollment(): boolean</text>
      </g>

      <!-- Inheritance Arrows (Matching reference image 2 upward arrows with hollow triangle) -->
      <!-- Student to Person -->
      <path d="M 195 310 L 195 260 L 460 260 L 460 240" fill="none" stroke="#0f172a" stroke-width="2" marker-end="url(#umlInherit)"/>
      
      <!-- Instructor to Person -->
      <path d="M 805 310 L 805 260 L 540 260 L 540 240" fill="none" stroke="#0f172a" stroke-width="2" marker-end="url(#umlInherit)"/>

      <!-- Association: Student - Enrollment - Course -->
      <line x1="330" y1="410" x2="360" y2="410" stroke="#0f172a" stroke-width="2"/>
      <text x="335" y="400" font-size="11" font-weight="700">1</text>
      <text x="350" y="400" font-size="11" font-weight="700">*</text>

      <line x1="500" y1="540" x2="500" y2="560" stroke="#0f172a" stroke-width="2"/>
      <text x="510" y="552" font-size="11" font-weight="700">* .. 1</text>
    </svg>
    `;
  },

  // 3. UML Component Diagram (Strictly Matching User Reference Image 3 Style)
  renderComponentDiagram() {
    return `
    <svg viewBox="0 0 1000 640" class="diagram-svg" xmlns="http://www.w3.org/2000/svg">
      <!-- Title -->
      <text x="500" y="36" font-size="20" font-weight="800" text-anchor="middle" fill="#0f172a" font-family="Arial, sans-serif">Component Diagram</text>
      <text x="500" y="60" font-size="12" fill="#64748b" text-anchor="middle">Scenario 17: Online Course Registration Subsystem Architecture (UML 2.0 Specification)</text>

      <!-- Main Outer Component Box (Color matches reference image 3 cyan/blue background) -->
      <g transform="translate(140, 90)">
        <rect width="720" height="490" rx="8" fill="#7dd3fc" stroke="#0284c7" stroke-width="2.5"/>
        <text x="360" y="32" font-size="13" font-weight="600" fill="#0369a1" text-anchor="middle">&lt;&lt;component&gt;&gt;</text>
        <text x="360" y="52" font-size="17" font-weight="800" fill="#0c4a6e" text-anchor="middle">CourseRegistrationSubsystem</text>

        <!-- Component icon symbol in top right -->
        <rect x="670" y="16" width="32" height="24" fill="#bae6fd" stroke="#0284c7" stroke-width="1.5"/>
        <rect x="664" y="20" width="10" height="6" fill="#ffffff" stroke="#0284c7" stroke-width="1"/>
        <rect x="664" y="29" width="10" height="6" fill="#ffffff" stroke="#0284c7" stroke-width="1"/>

        <!-- External Provided Ports and Interfaces (Left Side) -->
        <!-- Port 1: Registration View -->
        <rect x="-10" y="110" width="20" height="20" fill="#ffffff" stroke="#0284c7" stroke-width="2"/>
        <line x1="-10" y1="120" x2="-60" y2="120" stroke="#0284c7" stroke-width="2"/>
        <circle cx="-70" cy="120" r="10" fill="#38bdf8" stroke="#0284c7" stroke-width="2"/>
        <text x="-70" y="148" font-size="11" font-weight="700" fill="#0369a1" text-anchor="middle">IRegistrationUI</text>

        <!-- Port 2: Catalog View -->
        <rect x="-10" y="230" width="20" height="20" fill="#ffffff" stroke="#0284c7" stroke-width="2"/>
        <line x1="-10" y1="240" x2="-60" y2="240" stroke="#0284c7" stroke-width="2"/>
        <circle cx="-70" cy="240" r="10" fill="#38bdf8" stroke="#0284c7" stroke-width="2"/>
        <text x="-70" y="268" font-size="11" font-weight="700" fill="#0369a1" text-anchor="middle">ICourseCatalog</text>

        <!-- Sub-Component 1: Central EnrollmentEngine -->
        <g transform="translate(180, 100)">
          <rect width="260" height="180" fill="#38bdf8" stroke="#0369a1" stroke-width="2"/>
          <text x="130" y="30" font-size="12" fill="#0369a1" text-anchor="middle">&lt;&lt;component&gt;&gt;</text>
          <text x="130" y="52" font-size="15" font-weight="800" fill="#082f49" text-anchor="middle">EnrollmentEngine</text>
          
          <rect x="220" y="12" width="26" height="18" fill="#e0f2fe" stroke="#0369a1" stroke-width="1.2"/>
          <rect x="215" y="15" width="8" height="4" fill="#ffffff" stroke="#0369a1" stroke-width="1"/>
          <rect x="215" y="22" width="8" height="4" fill="#ffffff" stroke="#0369a1" stroke-width="1"/>
        </g>

        <!-- Sub-Component 2: CapacityValidator (Top Right) -->
        <g transform="translate(490, 80)">
          <rect width="180" height="70" fill="#38bdf8" stroke="#0369a1" stroke-width="2"/>
          <text x="90" y="24" font-size="11" fill="#0369a1" text-anchor="middle">&lt;&lt;component&gt;&gt;</text>
          <text x="90" y="44" font-size="13" font-weight="700" fill="#082f49" text-anchor="middle">CapacityValidator</text>
          
          <rect x="150" y="10" width="20" height="14" fill="#e0f2fe" stroke="#0369a1" stroke-width="1"/>
        </g>

        <!-- Sub-Component 3: DuplicateChecker (Middle Right) -->
        <g transform="translate(490, 180)">
          <rect width="180" height="70" fill="#38bdf8" stroke="#0369a1" stroke-width="2"/>
          <text x="90" y="24" font-size="11" fill="#0369a1" text-anchor="middle">&lt;&lt;component&gt;&gt;</text>
          <text x="90" y="44" font-size="13" font-weight="700" fill="#082f49" text-anchor="middle">DuplicateChecker</text>
          
          <rect x="150" y="10" width="20" height="14" fill="#e0f2fe" stroke="#0369a1" stroke-width="1"/>
        </g>

        <!-- Sub-Component 4: PersistenceDAO (Bottom) -->
        <g transform="translate(210, 350)">
          <rect width="280" height="85" fill="#38bdf8" stroke="#0369a1" stroke-width="2"/>
          <text x="140" y="25" font-size="11" fill="#0369a1" text-anchor="middle">&lt;&lt;component&gt;&gt;</text>
          <text x="140" y="48" font-size="14" font-weight="800" fill="#082f49" text-anchor="middle">DatabasePersistenceDAO</text>
          <text x="140" y="68" font-size="10.5" fill="#075985" text-anchor="middle">MySQL JDBC Driver / Connection Pool</text>
          
          <rect x="245" y="12" width="22" height="16" fill="#e0f2fe" stroke="#0369a1" stroke-width="1"/>
        </g>

        <!-- Ball and Socket Connectors inside Main Component -->
        <!-- Between EnrollmentEngine and CapacityValidator -->
        <line x1="440" y1="120" x2="465" y2="120" stroke="#0369a1" stroke-width="2"/>
        <path d="M 465 110 A 10 10 0 0 1 465 130" fill="none" stroke="#0369a1" stroke-width="2"/>
        <circle cx="475" cy="120" r="8" fill="#38bdf8" stroke="#0369a1" stroke-width="2"/>
        <line x1="483" y1="120" x2="490" y2="120" stroke="#0369a1" stroke-width="2"/>

        <!-- Between EnrollmentEngine and DuplicateChecker -->
        <line x1="440" y1="215" x2="465" y2="215" stroke="#0369a1" stroke-width="2"/>
        <path d="M 465 205 A 10 10 0 0 1 465 225" fill="none" stroke="#0369a1" stroke-width="2"/>
        <circle cx="475" cy="215" r="8" fill="#38bdf8" stroke="#0369a1" stroke-width="2"/>
        <line x1="483" y1="215" x2="490" y2="215" stroke="#0369a1" stroke-width="2"/>

        <!-- Between EnrollmentEngine and DatabasePersistenceDAO -->
        <line x1="310" y1="280" x2="310" y2="315" stroke="#0369a1" stroke-width="2"/>
        <circle cx="310" cy="325" r="8" fill="#38bdf8" stroke="#0369a1" stroke-width="2"/>
        <path d="M 300 338 A 10 10 0 0 0 320 338" fill="none" stroke="#0369a1" stroke-width="2"/>
        <line x1="310" y1="338" x2="310" y2="350" stroke="#0369a1" stroke-width="2"/>

        <!-- Required Socket Interfaces (Right Side) -->
        <rect x="710" y="200" width="20" height="20" fill="#ffffff" stroke="#0284c7" stroke-width="2"/>
        <line x1="730" y1="210" x2="760" y2="210" stroke="#0284c7" stroke-width="2"/>
        <path d="M 760 198 A 12 12 0 0 1 760 222" fill="none" stroke="#0284c7" stroke-width="2.5"/>
        <text x="800" y="214" font-size="11" font-weight="700" fill="#0369a1">MySQL DB</text>

        <rect x="710" y="380" width="20" height="20" fill="#ffffff" stroke="#0284c7" stroke-width="2"/>
        <line x1="730" y1="390" x2="760" y2="390" stroke="#0284c7" stroke-width="2"/>
        <path d="M 760 378 A 12 12 0 0 1 760 402" fill="none" stroke="#0284c7" stroke-width="2.5"/>
        <text x="800" y="394" font-size="11" font-weight="700" fill="#0369a1">Python Analytics</text>
      </g>
    </svg>
    `;
  },

  // 4. UML Activity Diagram (Strictly Matching User Reference Image 1 Style)
  renderActivityDiagram() {
    return `
    <svg viewBox="0 0 900 820" class="diagram-svg" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="actArrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 1 L 10 5 L 0 9 z" fill="#0f172a"/>
        </marker>
      </defs>

      <!-- Title -->
      <text x="450" y="36" font-size="20" font-weight="800" text-anchor="middle" fill="#0f172a" font-family="Arial, sans-serif">Activity Diagram</text>
      <text x="450" y="60" font-size="12" fill="#64748b" text-anchor="middle">Scenario 17: Course Registration Flow with Concurrent Processing & Capacity Logic</text>

      <!-- 1. Initial State Node (Solid Circle) -->
      <circle cx="450" cy="95" r="14" fill="#0f172a"/>

      <!-- Arrow down to first action -->
      <line x1="450" y1="109" x2="450" y2="140" stroke="#0f172a" stroke-width="2" marker-end="url(#actArrow)"/>

      <!-- Action 1: Receive Registration Request -->
      <rect x="340" y="140" width="220" height="46" rx="14" fill="#7dd3fc" stroke="#0284c7" stroke-width="2"/>
      <text x="450" y="168" font-size="13" font-weight="600" text-anchor="middle" fill="#0f172a">Receive Registration Request</text>

      <line x1="450" y1="186" x2="450" y2="220" stroke="#0f172a" stroke-width="2" marker-end="url(#actArrow)"/>

      <!-- Decision Diamond 1: Capacity Available? -->
      <polygon points="450,220 500,245 450,270 400,245" fill="#ffffff" stroke="#0284c7" stroke-width="2"/>
      <text x="450" y="249" font-size="10.5" font-weight="700" text-anchor="middle" fill="#0369a1">Seats &gt; 0 ?</text>

      <!-- Branch [else / full] -->
      <line x1="500" y1="245" x2="680" y2="245" stroke="#0f172a" stroke-width="2"/>
      <text x="560" y="238" font-size="11" font-weight="600" fill="#dc2626">[Capacity Full]</text>
      <line x1="680" y1="245" x2="680" y2="280" stroke="#0f172a" stroke-width="2" marker-end="url(#actArrow)"/>
      <rect x="580" y="280" width="200" height="44" rx="12" fill="#fee2e2" stroke="#ef4444" stroke-width="1.8"/>
      <text x="680" y="306" font-size="12" font-weight="600" text-anchor="middle" fill="#991b1b">Display Course Full Error</text>

      <!-- Branch [Seats Available] -> Check Duplicate -->
      <line x1="450" y1="270" x2="450" y2="310" stroke="#0f172a" stroke-width="2" marker-end="url(#actArrow)"/>
      <text x="455" y="292" font-size="11" font-weight="600" fill="#16a34a">[Seat Available]</text>

      <!-- Decision Diamond 2: Duplicate Check -->
      <polygon points="450,310 500,335 450,360 400,335" fill="#ffffff" stroke="#0284c7" stroke-width="2"/>
      <text x="450" y="339" font-size="10.5" font-weight="700" text-anchor="middle" fill="#0369a1">Duplicate?</text>

      <!-- Branch [is duplicate] -->
      <line x1="400" y1="335" x2="220" y2="335" stroke="#0f172a" stroke-width="2"/>
      <text x="270" y="328" font-size="11" font-weight="600" fill="#dc2626">[Already Enrolled]</text>
      <line x1="220" y1="335" x2="220" y2="370" stroke="#0f172a" stroke-width="2" marker-end="url(#actArrow)"/>
      <rect x="110" y="370" width="220" height="44" rx="12" fill="#fee2e2" stroke="#ef4444" stroke-width="1.8"/>
      <text x="220" y="396" font-size="12" font-weight="600" text-anchor="middle" fill="#991b1b">Display Duplicate Error</text>

      <!-- Branch [No Duplicate] down to Fork Bar -->
      <line x1="450" y1="360" x2="450" y2="440" stroke="#0f172a" stroke-width="2" marker-end="url(#actArrow)"/>
      <text x="455" y="395" font-size="11" font-weight="600" fill="#16a34a">[Valid New Reg]</text>

      <!-- 2. Fork Bar (Horizontal Solid Black Bar - Matching Reference Image 1) -->
      <rect x="250" y="440" width="400" height="8" rx="3" fill="#0f172a"/>

      <!-- Parallel Path Left: Reserve Seat & Update Counter -->
      <line x1="330" y1="448" x2="330" y2="490" stroke="#0f172a" stroke-width="2" marker-end="url(#actArrow)"/>
      <rect x="220" y="490" width="220" height="48" rx="14" fill="#7dd3fc" stroke="#0284c7" stroke-width="2"/>
      <text x="330" y="518" font-size="12.5" font-weight="600" text-anchor="middle" fill="#0f172a">Increment Enrolled Count</text>

      <!-- Parallel Path Right: Create Enrollment Record -->
      <line x1="570" y1="448" x2="570" y2="490" stroke="#0f172a" stroke-width="2" marker-end="url(#actArrow)"/>
      <rect x="460" y="490" width="220" height="48" rx="14" fill="#7dd3fc" stroke="#0284c7" stroke-width="2"/>
      <text x="570" y="518" font-size="12.5" font-weight="600" text-anchor="middle" fill="#0f172a">Create Enrollment Record</text>

      <!-- Flow to Join Bar -->
      <line x1="330" y1="538" x2="330" y2="580" stroke="#0f172a" stroke-width="2"/>
      <line x1="570" y1="538" x2="570" y2="580" stroke="#0f172a" stroke-width="2"/>

      <!-- 3. Join Bar (Horizontal Solid Black Bar) -->
      <rect x="250" y="580" width="400" height="8" rx="3" fill="#0f172a"/>

      <line x1="450" y1="588" x2="450" y2="630" stroke="#0f172a" stroke-width="2" marker-end="url(#actArrow)"/>

      <!-- Final Action: Send Confirmation Notification -->
      <rect x="330" y="630" width="240" height="46" rx="14" fill="#7dd3fc" stroke="#0284c7" stroke-width="2"/>
      <text x="450" y="658" font-size="12.5" font-weight="600" text-anchor="middle" fill="#0f172a">Issue Registration Confirmation</text>

      <!-- Flow from Actions to Final State -->
      <line x1="450" y1="676" x2="450" y2="730" stroke="#0f172a" stroke-width="2" marker-end="url(#actArrow)"/>
      
      <!-- Connect Left Error to End -->
      <path d="M 220 414 L 220 745 L 434 745" fill="none" stroke="#0f172a" stroke-width="2" marker-end="url(#actArrow)"/>

      <!-- Connect Right Error to End -->
      <path d="M 680 324 L 680 745 L 466 745" fill="none" stroke="#0f172a" stroke-width="2" marker-end="url(#actArrow)"/>

      <!-- 4. Final State Node (Bullseye Circle - Matching Reference Image 1) -->
      <circle cx="450" cy="745" r="16" fill="#ffffff" stroke="#0f172a" stroke-width="2"/>
      <circle cx="450" cy="745" r="10" fill="#0f172a"/>
    </svg>
    `;
  },

  // 5. ER Diagram (Strictly Matching User Reference Image 4 Chen Style)
  renderERDiagram() {
    return `
    <svg viewBox="0 0 1000 860" class="diagram-svg" xmlns="http://www.w3.org/2000/svg">
      <!-- Title -->
      <text x="500" y="40" font-size="22" font-weight="800" text-anchor="middle" fill="#0f766e" font-family="Arial, sans-serif">College Student Database - ER Diagram</text>
      <text x="500" y="65" font-size="12" fill="#64748b" text-anchor="middle">Chen Notation: Entities (Rectangles), Attributes (Ellipses), Relationships (Diamonds)</text>

      <!-- ENTITY 1: STUDENT (Center Top) -->
      <g transform="translate(410, 240)">
        <rect width="180" height="60" fill="#99f6e4" stroke="#0d9488" stroke-width="2.5" rx="4"/>
        <text x="90" y="36" font-size="16" font-weight="800" fill="#134e4a" text-anchor="middle">Student</text>
      </g>

      <!-- Attributes for Student (Ellipses branching out) -->
      <!-- Attribute: student_id (Primary Key - Underlined) -->
      <ellipse cx="250" cy="160" rx="75" ry="32" fill="#ccfbf1" stroke="#14b8a6" stroke-width="1.8"/>
      <text x="250" y="165" font-size="13" font-weight="700" fill="#0f766e" text-anchor="middle" text-decoration="underline">student_id (PK)</text>
      <line x1="315" y1="180" x2="415" y2="245" stroke="#14b8a6" stroke-width="1.5"/>

      <!-- Attribute: Name -->
      <ellipse cx="220" cy="270" rx="60" ry="28" fill="#ccfbf1" stroke="#14b8a6" stroke-width="1.8"/>
      <text x="220" y="275" font-size="13" font-weight="600" fill="#0f766e" text-anchor="middle">Name</text>
      <line x1="280" y1="270" x2="410" y2="270" stroke="#14b8a6" stroke-width="1.5"/>

      <!-- Attribute: Department -->
      <ellipse cx="280" cy="370" rx="68" ry="30" fill="#ccfbf1" stroke="#14b8a6" stroke-width="1.8"/>
      <text x="280" y="375" font-size="13" font-weight="600" fill="#0f766e" text-anchor="middle">Department</text>
      <line x1="335" y1="350" x2="420" y2="300" stroke="#14b8a6" stroke-width="1.5"/>

      <!-- Attribute: Year of Study -->
      <ellipse cx="750" cy="160" rx="75" ry="32" fill="#ccfbf1" stroke="#14b8a6" stroke-width="1.8"/>
      <text x="750" y="165" font-size="13" font-weight="600" fill="#0f766e" text-anchor="middle">Year of Study</text>
      <line x1="685" y1="180" x2="585" y2="245" stroke="#14b8a6" stroke-width="1.5"/>

      <!-- Attribute: Email -->
      <ellipse cx="780" cy="270" rx="65" ry="28" fill="#ccfbf1" stroke="#14b8a6" stroke-width="1.8"/>
      <text x="780" y="275" font-size="13" font-weight="600" fill="#0f766e" text-anchor="middle">Email</text>
      <line x1="715" y1="270" x2="590" y2="270" stroke="#14b8a6" stroke-width="1.5"/>

      <!-- RELATIONSHIP: ENROLLS IN (Diamond between Student and Course) -->
      <g transform="translate(500, 420)">
        <polygon points="0,-40 70,0 0,40 -70,0" fill="#99f6e4" stroke="#0d9488" stroke-width="2.5"/>
        <text x="0" y="5" font-size="13" font-weight="700" fill="#134e4a" text-anchor="middle">Enrolls In</text>
      </g>

      <!-- Connecting line from Student to Enrolls In (1:N) -->
      <line x1="500" y1="300" x2="500" y2="380" stroke="#0d9488" stroke-width="2"/>
      <text x="515" y="340" font-size="14" font-weight="800" fill="#0f766e">1</text>

      <!-- Relationship Attributes: reg_date, status, score -->
      <ellipse cx="740" cy="380" rx="65" ry="28" fill="#e6fffa" stroke="#14b8a6" stroke-width="1.5"/>
      <text x="740" y="384" font-size="11.5" font-weight="600" fill="#0f766e" text-anchor="middle">reg_date</text>
      <line x1="570" y1="420" x2="675" y2="385" stroke="#14b8a6" stroke-width="1.5"/>

      <ellipse cx="750" cy="450" rx="60" ry="26" fill="#e6fffa" stroke="#14b8a6" stroke-width="1.5"/>
      <text x="750" y="454" font-size="11.5" font-weight="600" fill="#0f766e" text-anchor="middle">status</text>
      <line x1="570" y1="420" x2="690" y2="450" stroke="#14b8a6" stroke-width="1.5"/>

      <!-- Connecting line from Enrolls In to Course (M:N) -->
      <line x1="500" y1="460" x2="500" y2="540" stroke="#0d9488" stroke-width="2"/>
      <text x="515" y="500" font-size="14" font-weight="800" fill="#0f766e">M</text>

      <!-- ENTITY 2: COURSE (Center Bottom) -->
      <g transform="translate(410, 540)">
        <rect width="180" height="60" fill="#99f6e4" stroke="#0d9488" stroke-width="2.5" rx="4"/>
        <text x="90" y="36" font-size="16" font-weight="800" fill="#134e4a" text-anchor="middle">Course</text>
      </g>

      <!-- Attributes for Course -->
      <!-- course_id (PK) -->
      <ellipse cx="230" cy="490" rx="75" ry="30" fill="#ccfbf1" stroke="#14b8a6" stroke-width="1.8"/>
      <text x="230" y="495" font-size="13" font-weight="700" fill="#0f766e" text-anchor="middle" text-decoration="underline">course_id (PK)</text>
      <line x1="300" y1="505" x2="410" y2="550" stroke="#14b8a6" stroke-width="1.5"/>

      <!-- course_name -->
      <ellipse cx="210" cy="580" rx="75" ry="30" fill="#ccfbf1" stroke="#14b8a6" stroke-width="1.8"/>
      <text x="210" y="585" font-size="12.5" font-weight="600" fill="#0f766e" text-anchor="middle">course_name</text>
      <line x1="285" y1="580" x2="410" y2="570" stroke="#14b8a6" stroke-width="1.5"/>

      <!-- max_capacity -->
      <ellipse cx="250" cy="670" rx="70" ry="30" fill="#ccfbf1" stroke="#14b8a6" stroke-width="1.8"/>
      <text x="250" y="675" font-size="12.5" font-weight="600" fill="#0f766e" text-anchor="middle">max_capacity</text>
      <line x1="315" y1="655" x2="420" y2="595" stroke="#14b8a6" stroke-width="1.5"/>

      <!-- enrolled_count (Derived Attribute - Dashed Ellipse) -->
      <ellipse cx="760" cy="560" rx="70" ry="30" fill="#ccfbf1" stroke="#14b8a6" stroke-width="1.8" stroke-dasharray="5 3"/>
      <text x="760" y="565" font-size="12.5" font-weight="600" fill="#0f766e" text-anchor="middle">enrolled_count</text>
      <line x1="690" y1="565" x2="590" y2="565" stroke="#14b8a6" stroke-width="1.5"/>

      <!-- instructor -->
      <ellipse cx="760" cy="650" rx="65" ry="28" fill="#ccfbf1" stroke="#14b8a6" stroke-width="1.8"/>
      <text x="760" y="655" font-size="12.5" font-weight="600" fill="#0f766e" text-anchor="middle">instructor</text>
      <line x1="700" y1="635" x2="590" y2="590" stroke="#14b8a6" stroke-width="1.5"/>

      <!-- Specialization / Department entities at bottom (matching reference image 4 bottom branches) -->
      <!-- RELATIONSHIP: CATEGORIZED AS -->
      <g transform="translate(500, 690)">
        <polygon points="0,-30 60,0 0,30 -60,0" fill="#99f6e4" stroke="#0d9488" stroke-width="2"/>
        <text x="0" y="4" font-size="11" font-weight="700" fill="#134e4a" text-anchor="middle">Classified By</text>
      </g>
      <line x1="500" y1="600" x2="500" y2="660" stroke="#0d9488" stroke-width="2"/>
      <line x1="500" y1="720" x2="500" y2="760" stroke="#0d9488" stroke-width="2"/>

      <!-- Category subtypes (matching Computer Science / Mechanical / Electronics in image 4) -->
      <line x1="500" y1="760" x2="250" y2="760" stroke="#0d9488" stroke-width="1.5"/>
      <line x1="500" y1="760" x2="750" y2="760" stroke="#0d9488" stroke-width="1.5"/>

      <line x1="250" y1="760" x2="250" y2="780" stroke="#0d9488" stroke-width="1.5"/>
      <rect x="170" y="780" width="160" height="45" fill="#ccfbf1" stroke="#0d9488" stroke-width="2" rx="4"/>
      <text x="250" y="808" font-size="12" font-weight="700" fill="#134e4a" text-anchor="middle">Skill Development</text>

      <line x1="500" y1="760" x2="500" y2="780" stroke="#0d9488" stroke-width="1.5"/>
      <rect x="420" y="780" width="160" height="45" fill="#ccfbf1" stroke="#0d9488" stroke-width="2" rx="4"/>
      <text x="500" y="808" font-size="12" font-weight="700" fill="#134e4a" text-anchor="middle">Technical Training</text>

      <line x1="750" y1="760" x2="750" y2="780" stroke="#0d9488" stroke-width="1.5"/>
      <rect x="670" y="780" width="160" height="45" fill="#ccfbf1" stroke="#0d9488" stroke-width="2" rx="4"/>
      <text x="750" y="808" font-size="12" font-weight="700" fill="#134e4a" text-anchor="middle">Certificate Course</text>
    </svg>
    `;
  }
};
