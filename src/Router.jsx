import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Suplements } from "./pages/Suplements";
import { Contact } from "./pages/Contact";
import { About } from "./pages/About";
import { Imc } from "./pages/Imc";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/suplements" element={<Suplements/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/imc" element={<Imc/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;