"""
========================================================================================
VELALAR COLLEGE OF ENGINEERING AND TECHNOLOGY, ERODE - 12
DEPARTMENT OF INFORMATION TECHNOLOGY | ACADEMIC YEAR 2026-27 (ODD)
25ITC31 - FOUNDATIONS OF DATA SCIENCE
SCENARIO 17: ONLINE COURSE REGISTRATION AND STUDENT ENROLLMENT ANALYSIS SYSTEM
DEVELOPER: DHANUSH K | REG NO: 732925ITR017 | CLASS: 25IT3A
========================================================================================
This script demonstrates the complete 5-unit syllabus workflow:
- Unit 1: Data Science Fundamentals & Summary Statistics
- Unit 2: Python Foundations & Data Processing
- Unit 3: Data Wrangling with NumPy and Pandas
- Unit 4: Data Cleaning & Preprocessing (Missing Values, Outliers, Normalization)
- Unit 5: Exploratory Data Analysis (EDA) & Visualization (Matplotlib & Seaborn)
========================================================================================
"""

import os
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

# Set aesthetics
sns.set_theme(style="whitegrid", palette="muted")
plt.rcParams['font.sans-serif'] = 'Arial'
plt.rcParams['axes.edgecolor'] = '#cbd5e1'
plt.rcParams['axes.linewidth'] = 0.8

# Ensure output directory exists
OUTPUT_DIR = os.path.join(os.path.dirname(__file__), "generated_charts")
os.makedirs(OUTPUT_DIR, exist_ok=True)

# --------------------------------------------------------------------------------------
# UNIT 2 & 3: DATA INGESTION & WRANGLING (Simulated Relational Database Ingestion)
# --------------------------------------------------------------------------------------
def load_project_dataset():
    """
    Simulates retrieval of relational database tables via SQL connector.
    """
    students_data = [
        {"student_id": "732925ITR017", "name": "Dhanush K", "department": "IT", "year": 3, "email": "dhanush.it@vcet.edu.in"},
        {"student_id": "732925ITR047", "name": "Praveen Raj M", "department": "IT", "year": 3, "email": "praveen.it@vcet.edu.in"},
        {"student_id": "732925ITR077", "name": "Karthik Raja S", "department": "IT", "year": 3, "email": "karthik.it@vcet.edu.in"},
        {"student_id": "732925ITR107", "name": "Yuvan Shankar V", "department": "IT", "year": 3, "email": "yuvan.it@vcet.edu.in"},
        {"student_id": "732925CSR012", "name": "Sowmiya S", "department": "CSE", "year": 2, "email": "sowmiya.cse@vcet.edu.in"},
        {"student_id": "732925CSR034", "name": "Abhishek Sharma R", "department": "CSE", "year": 3, "email": "abhishek.cse@vcet.edu.in"},
        {"student_id": "732925ADR009", "name": "Gokul Nath R", "department": "AIDS", "year": 3, "email": "gokul.aids@vcet.edu.in"},
        {"student_id": "732925ADR021", "name": "Deepika V", "department": "AIDS", "year": 2, "email": "deepika.aids@vcet.edu.in"},
        {"student_id": "732925ECR045", "name": "Harini K", "department": "ECE", "year": 4, "email": "harini.ece@vcet.edu.in"},
        {"student_id": "732925ECR089", "name": "Vigneshwaran P", "department": "ECE", "year": 2, "email": "vignesh.ece@vcet.edu.in"},
        {"student_id": "732925MER014", "name": "Arun Kumar M", "department": "MECH", "year": 3, "email": "arun.mech@vcet.edu.in"},
        {"student_id": "732925EER028", "name": "Nandhini Devi B", "department": "EEE", "year": 4, "email": "nandhini.eee@vcet.edu.in"}
    ]

    courses_data = [
        {"course_id": "CRS101", "course_name": "Full Stack Web Dev", "category": "Skill Dev", "duration": 45, "capacity": 10, "instructor": "Dr. S. Kaviya"},
        {"course_id": "CRS102", "course_name": "Applied Machine Learning", "category": "Tech Training", "duration": 60, "capacity": 8, "instructor": "Prof. M. Prakash"},
        {"course_id": "CRS103", "course_name": "Cloud & DevOps", "category": "Certificate", "duration": 30, "capacity": 6, "instructor": "Dr. R. Anand"},
        {"course_id": "CRS104", "course_name": "Database Design & SQL", "category": "Skill Dev", "duration": 40, "capacity": 10, "instructor": "Prof. T. Divya"},
        {"course_id": "CRS105", "course_name": "Cybersecurity & Hacking", "category": "Tech Training", "duration": 50, "capacity": 6, "instructor": "Dr. N. Karthik"},
        {"course_id": "CRS106", "course_name": "Data Analysis with Python", "category": "Skill Dev", "duration": 35, "capacity": 12, "instructor": "Prof. K. Soundarya"}
    ]

    enrollments_data = [
        {"enrollment_id": "ENR101", "student_id": "732925ITR017", "course_id": "CRS101", "status": "COMPLETED", "score": 96.5},
        {"enrollment_id": "ENR102", "student_id": "732925ITR017", "course_id": "CRS102", "status": "IN_PROGRESS", "score": None},
        {"enrollment_id": "ENR103", "student_id": "732925ITR017", "course_id": "CRS104", "status": "COMPLETED", "score": 92.0},
        {"enrollment_id": "ENR104", "student_id": "732925ITR047", "course_id": "CRS101", "status": "COMPLETED", "score": 88.5},
        {"enrollment_id": "ENR105", "student_id": "732925ITR047", "course_id": "CRS103", "status": "IN_PROGRESS", "score": None},
        {"enrollment_id": "ENR106", "student_id": "732925ITR077", "course_id": "CRS102", "status": "IN_PROGRESS", "score": None},
        {"enrollment_id": "ENR107", "student_id": "732925ITR077", "course_id": "CRS105", "status": "REGISTERED", "score": None},
        {"enrollment_id": "ENR108", "student_id": "732925ITR107", "course_id": "CRS101", "status": "COMPLETED", "score": 85.0},
        {"enrollment_id": "ENR109", "student_id": "732925ITR107", "course_id": "CRS104", "status": "IN_PROGRESS", "score": None},
        {"enrollment_id": "ENR110", "student_id": "732925CSR012", "course_id": "CRS101", "status": "IN_PROGRESS", "score": None},
        {"enrollment_id": "ENR111", "student_id": "732925CSR012", "course_id": "CRS106", "status": "COMPLETED", "score": 91.0},
        {"enrollment_id": "ENR112", "student_id": "732925CSR034", "course_id": "CRS102", "status": "COMPLETED", "score": 94.0},
        {"enrollment_id": "ENR113", "student_id": "732925CSR034", "course_id": "CRS105", "status": "IN_PROGRESS", "score": None},
        {"enrollment_id": "ENR114", "student_id": "732925ADR009", "course_id": "CRS102", "status": "COMPLETED", "score": 98.0},
        {"enrollment_id": "ENR115", "student_id": "732925ADR009", "course_id": "CRS106", "status": "COMPLETED", "score": 95.5},
        {"enrollment_id": "ENR116", "student_id": "732925ADR021", "course_id": "CRS102", "status": "IN_PROGRESS", "score": None},
        {"enrollment_id": "ENR117", "student_id": "732925ADR021", "course_id": "CRS106", "status": "IN_PROGRESS", "score": None},
        {"enrollment_id": "ENR118", "student_id": "732925ECR045", "course_id": "CRS103", "status": "COMPLETED", "score": 89.0},
        {"enrollment_id": "ENR119", "student_id": "732925ECR045", "course_id": "CRS105", "status": "REGISTERED", "score": None},
        {"enrollment_id": "ENR120", "student_id": "732925ECR089", "course_id": "CRS103", "status": "IN_PROGRESS", "score": None},
        {"enrollment_id": "ENR121", "student_id": "732925MER014", "course_id": "CRS101", "status": "REGISTERED", "score": None},
        {"enrollment_id": "ENR122", "student_id": "732925EER028", "course_id": "CRS103", "status": "COMPLETED", "score": 90.5}
    ]

    df_students = pd.DataFrame(students_data)
    df_courses = pd.DataFrame(courses_data)
    df_enrollments = pd.DataFrame(enrollments_data)

    return df_students, df_courses, df_enrollments


# --------------------------------------------------------------------------------------
# UNIT 4: DATA CLEANING & TRANSFORMATION
# --------------------------------------------------------------------------------------
def preprocess_and_merge(df_students, df_courses, df_enrollments):
    """
    Cleans, verifies duplicates, and joins dataframes into master dataset.
    """
    print(">>> [Unit 4] Data Preprocessing & Cleaning Started...")

    # Check for duplicate registrations
    dups = df_enrollments.duplicated(subset=['student_id', 'course_id']).sum()
    print(f"  - Duplicate enrollments detected: {dups}")

    # Merge datasets (Relational Inner Joins)
    df_merged = df_enrollments.merge(df_students, on='student_id', how='inner')
    df_merged = df_merged.merge(df_courses, on='course_id', how='inner')

    print(f"  - Merged dataset shape: {df_merged.shape[0]} rows, {df_merged.shape[1]} columns")
    return df_merged


# --------------------------------------------------------------------------------------
# UNIT 1 & 5: EXPLORATORY DATA ANALYSIS & VISUALIZATION GENERATION
# --------------------------------------------------------------------------------------
def generate_visualizations(df_merged, df_courses):
    """
    Generates 4 high-quality charts using Matplotlib & Seaborn.
    """
    print("\n>>> [Unit 5] Generating Visualizations...")

    # --- CHART 1: Course Popularity & Capacity Utilization ---
    course_stats = df_merged.groupby(['course_id', 'course_name', 'capacity']).agg(
        total_enrolled=('enrollment_id', 'count'),
        completed=('status', lambda s: (s == 'COMPLETED').sum())
    ).reset_index()

    course_stats['available_seats'] = course_stats['capacity'] - course_stats['total_enrolled']
    course_stats['occupancy_pct'] = (course_stats['total_enrolled'] / course_stats['capacity']) * 100

    plt.figure(figsize=(10, 5.5))
    x = np.arange(len(course_stats))
    width = 0.35

    plt.bar(x - width/2, course_stats['capacity'], width, label='Max Capacity', color='#94a3b8', alpha=0.8)
    plt.bar(x + width/2, course_stats['total_enrolled'], width, label='Enrolled Students', color='#3b82f6')

    plt.xlabel('Course', fontweight='bold', fontsize=11)
    plt.ylabel('Number of Seats', fontweight='bold', fontsize=11)
    plt.title('Scenario 17: Course Capacity vs. Actual Student Enrollments\nDeveloper: Dhanush K (732925ITR017)', fontsize=13, fontweight='bold', pad=15)
    plt.xticks(x, course_stats['course_name'], rotation=20, ha='right', fontsize=9.5)
    plt.legend(frameon=True, facecolor='white', edgecolor='#cbd5e1')
    plt.tight_layout()
    chart1_path = os.path.join(OUTPUT_DIR, "course_popularity.png")
    plt.savefig(chart1_path, dpi=300)
    plt.close()
    print(f"  [Saved] {chart1_path}")

    # --- CHART 2: Department-wise Participation ---
    dept_counts = df_merged['department'].value_counts()
    colors = ['#3b82f6', '#10b981', '#f59e0b', '#8b5cf6', '#ec4899', '#64748b']

    plt.figure(figsize=(7, 6))
    plt.pie(dept_counts, labels=dept_counts.index, autopct='%1.1f%%', startangle=140,
            colors=colors, wedgeprops={'edgecolor': 'white', 'linewidth': 2})
    plt.title('Student Participation by Department\nScenario 17 - VCET IT (Dhanush K)', fontsize=12, fontweight='bold')
    plt.tight_layout()
    chart2_path = os.path.join(OUTPUT_DIR, "department_distribution.png")
    plt.savefig(chart2_path, dpi=300)
    plt.close()
    print(f"  [Saved] {chart2_path}")

    # --- CHART 3: Enrollment Status Distribution ---
    status_counts = df_merged['status'].value_counts()
    status_colors = {'COMPLETED': '#10b981', 'IN_PROGRESS': '#3b82f6', 'REGISTERED': '#f59e0b', 'CANCELLED': '#ef4444'}
    palette = [status_colors.get(s, '#64748b') for s in status_counts.index]

    plt.figure(figsize=(8, 5))
    bars = plt.bar(status_counts.index, status_counts.values, color=palette, width=0.55)
    plt.xlabel('Enrollment Lifecycle Status', fontweight='bold', fontsize=11)
    plt.ylabel('Count of Students', fontweight='bold', fontsize=11)
    plt.title('Overall Course Enrollment & Completion Status\n(Scenario 17 - Dhanush K - 732925ITR017)', fontsize=12, fontweight='bold', pad=15)

    for bar in bars:
        height = bar.get_height()
        plt.text(bar.get_x() + bar.get_width()/2., height + 0.2, f'{int(height)}',
                 ha='center', va='bottom', fontweight='bold', fontsize=10)

    plt.ylim(0, max(status_counts.values) + 2)
    plt.tight_layout()
    chart3_path = os.path.join(OUTPUT_DIR, "enrollment_status.png")
    plt.savefig(chart3_path, dpi=300)
    plt.close()
    print(f"  [Saved] {chart3_path}")

    # --- CHART 4: Completion Score Distribution ---
    completed_df = df_merged[df_merged['status'] == 'COMPLETED'].dropna(subset=['score'])
    plt.figure(figsize=(8, 5))
    sns.histplot(completed_df['score'], bins=6, kde=True, color='#8b5cf6')
    plt.xlabel('Course Completion Score (%)', fontweight='bold', fontsize=11)
    plt.ylabel('Number of Students', fontweight='bold', fontsize=11)
    plt.title('Distribution of Student Completion Scores\nScenario 17 - Online Course Registration System', fontsize=12, fontweight='bold', pad=15)
    plt.tight_layout()
    chart4_path = os.path.join(OUTPUT_DIR, "score_distribution.png")
    plt.savefig(chart4_path, dpi=300)
    plt.close()
    print(f"  [Saved] {chart4_path}")

    return course_stats


def main():
    print("=========================================================================================")
    print(" VELALAR COLLEGE OF ENGINEERING AND TECHNOLOGY | DEPARTMENT OF IT")
    print(" 25ITC31: FOUNDATIONS OF DATA SCIENCE - COURSE REGISTRATION ANALYSIS")
    print(" STUDENT: DHANUSH K | REG NO: 732925ITR017 | CLASS: 25IT3A")
    print("=========================================================================================\n")

    df_students, df_courses, df_enrollments = load_project_dataset()
    df_merged = preprocess_and_merge(df_students, df_courses, df_enrollments)
    course_stats = generate_visualizations(df_merged, df_courses)

    print("\n>>> [Summary Report Generated Successfully]")
    print(course_stats[['course_id', 'course_name', 'capacity', 'total_enrolled', 'occupancy_pct']])
    print("\nVisual charts exported into 'python/generated_charts/'.")

if __name__ == "__main__":
    main()
