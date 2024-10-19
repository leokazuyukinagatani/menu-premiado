import { RouterProvider } from "react-router";
import "./App.css";
import { Toaster } from "./components/ui/toaster";

import { Main } from "./sections/Main";
import { router } from "./routes";

function App() {
    return (
        <div>
            <RouterProvider router={router} />
            <Main />
            <Toaster />
        </div>
    );
}

export default App;
