import axios from "axios";

const URL: string = "http://localhost:2244/api";
const URL2: string = "http://localhost:2244";
// const URL: string = "https://startschoolbe.onrender.com/api";
// const URL2: string = "https://startschoolbe.onrender.com";

export const getStarted = async () => {
  try {
    return await axios.get(`${URL2}`).then((res: any) => {
      return res?.data;
    });
  } catch (error: any) {
    return error;
  }
};

export const getSchoolCookie = async () => {
  try {
    return await axios
      .get(
        `${URL}/read-school-cookie`
        // { withCredentials: true }
      )
      .then((res: any) => {
        return res?.data;
      });
  } catch (error) {
    return error;
  }
};

export const getSchoolLandingPage = async (schoolName: string) => {
  try {
    return await axios.get(`${URL2}/${schoolName}`).then((res: any) => {
      return res?.data;
    });
  } catch (error: any) {
    return error;
  }
};

export const openServerAPI = async () => {
  try {
    return await axios.get(`${URL2}`).then((res: any) => {
      return res?.message;
    });
  } catch (error) {
    return error;
  }
};

export const registerSchool = async (data: any) => {
  try {
    return await axios
      .post(`${URL}/register-school`, { email: data })
      .then((res: any) => {
        return res?.data;
      });
  } catch (error: any) {
    return error;
  }
};

export const loginSchool = async (data: {}) => {
  try {
    return await axios
      .post(
        `${URL}/login-school`,
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

export const verifySchool = async (schoolID: string) => {
  try {
    return await axios
      .get(`${URL}/verify-school/${schoolID}`)
      .then((res: any) => {
        return res?.data;
      });
  } catch (error) {
    return error;
  }
};

export const readSchool = async (schoolID: string) => {
  try {
    return await axios
      .get(`${URL}/view-school/${schoolID}`)
      .then((res: any) => {
        return res?.data;
      });
  } catch (error) {
    return error;
  }
};

export const logout = async () => {
  try {
    return await axios
      .delete(
        `${URL}/logout-school`
        // { withCredentials: true }
      )
      .then((res: any) => {
        return res?.data;
      });
  } catch (error) {
    return error;
  }
};

export const changeSchoolTags = async (schoolID: string, data: any) => {
  try {
    return await axios
      .patch(`${URL}/change-school-tag/${schoolID}`, data)
      .then((res: any) => {
        return res?.data;
      });
  } catch (error) {
    return error;
  }
};

export const changeSchoolName = async (schoolID: string, data: any) => {
  try {
    return await axios
      .patch(`${URL}/change-school-name/${schoolID}`, data)
      .then((res: any) => {
        return res?.data;
      });
  } catch (error) {
    return error;
  }
};

export const changeSchoolLocation = async (schoolID: string, data: any) => {
  try {
    return await axios
      .patch(`${URL}/change-school-location/${schoolID}`, data)
      .then((res: any) => {
        return res?.data;
      });
  } catch (error) {
    return error;
  }
};

export const changeSchoolStarted = async (schoolID: string) => {
  try {
    return await axios
      .patch(`${URL}/change-school-started/${schoolID}`)
      .then((res: any) => {
        return res?.data;
      });
  } catch (error) {
    return error;
  }
};

export const viewSchoolByName = async (schoolName: string) => {
  try {
    return await axios
      .get(`${URL}/get-school-by-name/${schoolName}`)
      .then((res: any) => {
        return res?.data;
      });
  } catch (error) {
    return error;
  }
};

export const createSchoolTeacher = async (schoolID: string, data: {}) => {
  try {
    return await axios
      .post(`${URL}/create-school-teacher/${schoolID}`, data)
      .then((res: any) => {
        return res?.data;
      });
  } catch (error) {
    return error;
  }
};

export const viewSchoolTeacher = async (schoolID: string) => {
  try {
    return await axios
      .get(`${URL}/view-school-teacher/${schoolID}`)
      .then((res: any) => {
        return res?.data;
      });
  } catch (error) {
    return error;
  }
};

// subject API

export const createSchoolSubject = async (schoolID: string, data: any) => {
  try {
    return await axios
      .post(`${URL}/create-subject/${schoolID}`, data)
      .then((res: any) => {
        return res?.data;
      });
  } catch (error) {
    return error;
  }
};

export const createSchoolClassroom = async (schoolID: string, data: any) => {
  try {
    return await axios
      .post(`${URL}/create-classroom/${schoolID}`, data)
      .then((res: any) => {
        return res?.data;
      });
  } catch (error) {
    return error;
  }
};

export const getSchoolClassroom = async (schoolID: string) => {
  try {
    return await axios
      .get(`${URL}/view-classrooms/${schoolID}`)
      .then((res: any) => {
        return res?.data;
      });
  } catch (error) {
    return error;
  }
};

export const updateClassroomTeacher = async (
  schoolID: string,
  classID: string,
  data: {}
) => {
  try {
    return await axios
      .patch(`${URL}/update-classrooms-teacher/${schoolID}/${classID}`, data)
      .then((res: any) => {
        return res?.data;
      });
  } catch (error) {
    return error;
  }
};

export const getClassroom = async (classID: string) => {
  try {
    return await axios
      .get(`${URL}/view-classroom-info/${classID}`)
      .then((res: any) => {
        return res?.data;
      });
  } catch (error) {
    return error;
  }
};

export const getSchoolAnncoement = async (schoolID: string) => {
  try {
    return await axios
      .get(`${URL}/view-announcement/${schoolID}`)
      .then((res: any) => {
        return res?.data;
      });
  } catch (error) {
    return error;
  }
};

export const getSchoolClassromm = async (schoolID: string) => {
  try {
    return await axios
      .get(`${URL}/view-announcement/${schoolID}`)
      .then((res: any) => {
        return res?.data;
      });
  } catch (error) {
    return error;
  }
};

export const getSchoolEvent = async (schoolID: string) => {
  try {
    return await axios.get(`${URL}/view-event/${schoolID}`).then((res: any) => {
      return res?.data;
    });
  } catch (error) {
    return error;
  }
};

export const createSchoolEvent = async (schoolID: string, data: {}) => {
  try {
    return await axios
      .post(`${URL}/create-event/${schoolID}`, data)
      .then((res: any) => {
        return res?.data;
      });
  } catch (error) {
    return error;
  }
};

export const createSchoolAnnouncement = async (schoolID: string, data: {}) => {
  try {
    return await axios
      .post(`${URL}/create-announcement/${schoolID}`, data)
      .then((res: any) => {
        return res?.data;
      });
  } catch (error) {
    return error;
  }
};

export const createSchoolStudent = async (schoolID: string, data: {}) => {
  try {
    return await axios
      .post(`${URL}/create-student/${schoolID}`, data)
      .then((res: any) => {
        return res?.data;
      });
  } catch (error) {
    return error;
  }
};

export const viewSchoolSubjects = async (schoolID: string) => {
  try {
    return await axios
      .get(`${URL}/view-subjects/${schoolID}`)
      .then((res: any) => {
        return res?.data;
      });
  } catch (error) {
    return error;
  }
};

export const getClassSubjects = async (classID: string) => {
  try {
    return await axios
      .get(`${URL}/view-classroom-info/${classID}/`)
      .then((res: any) => {
        return res?.data;
      });
  } catch (error) {
    return error;
  }
};

export const getClassTimeTable = async (classID: string) => {
  try {
    return await axios
      .get(`${URL}/view-time-table/${classID}/`)
      .then((res: any) => {
        return res?.data;
      });
  } catch (error) {
    return error;
  }
};

export const getSchoolStudents = async (schoolID: string) => {
  try {
    return await axios
      .get(`${URL}/read-student/${schoolID}/`)
      .then((res: any) => {
        return res?.data;
      });
  } catch (error) {
    return error;
  }
};

export const getSchoolStudentDetail = async (studentID: string) => {
  try {
    return await axios
      .get(`${URL}/read-student-info/${studentID}/`)
      .then((res: any) => {
        return res?.data;
      });
  } catch (error) {
    return error;
  }
};

export const createTimeTable = async (
  schoolID: string,
  classID: string,
  data: {}
) => {
  try {
    return await axios
      .post(`${URL}/create-time-table/${schoolID}/${classID}`, data)
      .then((res: any) => {
        return res?.data;
      });
  } catch (error) {
    return error;
  }
};

export const updateSchoolSubjectTeacher = async (
  schoolID: string,
  classID: string,
  data: {}
) => {
  try {
    return await axios
      .patch(`${URL}/update-subject-teacher/${schoolID}/${classID}`, {
        subjectTeacherName: data,
      })
      .then((res: any) => {
        return res?.data;
      });
  } catch (error) {
    return error;
  }
};

export const topSchoolStudent = async (schoolID: string) => {
  try {
    return await axios
      .get(`${URL}/view-school-top-student/${schoolID}`)
      .then((res: any) => {
        return res?.data;
      });
  } catch (error) {
    return error;
  }
};

export const classAttendance = async (classID: string) => {
  try {
    return await axios
      .get(`${URL}/viewing-class-attendance/${classID}`)
      .then((res: any) => {
        return res?.data;
      });
  } catch (error) {
    return error;
  }
};

export const studentAttendance = async (studentID: string) => {
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

export const readNoted = async (schoolID: string) => {
  try {
    return await axios
      .get(`${URL}/admin-view-lesson-note/${schoolID}`)
      .then((res: any) => {
        return res?.data;
      });
  } catch (error) {
    return error;
  }
};

export const approveNoted = async (schoolID: string, lessonID: string) => {
  try {
    return await axios
      .patch(`${URL}/approve-lesson-note/${schoolID}/${lessonID}`)
      .then((res: any) => {
        return res?.data;
      });
  } catch (error) {
    return error;
  }
};

export const createStore = async (schoolID: string, data: {}) => {
  try {
    const config: any = {
      "content-type": "multipart/form-data",
    };
    return await axios
      .post(`${URL}/create-store/${schoolID}/`, data, config)
      .then((res: any) => {
        return res?.data;
      });
  } catch (error) {
    return error;
  }
};

export const viewStore = async (schoolID: string) => {
  try {
    return await axios
      .get(`${URL}/view-store/${schoolID}/`)
      .then((res: any) => {
        return res?.data;
      });
  } catch (error) {
    return error;
  }
};

export const deleteArticle = async (
  schoolID: string,
  studentID: string,
  articleID: string
) => {
  try {
    return await axios
      .delete(
        `${URL}/delete-school-article/${schoolID}/${studentID}/${articleID}`
      )
      .then((res: any) => {
        return res?.data;
      });
  } catch (error) {
    return error;
  }
};

export const createGallaryRestrict = async (schoolID: string, data: {}) => {
  try {
    const config: any = {
      "content-type": "multipart/form-data",
    };
    return await axios
      .post(`${URL}/create-restrict-gallary/${schoolID}/`, data, config)
      .then((res: any) => {
        return res?.data;
      });
  } catch (error) {
    return error;
  }
};

export const createGallary = async (schoolID: string, data: {}) => {
  try {
    const config: any = {
      "content-type": "multipart/form-data",
    };
    return await axios
      .post(`${URL}/create-gallary/${schoolID}/`, data, config)
      .then((res: any) => {
        return res?.data;
      });
  } catch (error) {
    return error;
  }
};

export const viewGallary = async (schoolID: string) => {
  try {
    return await axios
      .get(`${URL}/view-gallary/${schoolID}/`)
      .then((res: any) => {
        return res?.data;
      });
  } catch (error) {
    return error;
  }
};

export const viewSchoolSession = async (schoolID: string) => {
  try {
    return await axios
      .get(`${URL}/view-school-session/${schoolID}`)
      .then((res: any) => {
        return res?.data;
      });
  } catch (error) {
    return error;
  }
};

export const viewSchoolSessionTerm = async (sessionID: any) => {
  try {
    return await axios
      .get(`${URL}/view-present-school-session/${sessionID}`)
      .then((res: any) => {
        console.log(sessionID);

        return res?.data;
      });
  } catch (error) {
    return error;
  }
};

export const verifyPayment1st = async (schoolID: string, studentID: string) => {
  try {
    return await axios
      .patch(`${URL}/update-student-fees-1st/${schoolID}/${studentID}`)
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

export const verifyPayment2nd = async (schoolID: string, studentID: string) => {
  try {
    return await axios
      .patch(`${URL}/update-student-fees-2nd/${schoolID}/${studentID}`)
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

export const verifyPayment3rd = async (schoolID: string, studentID: string) => {
  try {
    return await axios
      .patch(`${URL}/update-student-fees-3rd/${schoolID}/${studentID}`)
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

export const createNewSession = async (schoolID: string, data: {}) => {
  try {
    return await axios
      .post(`${URL}/create-new-school-session/${schoolID}`, data)
      .then((res: any) => {
        return res?.data;
      });
  } catch (error: any) {
    return error;
  }
};

export const viewComplains = async (schoolID: string) => {
  try {
    return await axios
      .get(`${URL}/view-school-complain/${schoolID}`)
      .then((res: any) => {
        return res?.data;
      });
  } catch (error) {
    return error;
  }
};

export const markSeenComplains = async (
  schoolID: string,
  complainID: string
) => {
  try {
    return await axios
      .patch(`${URL}/mark-seen/${schoolID}/${complainID}`)
      .then((res: any) => {
        return res?.data;
      });
  } catch (error) {
    return error;
  }
};

export const markResolveComplains = async (
  schoolID: string,
  complainID: string
) => {
  try {
    return await axios
      .patch(`${URL}/mark-resolve/${schoolID}/${complainID}`)
      .then((res: any) => {
        return res?.data;
      });
  } catch (error) {
    return error;
  }
};

export const updateAvatar = async (schoolID: string, data: any) => {
  try {
    const config: any = {
      "Content-Type": "multipart/form-data",
    };
    return await axios
      .patch(`${URL}/upload-school-avatar/${schoolID}`, data, config)
      .then((res: any) => {
        return res?.data;
      });
  } catch (error) {
    return error;
  }
};

export const createNewSessionTerm = async (sessionID: string, data: {}) => {
  try {
    return await axios
      .post(`${URL}/create-school-term/${sessionID}`, data)
      .then((res: any) => {
        return res?.data;
      });
  } catch (error: any) {
    return error;
  }
};

export const viewPresentSession = async (sessionID: string) => {
  try {
    return await axios
      .get(`${URL}/view-present-school-session/${sessionID}`)
      .then((res: any) => {
        return res?.data;
      });
  } catch (error: any) {
    return error;
  }
};

export const viewPresentSessionTerm = async (termID: string) => {
  try {
    return await axios
      .get(`${URL}/view-school-session/${termID}`)
      .then((res: any) => {
        return res;
      });
  } catch (error: any) {
    return error;
  }
};

export const createSessionTermHistory = async (termID: string) => {
  try {
    return await axios
      .get(`${URL}/view-school-session/${termID}`)
      .then((res: any) => {
        return res;
      });
  } catch (error: any) {
    return error;
  }
};

export const viewSessionTermHistory = async (termID: string) => {
  try {
    return await axios
      .get(`${URL}/view-school-term/${termID}`)
      .then((res: any) => {
        return res;
      });
  } catch (error: any) {
    return error;
  }
};
