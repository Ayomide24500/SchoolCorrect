import axios from "axios";

const URL: string = "http://localhost:2244/api";
// const URL: string = "https://startschoolbe.onrender.com/api";

export const viewStduentDetail: any = async (studentID: any) => {
  try {
    return await axios
      .get(`${URL}/read-student-info/${studentID}`)
      .then((res: any) => {
        return res?.data;
      });
  } catch (error) {
    return error;
  }
};

export const loginStudent = async (data: {}) => {
  try {
    return await axios
      .post(
        `${URL}/login-student/`,
        data
        // { withCredentials: true }
      )
      .then((res: any) => {
        return res?.data;
      });
  } catch (error) {
    return error;
  }
};

export const readClassInfo = async (className: string) => {
  try {
    return await axios
      .post(`${URL}/view-classroom-info-name/`, { className })
      .then((res: any) => {
        return res?.data;
      });
  } catch (error) {
    return error;
  }
};

export const performanceTest = async (
  studentID: string,
  quizID: string,
  data: {}
) => {
  try {
    return await axios
      .post(
        `${URL}/create-subject-quiz-performance/${studentID}/${quizID}/`,
        data
      )
      .then((res: any) => {
        return res?.data;
      });
  } catch (error) {
    return error;
  }
};

export const readStudentCookie = async () => {
  try {
    return await axios
      .get(`${URL}/read-student-cookie/`, { withCredentials: true })
      .then((res: any) => {
        return res?.data;
      });
  } catch (error) {
    return error;
  }
};

export const viewStudentAttendance = async (studentID: string) => {
  try {
    return await axios
      .get(`${URL}/viewing-student-attendance/${studentID}`)
      .then((res: any) => {
        return res?.data;
      });
  } catch (error) {
    return error;
  }
};

export const classAssignment = async (classID: string) => {
  try {
    return await axios
      .get(`${URL}/view-class-assignment/${classID}`)
      .then((res: any) => {
        return res?.data;
      });
  } catch (error) {
    return error;
  }
};

export const lessonNotes = async (schoolID: string, staffID: string) => {
  try {
    return await axios
      .get(`${URL}/view-lesson-note/${schoolID}/${staffID}`)
      .then((res: any) => {
        return res?.data;
      });
  } catch (error) {
    return error;
  }
};

export const classLessonNotes = async (classID: string) => {
  try {
    return await axios
      .get(`${URL}/view-class-lesson-note/${classID}`)
      .then((res: any) => {
        return res?.data;
      });
  } catch (error) {
    return error;
  }
};

export const rateNote = async (
  studentID: string,
  lessonID: string,
  data: {}
) => {
  try {
    return await axios
      .patch(`${URL}/rate-lesson-note/${studentID}/${lessonID}`, { rate: data })
      .then((res: any) => {
        return res?.data;
      });
  } catch (error) {
    return error;
  }
};

export const createStudentArticle = async (
  schoolID: string,
  studentID: string,
  data: {}
) => {
  try {
    return await axios
      .post(`${URL}/create-article/${schoolID}/${studentID}`, data)
      .then((res: any) => {
        return res?.data;
      })
      .catch((error) => {
        console.log(error);
      });
  } catch (error) {
    return error;
  }
};

export const createPastQuestionHistory = async (
  studentID: string,
  data: {}
) => {
  try {
    return await axios
      .post(`${URL}/create-question-history/${studentID}`, data)
      .then((res: any) => {
        return res?.data;
      })
      .catch((error) => {
        console.log(error);
      });
  } catch (error) {
    return error;
  }
};

export const getOneStudentHistory = async (studentID: string) => {
  try {
    return await axios
      .get(`${URL}/view-question-history/${studentID}`)
      .then((res: any) => {
        return res?.data;
      })
      .catch((error) => {
        console.log(error);
      });
  } catch (error) {
    return error;
  }
};

export const getOneArticle = async (articleID: string) => {
  try {
    return await axios
      .get(`${URL}/view-article/${articleID}`)
      .then((res: any) => {
        return res?.data;
      })
      .catch((error) => {
        console.log(error);
      });
  } catch (error) {
    return error;
  }
};

export const getSchoolArticle = async (schoolID: string) => {
  try {
    return await axios
      .get(`${URL}/view-school-article/${schoolID}`)
      .then((res: any) => {
        return res?.data;
      })
      .catch((error) => {
        console.log(error);
      });
  } catch (error) {
    return error;
  }
};

export const updateProfile = async (studntID: string, data: {}) => {
  try {
    return await axios
      .patch(`${URL}/update-student/${studntID}`, data)
      .then((res: any) => {
        return res?.data;
      })
      .catch((error) => {
        console.log(error);
      });
  } catch (error) {
    return error;
  }
};

export const makeComplains = async (studentID: string, data: any) => {
  try {
    return await axios
      .post(`${URL}/create-student-complain/${studentID}`, data)
      .then((res: any) => {
        return res?.data;
      });
  } catch (error) {
    return error;
  }
};

export const viewComplains = async (studentID: string) => {
  try {
    return await axios
      .get(`${URL}/view-student-complain/${studentID}`)
      .then((res: any) => {
        return res?.data;
      });
  } catch (error) {
    return error;
  }
};

export const viewClassTimetable = async (classID: string) => {
  try {
    return await axios
      .get(`${URL}/view-time-table/${classID}`)
      .then((res: any) => {
        return res?.data;
      });
  } catch (error) {
    return error;
  }
};

export const updateTeacherActiveness = async (
  studentID: string,
  data: string
) => {
  try {
    return await axios
      .patch(`${URL}/staff-active/${studentID}`, { teacherName: data })
      .then((res: any) => {
        return res?.data;
      });
  } catch (error) {
    return error;
  }
};

export const updateStudentAvatar = async (studentID: string, data: string) => {
  try {
    const config: any = {
      "Content-Type": "multipart/form-data",
    };
    return await axios
      .patch(`${URL}/upload-student-avatar/${studentID}`, data, config)
      .then((res: any) => {
        return res?.data;
      });
  } catch (error) {
    return error;
  }
};

export const getStudentGrade = async (studentID: string) => {
  try {
    return await axios
      .get(`${URL}/student-report-card/${studentID}`)
      .then((res: any) => {
        return res?.data;
      });
  } catch (error) {
    return error;
  }
};

export const getOneHistory = async (historyID: string) => {
  try {
    return await axios
      .get(`${URL}/get-one-history/${historyID}`)
      .then((res: any) => {
        return res?.data;
      });
  } catch (error) {
    return error;
  }
};

export const updateStudentParentEmail = async (
  schoolID: string,
  studentID: string,
  data: {}
) => {
  try {
    return await axios
      .patch(`${URL}/update-parent-email/${schoolID}/${studentID}`, data)
      .then((res: any) => {
        return res?.data;
      });
  } catch (error) {
    return error;
  }
};
