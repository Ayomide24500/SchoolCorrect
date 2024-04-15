import useSWR from "swr";
import {
  classAssignment,
  classAttendance,
  lessonNote,
  readClassInfoStudent,
  readClassInfoSubject,
  readQuiz,
  readSubjectDetail,
  readSubjectQuiz,
  readTeacherCookie,
  readTeacherSchedule,
  viewClassAcademicHistory,
  viewComplains,
  viewStudentGrade,
  viewTeacherDetail,
} from "../api/teachersAPI";
import {
  getSchoolAnncoement,
  getSchoolEvent,
} from "../../pages/api/schoolAPIs";
import { useSelector } from "react-redux";

export const useTeacherCookie = () => {
  const user = useSelector((state: any) => state.user);
  const { data: dataID } = useSWR(`api/read-teacher-cookie/`, () => {
    return readTeacherCookie().then((res: any) => {
      return res.data;
    });
  });
  return { dataID: user?.id };
};

export const useTeacherDetail = (teacherID: string) => {
  const { data: teacherDetail } = useSWR(
    `api/view-teacher-detail/${teacherID}`,
    () => {
      return viewTeacherDetail(teacherID!).then((res: any) => {
        return res.data;
      });
    }
  );
  return { teacherDetail };
};

export const useTeacherInfo = () => {
  const { dataID } = useTeacherCookie();

  const { data: teacherInfo } = useSWR(
    `api/view-teacher-detail/${dataID}`,
    () => {
      return viewTeacherDetail(dataID!).then((res: any) => {
        return res.data;
      });
    }
  );
  return { teacherInfo };
};

export const useClassSubject = (classID: string) => {
  const { data: subjectData } = useSWR(
    `api/view-teacher-detail/${classID}`,
    () => {
      return readClassInfoSubject(classID!).then((res: any) => {
        return res.data;
      });
    }
  );
  return { subjectData };
};

export const useClassTimeTable = (classID: string) => {
  const { data: timetableData } = useSWR(
    `api/view-teacher-detail/${classID}`,
    () => {
      return readClassInfoSubject(classID!).then((res: any) => {
        return res.data;
      });
    }
  );
  return { timetableData };
};

export const useTeacherSchedule = (teacherID: string) => {
  const { data: teacherSchedule } = useSWR(
    `api/view-teacher-schedule/${teacherID}`,
    () => {
      return readTeacherSchedule(teacherID!).then((res: any) => {
        return res.data;
      });
    }
  );
  return { teacherSchedule };
};

export const useTeacherStudent = (classID: string) => {
  const { data: teacherSchedule } = useSWR(
    `api/view-teacher-schedule/${classID}`,
    () => {
      return readTeacherSchedule(classID!).then((res: any) => {
        return res.data;
      });
    }
  );
  return { teacherSchedule };
};

export const useClassStudent = (classID: string) => {
  const { data: classStudents } = useSWR(
    `api/view-all-class-students/${classID}`,
    () => {
      return readClassInfoStudent(classID!).then((res: any) => {
        return res.data;
      });
    }
  );
  return { classStudents };
};

export const useSujectInfo = (subjectID: string) => {
  const { data: subjectInfo } = useSWR(
    `api/view-subject-info/${subjectID}`,
    () => {
      return readSubjectDetail(subjectID!).then((res: any) => {
        return res.data;
      });
    }
  );
  return { subjectInfo };
};

export const useSujectQuiz = (subjectID: string) => {
  const { data: subjectQuiz } = useSWR(
    `api/view-subject-quiz/${subjectID}`,
    () => {
      return readSubjectQuiz(subjectID!).then((res: any) => {
        return res.data;
      });
    }
  );
  return { subjectQuiz };
};

export const useQuiz = (quizID: string) => {
  const { data: quizData } = useSWR(`api/view-quiz/${quizID}`, () => {
    return readQuiz(quizID!).then((res: any) => {
      return res.data;
    });
  });
  return { quizData };
};

export const useAttendance = (classID: string) => {
  const { data: attendance } = useSWR(
    `api/view-class-attendance/${classID}`,
    () => {
      return classAttendance(classID!).then((res: any) => {
        return res.data;
      });
    }
    // { refreshInterval: 1000 }
  );
  return { attendance };
};

export const useSchoolAnnouncement = (schoolID: string) => {
  const { data: schoolAnnouncement } = useSWR(
    `api/view-announcement/${schoolID}`,
    () => {
      return getSchoolAnncoement(schoolID!).then((res) => {
        return res.data;
      });
    }
  );
  return { schoolAnnouncement };
};

export const useSchoolEvent = (schoolID: string) => {
  const { data: schoolEvent } = useSWR(`api/view-event/${schoolID}`, () => {
    return getSchoolEvent(schoolID!).then((res) => {
      return res.data;
    });
  });
  return { schoolEvent };
};

export const useSubjectAssignment = (subjectID: string) => {
  const { data: subjectAssignment } = useSWR(
    `api/view-subject-assignment/${subjectID}`,
    () => {
      return classAssignment(subjectID!).then((res) => {
        return res.data;
      });
    }
  );
  return { subjectAssignment };
};

export const useLessonNote = (lessonID: string) => {
  const { data: lessonNoteData } = useSWR(
    `api/view-subject-assignment/${lessonID}`,
    () => {
      return lessonNote(lessonID!).then((res) => {
        return res.data;
      });
    }
  );
  return { lessonNoteData };
};

export const useComplain = (teacherID: string) => {
  const { data: complainData } = useSWR(
    `api/view-teacher-complain/${teacherID}`,
    () => {
      return viewComplains(teacherID!).then((res) => {
        return res.data.complain;
      });
    }
  );
  return { complainData };
};

export const useStudentGrade = (studentID: string) => {
  const { data: gradeData } = useSWR(
    `api/student-report-card/${studentID}`,
    () => {
      return viewStudentGrade(studentID!).then((res) => {
        return res.data;
      });
    }
  );
  return { gradeData };
};

export const useClassAcademicHistory = (classID: string) => {
  const { data: classAcademicHistory } = useSWR(
    `api/view-class-result-history/${classID}`,
    () => {
      return viewClassAcademicHistory(classID!).then((res) => {
        return res.data;
      });
    }
  );
  return { classAcademicHistory };
};
