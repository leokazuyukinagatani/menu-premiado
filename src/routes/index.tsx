import { Main } from "@/sections/Main";

import { CheckIn } from "@/pages/check-in";
import { createBrowserRouter } from "react-router-dom";
import { RoadMap } from "@/pages/road-map";
import { TourDetails } from "@/pages/TourDetails";

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
    element: <RoadMap />,
  },
]);
