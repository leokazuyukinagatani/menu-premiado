import "./App.css";
import { Footer } from "./sections/Footer";

import { Header } from "./sections/Header";
import { Hero } from "./sections/Hero";

function App() {
    return (
        <main className="overflow-hidden">

            <Header />
            <Hero />
            <Footer />
        </main>
    );
}

export default App;
