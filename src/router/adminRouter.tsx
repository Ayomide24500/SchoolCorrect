import React, { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

const PersonalSetting = React.lazy(
  () => import("../pages/page/settings/PersonalSetting")
);
const PersonalInfoScreen = React.lazy(
  () => import("../pages/page/settings/PersonalInfoScreen")
);
const SettingScreen = React.lazy(
  () => import("../pages/page/settings/Setting")
);
const StudentDetail = React.lazy(
  () => import("../pages/page/student/StudentDetail")
);
const StaffDetail = React.lazy(() => import("../pages/page/staff/StaffDetail"));
const ViewStaffScreen = React.lazy(
  () => import("../pages/page/staff/ViewStaffScreen")
);
const ViewStudent = React.lazy(
  () => import("../pages/page/student/ViewStudent")
);
const ViewReport = React.lazy(() => import("../pages/page/report/ViewReport"));
const HomeView = React.lazy(() => import("../pages/home/HomeView"));
const HomeScreen = React.lazy(() => import("../pages/home/HomeScreen"));
const Layout = React.lazy(() => import("../components/layout/Layout"));
const MakeShift = React.lazy(() => import("./MakeShift"));

const PrivateRouter = React.lazy(() => import("./PrivateRouter"));
import { ErrorBoundary } from "react-error-boundary";
import SessionHistory from "../pages/page/ResultHistory/SessionHistory";
import ResultDetailClass from "../pages/page/ResultHistory/ResultDetailClass";

const StudentResult = React.lazy(
  () => import("../pages/page/ResultHistory/StudentResult")
);
const ReadClassStudentResult = React.lazy(
  () => import("../pages/page/ResultHistory/ReadClassStudentResult")
);
const Result = React.lazy(() => import("../pages/page/ResultHistory/Result"));
const LoadingScreen = React.lazy(
  () => import("../components/static/LoadingScreen")
);
const ThirdScreen = React.lazy(() => import("../pages/home/start/ThirdStep"));
const SecondStep = React.lazy(() => import("../pages/home/start/SecondStep"));
const ClassRoomScreen = React.lazy(
  () => import("../pages/page/class/ClassRoomScreen")
);
const ClassDetailScreen = React.lazy(
  () => import("../pages/page/class/ClassDetailScreen")
);
const ViewSubjects = React.lazy(
  () => import("../pages/page/subject/ViewSubject")
);
const AdminLessonNote = React.lazy(
  () => import("../pages/page/less/LessonNote")
);
const ViewTeacherNoteByAdmin = React.lazy(
  () => import("../pages/page/less/ViewTeacherNote")
);
const ViewSchoolSettings = React.lazy(
  () => import("../pages/page/settings/ViewSchoolSettings")
);
const SchoolTheme = React.lazy(
  () => import("../pages/page/settings/SchoolTheme")
);
const GallerySettings = React.lazy(
  () => import("../pages/page/settings/GallerySettings")
);
const GallaryScreen = React.lazy(
  () => import("../pages/page/gallary/GallaryScreen")
);
const ThemeScreen = React.lazy(
  () => import("../pages/page/settings/ThemeScreen")
);
const TestGallary = React.lazy(
  () => import("../pages/page/gallary/TestGallary")
);

const ViewStoreItems = React.lazy(
  () => import("../pages/page/store/ViewStoreItems")
);

export const adminRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<LoadingScreen />}>
        <PrivateRouter>
          <MakeShift />
        </PrivateRouter>
      </Suspense>
    ),
    children: [
      {
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <Layout />
          </Suspense>
        ),
        children: [
          {
            element: (
              <Suspense fallback={<LoadingScreen />}>
                <HomeScreen />
              </Suspense>
            ),
            children: [
              {
                index: true,
                element: (
                  <Suspense fallback={<LoadingScreen />}>
                    <HomeView />
                  </Suspense>
                ),
              },
              {
                index: true,
                path: "dashboard",
                element: (
                  <Suspense fallback={<LoadingScreen />}>
                    <HomeView />
                  </Suspense>
                ),
              },
            ],
          },

          {
            index: true,
            path: "test",
            element: (
              <Suspense fallback={<LoadingScreen />}>
                {" "}
                <TestGallary />
              </Suspense>
            ),
          },

          {
            index: true,
            path: "lesson-note",
            element: (
              <Suspense fallback={<LoadingScreen />}>
                <AdminLessonNote />
              </Suspense>
            ),
          },

          // {
          //   index: true,
          //   path: "result-history/:session/:term",
          //   element: (
          //     <Suspense fallback={<LoadingScreen />}>
          //       <Result />
          //     </Suspense>
          //   ),
          // },
          // {
          //   index: true,
          //   path: "result-history/:termID/student-result/:ID",
          //   element: (
          //     <Suspense fallback={<LoadingScreen />}>
          //       <StudentResult />
          //     </Suspense>
          //   ),
          // },
          {
            index: true,
            path: "result-history/:termID/:session/:term",
            element: (
              <Suspense fallback={<LoadingScreen />}>
                <Result />
              </Suspense>
            ),
          },

          {
            index: true,
            path: "result-history/:termID/:session/:term/student-result/:ID",
            element: (
              <Suspense fallback={<LoadingScreen />}>
                <ResultDetailClass />
              </Suspense>
            ),
          },
          // *****
          {
            index: true,
            path: "student-result/",
            element: (
              <Suspense fallback={<LoadingScreen />}>
                <StudentResult />
              </Suspense>
            ),
          },

          {
            index: true,
            path: "result-history",
            element: (
              <Suspense fallback={<LoadingScreen />}>
                <SessionHistory />
              </Suspense>
            ),
          },

          {
            index: true,
            path: "/lesson-note/:noteID",
            element: (
              <Suspense fallback={<LoadingScreen />}>
                <ViewTeacherNoteByAdmin />
              </Suspense>
            ),
          },

          {
            index: true,
            path: "subjects",
            element: (
              <Suspense fallback={<LoadingScreen />}>
                <ViewSubjects />
              </Suspense>
            ),
          },

          {
            index: true,
            path: "report",
            element: (
              <Suspense fallback={<LoadingScreen />}>
                <ViewReport />
              </Suspense>
            ),
          },
          {
            index: true,
            path: "view-students",
            element: (
              <Suspense fallback={<LoadingScreen />}>
                <ViewStudent />
              </Suspense>
            ),
          },
          {
            index: true,
            path: "view-staff",
            element: (
              <Suspense fallback={<LoadingScreen />}>
                <ViewStaffScreen />
              </Suspense>
            ),
          },
          {
            index: true,
            path: "class-room",
            element: (
              <Suspense fallback={<LoadingScreen />}>
                <ClassRoomScreen />
              </Suspense>
            ),
          },
          {
            index: true,
            path: "class-room/class-details/:classID",
            element: (
              <Suspense fallback={<LoadingScreen />}>
                <ClassDetailScreen />
              </Suspense>
            ),
          },
          {
            index: true,
            path: "view-staff/staff-details/:staffID",
            element: (
              <Suspense fallback={<LoadingScreen />}>
                {" "}
                <StaffDetail />
              </Suspense>
            ),
          },
          {
            index: true,
            path: "view-students/student-details/:studentID",
            element: (
              <Suspense fallback={<LoadingScreen />}>
                <StudentDetail />
              </Suspense>
            ),
          },

          {
            index: true,
            path: "settings",
            element: (
              <Suspense fallback={<LoadingScreen />}>
                <SettingScreen />
              </Suspense>
            ),
          },

          {
            index: true,
            path: "store",
            element: (
              <Suspense fallback={<LoadingScreen />}>
                <ViewStoreItems />
              </Suspense>
            ),
          },

          {
            index: true,
            path: "gallary",
            element: (
              <Suspense fallback={<LoadingScreen />}>
                <GallaryScreen />
              </Suspense>
            ),
          },

          {
            index: true,
            path: "class-students",
            element: (
              <Suspense fallback={<LoadingScreen />}>
                <ReadClassStudentResult />
              </Suspense>
            ),
          },

          {
            path: "my-personal-info",
            element: (
              <Suspense fallback={<LoadingScreen />}>
                {" "}
                <PersonalSetting />
              </Suspense>
            ),
            children: [
              {
                index: true,
                path: "info",
                element: (
                  <Suspense fallback={<LoadingScreen />}>
                    <PersonalInfoScreen />
                  </Suspense>
                ),
              },

              {
                index: true,
                path: "theme-settings",
                element: (
                  <Suspense fallback={<LoadingScreen />}>
                    <SchoolTheme />
                  </Suspense>
                ),
              },
              {
                index: true,
                path: "theme-setting",
                element: (
                  <Suspense fallback={<LoadingScreen />}>
                    <ThemeScreen />
                  </Suspense>
                ),
              },
            ],
          },

          {
            path: "school-info",
            element: (
              <Suspense fallback={<LoadingScreen />}>
                <ViewSchoolSettings />
              </Suspense>
            ),
            children: [
              {
                index: true,
                path: "view-school-settings",
                element: (
                  <Suspense fallback={<LoadingScreen />}>
                    <ViewSchoolSettings />
                  </Suspense>
                ),
              },
            ],
          },

          {
            index: true,
            path: "view-gallery",
            element: (
              <Suspense fallback={<LoadingScreen />}>
                <GallerySettings />
              </Suspense>
            ),
          },
        ],
      },
    ],
  },

  {
    path: "/step-two-data",
    element: (
      <Suspense fallback={<LoadingScreen />}>
        <ThirdScreen />
      </Suspense>
    ),
  },

  {
    path: "/step-third-data",
    element: (
      <Suspense fallback={<LoadingScreen />}>
        <SecondStep />
      </Suspense>
    ),
  },

  {
    path: "*",
    element: <LoadingScreen />,
  },
]);
