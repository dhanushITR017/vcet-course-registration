-- ============================================================================
-- VELALAR COLLEGE OF ENGINEERING AND TECHNOLOGY, ERODE - 12
-- DEPARTMENT OF INFORMATION TECHNOLOGY
-- SCENARIO 17: SAMPLE DATA INSERTION SCRIPT
-- DEVELOPER: DHANUSH K | REG NO: 732925ITR017
-- ============================================================================

USE course_registration_db;

-- 1. Insert Categories
INSERT INTO categories (category_id, category_name, description) VALUES
('CAT_SKILL', 'Skill Development', 'Practical hands-on industry skill bootcamps and workshops'),
('CAT_CERT',  'Certificate Course', 'Comprehensive accredited certification programs with proctored exams'),
('CAT_TECH',  'Technical Training', 'In-depth systems, cloud infrastructure, and emerging engineering tech');

-- 2. Insert Students
INSERT INTO students (student_id, name, department, year_of_study, email) VALUES
('732925ITR017', 'Dhanush K',          'IT',   3, 'dhanush.it@vcet.edu.in'),
('732925ITR047', 'Praveen Raj M',      'IT',   3, 'praveen.it@vcet.edu.in'),
('732925ITR077', 'Karthik Raja S',     'IT',   3, 'karthik.it@vcet.edu.in'),
('732925ITR107', 'Yuvan Shankar V',    'IT',   3, 'yuvan.it@vcet.edu.in'),
('732925CSR012', 'Sowmiya S',          'CSE',  2, 'sowmiya.cse@vcet.edu.in'),
('732925CSR034', 'Abhishek Sharma R',  'CSE',  3, 'abhishek.cse@vcet.edu.in'),
('732925ADR009', 'Gokul Nath R',       'AIDS', 3, 'gokul.aids@vcet.edu.in'),
('732925ADR021', 'Deepika V',          'AIDS', 2, 'deepika.aids@vcet.edu.in'),
('732925ECR045', 'Harini K',           'ECE',  4, 'harini.ece@vcet.edu.in'),
('732925ECR089', 'Vigneshwaran P',     'ECE',  2, 'vignesh.ece@vcet.edu.in'),
('732925MER014', 'Arun Kumar M',       'MECH', 3, 'arun.mech@vcet.edu.in'),
('732925EER028', 'Nandhini Devi B',    'EEE',  4, 'nandhini.eee@vcet.edu.in');

-- 3. Insert Courses
INSERT INTO courses (course_id, course_name, category_id, duration_hours, max_capacity, enrolled_count, instructor, status) VALUES
('CRS101', 'Full Stack Web Development',     'CAT_SKILL', 45, 10, 0, 'Dr. S. Kaviya',      'ACTIVE'),
('CRS102', 'Applied Machine Learning',       'CAT_TECH',  60, 8,  0, 'Prof. M. Prakash',   'ACTIVE'),
('CRS103', 'Cloud Computing & DevOps',       'CAT_CERT',  30, 6,  0, 'Dr. R. Anand',       'ACTIVE'),
('CRS104', 'Database Design & SQL Mastery',  'CAT_SKILL', 40, 10, 0, 'Prof. T. Divya',     'ACTIVE'),
('CRS105', 'Cybersecurity & Ethical Hacking','CAT_TECH',  50, 6,  0, 'Dr. N. Karthik',     'ACTIVE'),
('CRS106', 'Data Analysis with Python',      'CAT_SKILL', 35, 12, 0, 'Prof. K. Soundarya', 'ACTIVE');

-- 4. Insert Enrollments
-- Note: Trigger automatically synchronizes course enrolled_count
INSERT INTO enrollments (enrollment_id, student_id, course_id, registration_date, status, completion_score) VALUES
('ENR101', '732925ITR017', 'CRS101', '2026-08-01', 'COMPLETED',   96.50),
('ENR102', '732925ITR017', 'CRS102', '2026-08-05', 'IN_PROGRESS', NULL),
('ENR103', '732925ITR017', 'CRS104', '2026-08-10', 'COMPLETED',   92.00),

('ENR104', '732925ITR047', 'CRS101', '2026-08-02', 'COMPLETED',   88.50),
('ENR105', '732925ITR047', 'CRS103', '2026-08-06', 'IN_PROGRESS', NULL),

('ENR106', '732925ITR077', 'CRS102', '2026-08-07', 'IN_PROGRESS', NULL),
('ENR107', '732925ITR077', 'CRS105', '2026-08-12', 'REGISTERED',  NULL),

('ENR108', '732925ITR107', 'CRS101', '2026-08-03', 'COMPLETED',   85.00),
('ENR109', '732925ITR107', 'CRS104', '2026-08-11', 'IN_PROGRESS', NULL),

('ENR110', '732925CSR012', 'CRS101', '2026-08-04', 'IN_PROGRESS', NULL),
('ENR111', '732925CSR012', 'CRS106', '2026-08-14', 'COMPLETED',   91.00),

('ENR112', '732925CSR034', 'CRS102', '2026-08-08', 'COMPLETED',   94.00),
('ENR113', '732925CSR034', 'CRS105', '2026-08-13', 'IN_PROGRESS', NULL),

('ENR114', '732925ADR009', 'CRS102', '2026-08-09', 'COMPLETED',   98.00),
('ENR115', '732925ADR009', 'CRS106', '2026-08-15', 'COMPLETED',   95.50),

('ENR116', '732925ADR021', 'CRS102', '2026-08-09', 'IN_PROGRESS', NULL),
('ENR117', '732925ADR021', 'CRS106', '2026-08-16', 'IN_PROGRESS', NULL),

('ENR118', '732925ECR045', 'CRS103', '2026-08-07', 'COMPLETED',   89.00),
('ENR119', '732925ECR045', 'CRS105', '2026-08-13', 'REGISTERED',  NULL),

('ENR120', '732925ECR089', 'CRS103', '2026-08-08', 'IN_PROGRESS', NULL),
('ENR121', '732925MER014', 'CRS101', '2026-08-06', 'REGISTERED',  NULL),
('ENR122', '732925EER028', 'CRS103', '2026-08-09', 'COMPLETED',   90.50);
