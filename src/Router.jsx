import { BrowserRouter, Route, Routes } from "react-router-dom"; // Importa os componentes necessários do react-router-dom
import { Home } from "./pages/Home"; // Importa o componente Home da pasta pages
import { Suplements } from "./pages/Suplements"; // Importa o componente Suplements da pasta pages
import { Contact } from "./pages/Contact"; // Importa o componente Contact da pasta pages
import { About } from "./pages/About"; // Importa o componente About da pasta pages
import { Imc } from "./pages/Imc"; // Importa o componente Imc da pasta pages

const Router = () => { // Define o componente Router como uma função

    return (
        <BrowserRouter> {/* Componente que envolve a aplicação e fornece o roteamento */}
            <Routes> {/* Componente Routes usado para definir as rotas da aplicação */}
                {/* Define as rotas e os componentes correspondentes */}
                <Route path="/" element={<Home/>}/> {/* Rota da página inicial, renderiza o componente Home */}
                <Route path="/suplements" element={<Suplements/>}/> {/* Rota da página de suplementos, renderiza o componente Suplements */}
                <Route path="/contact" element={<Contact/>}/> {/* Rota da página de contato, renderiza o componente Contact */}
                <Route path="/about" element={<About/>}/> {/* Rota da página 'Sobre', renderiza o componente About */}
                <Route path="/imc" element={<Imc/>}/> {/* Rota da página de cálculo de IMC, renderiza o componente Imc */}
            </Routes>
        </BrowserRouter>
    )
}

export default Router; // Exporta o componente Router para ser utilizado em outros lugares da aplicação
