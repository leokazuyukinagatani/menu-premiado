import { RouterProvider } from "react-router";
import "./App.css";
import { Toaster } from "./components/ui/toaster";

import { router } from "./routes";
import { Header } from "./sections/Header";

function App() {
    return (
        <div>
            <Header/>
            <RouterProvider router={router} />
            <Toaster />
        </div>
    );
}

export default App;
