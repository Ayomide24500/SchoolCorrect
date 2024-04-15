import useSWR, { mutate } from "swr";
import {
  classAttendance,
  getClassSubjects,
  getClassTimeTable,
  getClassroom,
  getSchoolAnncoement,
  getSchoolClassroom,
  getSchoolCookie,
  getSchoolEvent,
  getSchoolStudentDetail,
  getSchoolStudents,
  readNoted,
  readSchool,
  registerSchool,
  studentAttendance,
  topSchoolStudent,
  updateClassroomTeacher,
  verifyPayment1st,
  viewComplains,
  viewGallary,
  viewPresentSession,
  viewSchoolByName,
  viewSchoolSession,
  viewSchoolSessionTerm,
  viewSchoolSubjects,
  viewSchoolTeacher,
  viewSessionTermHistory,
  viewStore,
} from "../api/schoolAPIs";
import { viewTeacherDetail } from "../../pagesForTeachers/api/teachersAPI";
import { useSelector } from "react-redux";
import { useEffect } from "react";

export const useSchoolRegister = (reader: any) => {
  const { mutate } = useSWR("api/register-school", () => {
    registerSchool(reader);
  });

  return { mutate };
};

export const useSchool = (schoolID: string) => {
  const { data } = useSWR(`api/view-school${schoolID}`, () => {
    readSchool(schoolID);
  });

  return { data };
};

export const useSchoolCookie = () => {
  const user = useSelector((state: any) => state.user);

  const { data: dataID } = useSWR(`api/read-school-cookie/`, () => {
    return getSchoolCookie().then((res) => {
      return res.data;
    });
  });

  return { dataID: user?.id };
};

export const useSchoolData = () => {
  const { dataID } = useSchoolCookie();
  const user = useSelector((state: any) => state.user);

  const { data, isLoading } = useSWR(`api/view-school/${user?.id}`, () => {
    return readSchool(dataID!).then((res) => {
      return res.data;
    });
  });
  return { data, isLoading };
};

export const useSchoolDataByName = (schoolName: string) => {
  const { data: schoolInfo } = useSWR(`api/view-school/${schoolName}`, () => {
    return viewSchoolByName(schoolName!).then((res) => {
      return res.data;
    });
  });
  return { schoolInfo };
};

export const useSchoolClassRM = () => {
  const { dataID } = useSchoolCookie();
  const { data: schoolClassroom, mutate } = useSWR(
    `api/view-classrooms/`,
    () => {
      return getSchoolClassroom(dataID!).then((res) => {
        return res.data;
      });
    }

    // { refreshInterval: 2000 }
  );
  return { schoolClassroom, mutate };
};

export const useSchoolClassRMTeacherUpdate = (classID: string, data: {}) => {
  const { dataID } = useSchoolCookie();
  const user = useSelector((state: any) => state.user);
  const { data: schoolClassroom } = useSWR(
    `api/update-classrooms-teacher/${user?.id}/${classID}`,
    () => {
      return updateClassroomTeacher(dataID!, classID, data).then((res) => {
        return res.data;
      });
    }
  );
  return { schoolClassroom };
};

export const useSchoolClassRMDetail = (classID: string) => {
  const { data: classroom } = useSWR(`api/view-classrooms/${classID}`, () => {
    return getClassroom(classID!).then((res) => {
      return res.data;
    });
  });
  return { classroom };
};

export const useSchoolAnnouncement = () => {
  const { dataID } = useSchoolCookie();
  const { data: schoolAnnouncement } = useSWR(
    `api/view-announcement/${dataID}`,
    () => {
      return getSchoolAnncoement(dataID!).then((res) => {
        return res.data;
      });
    }
  );
  return { schoolAnnouncement };
};

export const useSchoolEvent = () => {
  const { dataID } = useSchoolCookie();
  const { data: schoolEvent } = useSWR(`api/view-event/${dataID}`, () => {
    return getSchoolEvent(dataID!).then((res) => {
      return res.data;
    });
  });
  return { schoolEvent };
};

export const useSchoolTeacher = () => {
  const { dataID } = useSchoolCookie();

  const { data: schoolTeacher } = useSWR(
    `api/view-school-teacher/${dataID}`,
    () => {
      return viewSchoolTeacher(dataID!).then((res) => {
        return res.data;
      });
    }
  );
  return { schoolTeacher };
};

export const useSchoolSubject = () => {
  const { dataID } = useSchoolCookie();

  const { data: schoolSubject } = useSWR(
    `api/view-school-subject/${dataID}`,
    () => {
      return viewSchoolSubjects(dataID!).then((res) => {
        return res.data;
      });
    }
  );
  return { schoolSubject };
};

export const useSchoolTeacherDetail = (teacherID: string) => {
  const { data: schoolSubjectTeacherDetail } = useSWR(
    `api/view-school-subject-teacher/${teacherID}`,
    () => {
      return viewTeacherDetail(teacherID!).then((res: any) => {
        return res.data;
      });
    }
  );
  return { schoolSubjectTeacherDetail };
};

export const useClassSubjects = (classID: string) => {
  const { data: readSubject } = useSWR(`api/view-class-info/${classID}`, () => {
    return getClassSubjects(classID!).then((res) => {
      return res?.data?.classSubjects;
    });
  });

  return { readSubject };
};

export const useClassTimeTable = (classID: string) => {
  const { data: timetbale } = useSWR(
    `api/view-time-table/${classID}`,
    () => {
      return getClassTimeTable(classID!).then((res) => {
        return res;
      });
    }
    // { refreshInterval: 10000 }
  );

  return { timetbale };
};

export const useSchoolStudents = (schoolID: string) => {
  const { data: students } = useSWR(
    `api/read-student/${schoolID}`,
    () => {
      return getSchoolStudents(schoolID!).then((res) => {
        return res;
      });
    }
    // { refreshInterval: 10000 }
  );

  return { students };
};

export const useSchoolStudentDetail = (studentID: string) => {
  const { data: studentDetails } = useSWR(
    `api/read-student-info/${studentID}`,
    () => {
      return getSchoolStudentDetail(studentID!).then((res) => {
        return res;
      });
    }
    // { refreshInterval: 10000 }
  );

  return { studentDetails };
};

export const useTopSchoolStudent = (studentID: string) => {
  const { data: perform } = useSWR(
    `api/view-school-top-student/${studentID}`,
    () => {
      return topSchoolStudent(studentID!).then((res) => {
        return res;
      });
    }
    // { refreshInterval: 10000 }
  );

  return { perform };
};

export const useClassAttendance = (classID: string) => {
  const { data: mainAttendance } = useSWR(
    `api/view-class-attendance/${classID}`,
    () => {
      return classAttendance(classID!).then((res) => {
        return res;
      });
    }
  );

  return { mainAttendance };
};

export const useStudentAttendance = (studentID: string) => {
  const { data: mainStudentAttendance } = useSWR(
    `api/view-student-attendance/${studentID}`,
    () => {
      return studentAttendance(studentID!).then((res) => {
        return res;
      });
    }
  );

  return { mainStudentAttendance };
};

export const useNotes = (schoolID: string) => {
  const { data: notes } = useSWR(`api/view-lesson-notes/${schoolID}`, () => {
    return readNoted(schoolID!).then((res) => {
      return res;
    });
  });

  return { notes };
};

export const useStore = (schoolID: string) => {
  const { data: store } = useSWR(`api/view-store/${schoolID}`, () => {
    return viewStore(schoolID!).then((res) => {
      return res;
    });
  });

  return { store };
};

export const useGallary = (schoolID: string) => {
  const { data: gallary } = useSWR(`api/view-gallary/${schoolID}`, () => {
    return viewGallary(schoolID!).then((res) => {
      return res;
    });
  });

  return { gallary };
};
export const useSchoolSessionData = (schoolID: string) => {
  const { data: schoolInfo, isLoading: loading } = useSWR(
    `api/view-school-session/${schoolID}`,
    () => {
      return viewSchoolSession(schoolID).then((res: any) => {
        return res?.data;
      });
    }
  );
  return { schoolInfo, loading };
};

let liveQueries = new Set();

export function trackLiveQueries(useSWRNext: any) {
  return (key: any, fetcher: any, config: any) => {
    const swr = useSWRNext(key, fetcher, config);

    useEffect(() => {
      liveQueries.add(key);

      return () => {
        liveQueries.delete(key);
      };
    }, [key]);

    return swr;
  };
}

export async function revalidateLiveQueries() {
  let promises = [...liveQueries.values()].map((key: any) => mutate(key));

  return Promise.all(promises);
}

export const useComplain = (schoolID: string) => {
  const { data: complainData } = useSWR(
    `api/view-school-complain/${schoolID}`,
    () => {
      return viewComplains(schoolID!).then((res) => {
        return res.data.complain;
      });
    }
  );
  return { complainData };
};

export const useViewSingleSession = (sessionID: string) => {
  const { data: sessionData } = useSWR(
    `api/view-present-school-session/${sessionID}`,
    () => {
      return viewPresentSession(sessionID!).then((res) => {
        return res.data;
      });
    }
  );
  return { sessionData };
};

export const useViewSessionTerm = (termID: string) => {
  const { data: sessionTermData } = useSWR(
    `api/view-school-session/${termID}`,
    () => {
      return viewSessionTermHistory(termID!).then((res) => {
        return res.data;
      });
    }
  );
  return { sessionTermData };
};
