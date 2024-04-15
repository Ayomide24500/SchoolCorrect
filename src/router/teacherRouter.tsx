import React, { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
const CardReport = React.lazy(
  () => import("../pagesForTeachers/pages/Result/CardReport")
);

const ResultTermDetail = React.lazy(
  () => import("../pagesForTeachers/pages/class/ResultTermDetails")
);

const ResultHistryTrack = React.lazy(
  () => import("../pagesForTeachers/pages/class/ResultHistoryTrack")
);
const TeacherDashboard = React.lazy(
  () => import("../pagesForTeachers/TeacherDashboard")
);
const LoadingScreen = React.lazy(
  () => import("../components/static/LoadingScreen")
);
const TeacherLayout = React.lazy(
  () => import("../pagesForTeachers/components/layout/TeacherLayout")
);
const Schedule = React.lazy(
  () => import("../pagesForTeachers/pages/schedule/Schedule")
);

const MyClass = React.lazy(
  () => import("../pagesForTeachers/pages/class/MyClass")
);

const Subjects = React.lazy(
  () => import("../pagesForTeachers/pages/subject/Subjects")
);

const LessonNote = React.lazy(
  () => import("../pagesForTeachers/pages/lessonNote/LessonNote")
);

const WeekReport = React.lazy(
  () => import("../pagesForTeachers/pages/report/WeekReport")
);

const ViewStoreItems = React.lazy(
  () => import("../pagesForTeachers/pages/store/ViewStoreItems")
);

const StudentDetail = React.lazy(
  () => import("../pagesForTeachers/pages/class/StudentDetail")
);

const QuizSetupScreen = React.lazy(
  () => import("../pagesForTeachers/pages/quiz/QuizSetupScreen")
);
const QuizTestScreen = React.lazy(
  () => import("../pagesForTeachers/pages/quiz/QuizTestScreen")
);
const CreateQuiz = React.lazy(
  () => import("../pagesForTeachers/pages/quiz/CreateQuiz")
);
const CreateLesson = React.lazy(
  () => import("../pagesForTeachers/pages/lessonNote/CreateLessonNote")
);
const AttendanceScreen = React.lazy(
  () => import("../pagesForTeachers/pages/attendance/AttendanceScreen")
);
const ViewTeacherNote = React.lazy(
  () => import("../pagesForTeachers/pages/lessonNote/ViewTeacherNote")
);

const Article = React.lazy(
  () => import("../pagesForTeachers/pages/article/Article")
);
const GalleryScreen = React.lazy(
  () => import("../pagesForTeachers/pages/gallary/GallaryScreen")
);
const ViewReport = React.lazy(
  () => import("../pagesForTeachers/pages/complain/ViewReport")
);
const TableTag = React.lazy(
  () => import("../pagesForTeachers/pages/ReportCard/TableTag")
);

const SubjectGradeCard = React.lazy(
  () => import("../pagesForTeachers/pages/subject/SubjectGradeCard")
);

export const teacherRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<LoadingScreen />}>
        <TeacherLayout />
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <TeacherDashboard />
          </Suspense>
        ),
      },
      {
        index: true,
        path: "complain",
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <ViewReport />
          </Suspense>
        ),
      },
      {
        path: "/dashboard",
        index: true,
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <TeacherDashboard />
          </Suspense>
        ),
      },
      {
        path: "my-schedule",
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <Schedule />
          </Suspense>
        ),
      },
      {
        path: "my-class",
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <MyClass />
          </Suspense>
        ),
      },
      {
        path: "my-class/student-details/:studentID",
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <StudentDetail />
          </Suspense>
        ),
      },
      {
        path: "my-class/result-history",
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <ResultHistryTrack />
          </Suspense>
        ),
      },
      {
        path: "my-class/result-history/:session/:term",
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <ResultTermDetail />
          </Suspense>
        ),
      },
      {
        path: "subjects",
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <Subjects />
          </Suspense>
        ),
      },
      {
        path: "subjects/:subjectID",
        element: (
          <Suspense fallback={<LoadingScreen />}>
            {" "}
            <QuizSetupScreen />
          </Suspense>
        ),
      },
      {
        path: "attendance",
        element: (
          <Suspense fallback={<LoadingScreen />}>
            {" "}
            <AttendanceScreen />
          </Suspense>
        ),
      },
      {
        path: "quiz/details/:quizID",
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <QuizTestScreen />
          </Suspense>
        ),
      },

      {
        path: "create-quiz/:subjectID",
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <CreateQuiz />
          </Suspense>
        ),
      },
      {
        path: "lesson-note",
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <LessonNote />
          </Suspense>
        ),
      },
      {
        path: "table-tag",
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <TableTag />
          </Suspense>
        ),
      },
      {
        path: "report-card",
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <CardReport />
          </Suspense>
        ),
      },
      {
        path: "test-exam-grade/:subjectID",
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <SubjectGradeCard />
          </Suspense>
        ),
      },
      {
        path: "view-articles/:view",
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <Article />
          </Suspense>
        ),
      },

      {
        path: "view-articles",
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <Article />
          </Suspense>
        ),
      },
      {
        path: "lesson-note/:noteID",
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <ViewTeacherNote />
          </Suspense>
        ),
      },

      {
        path: "create-notes",
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <CreateLesson />
          </Suspense>
        ),
      },

      {
        path: "store",
        element: (
          <Suspense fallback={<LoadingScreen />}>
            {" "}
            <ViewStoreItems />
          </Suspense>
        ),
      },

      {
        path: "exams",
        element: (
          <Suspense fallback={<LoadingScreen />}>
            {" "}
            <QuizSetupScreen />
          </Suspense>
        ),
      },

      {
        path: "Gallary",
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <GalleryScreen />
          </Suspense>
        ),
      },

      {
        path: "week-report",
        element: (
          <Suspense fallback={<LoadingScreen />}>
            {" "}
            <WeekReport />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "*",
    element: (
      <Suspense fallback={<LoadingScreen />}>
        <LoadingScreen />
      </Suspense>
    ),
  },
]);
