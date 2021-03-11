interface Courses {
  course?: string,
  credit: number,
  grade: string
}

interface newCourses extends Courses {
  score: number
}

export const addScore = (courses: Courses[]): newCourses[] => {
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