# Python Data Science Analysis - Scenario 17
## 25ITC31 Foundations of Data Science

**Student:** Dhanush K | **Reg No:** 732925ITR017 | **Class:** 25IT3A  
**College:** Velalar College of Engineering and Technology, Erode - 12

---

### Course Syllabus Mapping:
- **Unit 1: Data Science Fundamentals & Descriptive Statistics**  
  Summary metrics calculation (mean, median, standard deviation of scores, occupancy ratios).
- **Unit 2: Python Foundations**  
  Modular functions, dictionaries, lists, and exception-safe execution.
- **Unit 3: Data Wrangling with Pandas & NumPy**  
  Multi-table joins (students, courses, enrollments), GroupBy aggregations, and pivot analytics.
- **Unit 4: Data Cleaning & Preprocessing**  
  Duplicate detection (`subset=['student_id', 'course_id']`), handling missing scores (`dropna`/`fillna`), type casts.
- **Unit 5: Exploratory Data Analysis & Visualization**  
  Generation of 4 publication-quality charts using Matplotlib and Seaborn saved in `generated_charts/`.

---

### Execution Instructions:

```bash
# 1. Install dependencies
pip install -r requirements.txt

# 2. Run analysis and generate charts
python enrollment_analysis.py
```
*(The charts will be automatically saved in the `generated_charts/` directory and are also embedded dynamically in the live website)*
