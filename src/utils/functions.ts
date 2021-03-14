interface Courses {
  course?: string,
  credit: number,
  grade: number
}

interface newCourses extends Courses {
  score: number
}

interface GPAInfo {
  currentGPA: number,
  targetGPA: number,
  currentCredits: number,
  additionalCredits: number
}

export const addScore = (courses: Courses[]) => {
  const newCourses: newCourses[] = courses.map(course => {
    const gradeNum = course.grade;
    const score = course.credit * gradeNum;
    return { ...course, score };
  });
  return newCourses;
};

export const calcGPA = (newCourses: newCourses[]) => {
  let totalCredits = 0;
  let totalScores = 0;
  newCourses.forEach((course) => {
    totalCredits += course.credit;
    totalScores += course.score;
  });
  
  let GPA = 0;
  if (totalCredits > 0) {
    GPA = totalScores / totalCredits;
  }

  return { totalCredits, GPA };
};

export const calcAdditionalGPA = (GPAInfo: GPAInfo) => {
  const { currentGPA, targetGPA, currentCredits, additionalCredits } = GPAInfo;

  const additionalGPA
    = (targetGPA * (currentCredits + additionalCredits) - currentGPA * currentCredits) / additionalCredits;
  
    return additionalGPA;
};