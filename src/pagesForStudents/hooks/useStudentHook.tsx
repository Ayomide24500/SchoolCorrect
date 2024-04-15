import useSWR from "swr";
import {
  classAssignment,
  classLessonNotes,
  getOneArticle,
  getOneStudentHistory,
  getSchoolArticle,
  lessonNotes,
  readClassInfo,
  readStudentCookie,
  viewClassTimetable,
  viewComplains,
  viewStduentDetail,
  viewStudentAttendance,
} from "../api/studentAPI";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const useStudentCookie = () => {
  const user = useSelector((state: any) => state.user);
  const { data: dataID } = useSWR(`api/read-student-cookie/`, () => {
    return readStudentCookie().then((res: any) => {
      return res.data;
    });
  });
  return { dataID: user?.id };
};

export const useStudentInfo = () => {
  const { dataID } = useStudentCookie();

  const { data: studentInfo } = useSWR(
    `api/view-student-info/${dataID}`,
    () => {
      return viewStduentDetail(dataID!).then((res: any) => {
        return res.data;
      });
    }
  );
  return { studentInfo };
};

export const useStudentInfoData = (studentID) => {
  const { data: studentInfoData } = useSWR(
    `api/view-student-info/${studentID}`,
    () => {
      return viewStduentDetail(studentID!).then((res: any) => {
        return res.data;
      });
    }
  );
  return { studentInfoData };
};

export const useStudentAttendant = (studentID: string) => {
  const { data: studentAttendance } = useSWR(
    `api/viewing-student-attendance/${studentID}`,
    () => {
      return viewStudentAttendance(studentID!).then((res: any) => {
        return res.data;
      });
    }
  );
  return { studentAttendance };
};

export const useAssignment = (classID: string) => {
  const { data: classAssignments } = useSWR(
    `api/viewing-class-assignment/${classID}`,
    () => {
      return classAssignment(classID!).then((res: any) => {
        return res.data;
      });
    }
  );
  return { classAssignments };
};

export const useLessonNote = (schoolID: string, staffID: string) => {
  const { data: lessonNote } = useSWR(
    `api/view-lession-note/${staffID}`,
    () => {
      return lessonNotes(schoolID, staffID).then((res: any) => {
        return res.data;
      });
    }
  );
  return { lessonNote };
};

export const useClassLessonNote = (classID: string) => {
  const { data: classLessonNote } = useSWR(
    `api/view-lession-note/${classID}`,
    () => {
      return classLessonNotes(classID).then((res: any) => {
        return res.data;
      });
    }
  );
  return { classLessonNote };
};

export const useReadMyClassInfo = () => {
  const [state, setState] = useState<any>({});
  const { studentInfo } = useStudentInfo();

  useEffect(() => {
    readClassInfo(studentInfo?.classAssigned).then((res: any) => {
      setState(res.data);
    });
  }, []);

  return { state };
};

export const useReadMyClassInfoData = (classAssigned: string) => {
  const [state, setState] = useState<any>({});

  useEffect(() => {
    readClassInfo(classAssigned).then((res: any) => {
      setState(res.data);
    });
  }, []);

  return { state };
};

export const useOneArticle = (studentID: string) => {
  const { data: oneArticle } = useSWR(
    `api/viewing-one-article/${studentID}`,
    () => {
      return getOneArticle(studentID!).then((res: any) => {
        return res.data;
      });
    }
  );
  return { oneArticle };
};

export const useSchoolArticle = (schoolID: string) => {
  const { data: allArticle } = useSWR(
    `api/viewing-all-article/${schoolID}`,
    () => {
      return getSchoolArticle(schoolID!).then((res: any) => {
        return res.data;
      });
    }
  );
  return { allArticle };
};

export const useComplain = (studentID: string) => {
  const { data: complainData } = useSWR(
    `api/view-student-complain/${studentID}`,
    () => {
      return viewComplains(studentID!).then((res) => {
        return res.data.complain;
      });
    }
  );
  return { complainData };
};

export const usePastQuestionHistory = (studentID: string) => {
  const { data: pastQuestionData } = useSWR(
    `api/view-question-history/${studentID}`,
    () => {
      return getOneStudentHistory(studentID!).then((res) => {
        return res.data;
      });
    }
  );
  return { pastQuestionData };
};

export const useClassTimeTableViewer = (classID: string) => {
  const { data: viewTimeTable } = useSWR(
    `api/view-time-table/${classID}`,
    () => {
      return viewClassTimetable(classID!).then((res) => {
        return res.data.timeTable;
      });
    }
  );
  return { viewTimeTable };
};
