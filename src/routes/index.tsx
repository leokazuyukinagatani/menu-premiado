import { Main } from "@/sections/Main";
import { TourDetails } from "@/sections/TourDetails";
import { CheckIn } from "@/pages/check-in";
import {
  createBrowserRouter,
} from "react-router-dom";
import { SignUp } from "@/pages/sign-up";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
  },
  {
    path: "/details",
    element: <TourDetails/>
  }
  ,
  {
    path: "/check-in",
    element: <CheckIn/>
  },
  {
    path: "/sing-up",
    element: <SignUp/>
  }
]);