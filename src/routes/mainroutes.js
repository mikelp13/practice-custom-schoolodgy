import { lazy } from "react";

export const mainRoutes = [
  {
    path: "/",
    name: "Home",
    exact: true,
    component: lazy(() => import("../pages/HomePage")),
  },
  {
    path: "/bootcamps",
    name: "BootCamps",
    exact: false,
    component: lazy(() => import("../pages/BootCampsPage")),
  },
  {
    path: "/courses",
    name: "Courses",
    exact: false,
    component: lazy(() => import("../pages/CoursePage")),
  },
  {
    path: "/students",
    name: "Students",
    exact: false,
    component: lazy(() => import("../pages/StudentsPage")),
  },
  {
    path: "/tutors",
    name: "Tutors",
    exact: false,
    component: lazy(() => import("../pages/TutorPage")),
  },
];
