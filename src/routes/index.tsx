import { Main } from "@/sections/Main";
import { TourDetails } from "@/sections/TourDetails";
import {
  createBrowserRouter,
} from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
  },
  {
    path: "/details",
    element: <TourDetails/>
  }
]);