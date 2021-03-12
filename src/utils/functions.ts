interface Courses {
  course?: string,
  credit: number,
  grade: string
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
  const newCourses: newCourses[] = courses.map(courseObj => {
    let gradeNum = 0;
    switch(courseObj.grade) {
      case 'A':
        gradeNum = 4.0;
        break;
      case 'B+':
        gradeNum = 3.5;
        break;
      case 'B':
        gradeNum = 3.0;
        break;
      case 'C':
        gradeNum = 2.5;
        break;
      case 'D':
        gradeNum = 2.0;
        break;
    };
    const score = courseObj.credit * gradeNum;
    return { ...courseObj, score };
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