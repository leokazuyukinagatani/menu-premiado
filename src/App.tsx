import { RouterProvider } from "react-router";
import "./App.css";
import { Toaster } from "./components/ui/toaster";

import { router } from "./routes";

function App() {
    return (
        <div>
            <RouterProvider router={router} />
            <Toaster />
        </div>
    );
}

export default App;
