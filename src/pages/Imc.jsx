import { useState } from "react" 
import "./Css/Imc.css"

const fpeso = (peso, setPeso) => {
    return (
        <div>
            <label>Peso: <input placeholder="Digite seu peso" type="text" value={peso} onChange={(entrada) => {setPeso(entrada.target.value)}} /></label>
        </div>
    )
}

const faltura = (altura, setAltura) => {
    return (
        <div>
            <label>Altura: <input placeholder="Digite sua altura" type="text" value={altura} onChange={(entrada) => {setAltura(entrada.target.value)}} /></label>
        </div>
    )
}

const fcalcular = (peso, altura, setResultado) => {
        const calc=() => {
            setResultado(peso / (altura * altura))
        }

        const calclimpar=() => {
            setResultado(0);
        }
    
        return (
            <div>
                <button onClick={calc} >Calcular</button>
                <button onClick={calclimpar}>Limpar</button>
            </div>
        )
}

const fresultado = (resultado) => {
    return (
        <div>
            <p>Seu IMC é igual á {resultado.toFixed(2)}</p>
        </div>
    )
}

export function Imc() {

    /* Retirando a barra de rolagem vetical */
    function unloadScrollBars() {
        document.documentElement.style.overflow = 'hidden';
        document.body.scroll = "no"; // IE
    }
    unloadScrollBars();

    const [peso, setPeso] = useState(0)
    const [altura, setAltura] = useState(0)
    const [resultado, setResultado] = useState(0)

    const condicaoImc = (resultado) => {

        if (resultado === 0) {
            return (
                <p></p>
            )
        } else if (resultado < 18.5) {
            return (
                <p>Você está abaixo do Peso adequado</p>
            )
        } else if (resultado < 24.9) {
            return (
                <p>Você está com o Peso adequado</p>
            )
        } else if (resultado < 29.9) {
            return (
                <p>Você está acima do Peso adequado</p>
            )
        } else if (resultado < 34.9) {
            return (
                <p>Você está no primeiro nível de obesidade</p>
            )
        } else if (resultado < 39.9) {
            return (
                <p>Você está no segundo nível de obesidade</p>
            )
        } else if (resultado > 39.9) {
            return (
                <p>Você está em obesidade mórbida</p>
            )
        }
    }

    return (

        <>
        <section className="section-IMC">
            <div className="section-info-IMC">
                <h1>Cálculo IMC</h1>
                {fpeso(peso, setPeso)}
                {faltura(altura, setAltura)}
                {fcalcular(peso, altura, setResultado)}
                {fresultado(resultado)}
                {condicaoImc(resultado)}
            </div>
        </section>
        </>
    )
}