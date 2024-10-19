import { Main } from "@/sections/Main";

import { CheckIn } from "@/pages/check-in";
import { createBrowserRouter } from "react-router-dom";
import { RoadMap } from "@/pages/road-map";
import { TourDetails } from "@/pages/TourDetails";
import { SignUp } from "@/pages/sign-up";
import { UserProfile } from "@/pages/Profile";
import { MinhasConquistas } from "@/pages/MinhasConquistas";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/details",
    element: <TourDetails />,
  },
  {
    path: "/check-in",
    element: <CheckIn />,
  },
  {
    path: "/road-map",
    element: <RoadMap/>
  },
  {
    path: "/sign-up",
    element: <SignUp/>
  },
  {
    path: "/profile",
    element: <UserProfile/>
  },
  {
    path: "/minhas-conquistas",
    element: <MinhasConquistas/>
  }
]);
