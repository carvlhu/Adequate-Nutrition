import { useState } from "react"; // Importa o hook useState do React para adicionar estado ao componente
import "./Css/Imc.css"; // Importa o arquivo de estilo CSS para este componente

// Componente funcional para o campo de peso
const fpeso = (peso, setPeso) => {
    return (
        <div>
            <label>Peso: (KG)<input placeholder="Digite seu peso" type="text" value={peso} onChange={(entrada) => {setPeso(entrada.target.value)}} /></label>
        </div>
    )
}

// Componente funcional para o campo de altura
const faltura = (altura, setAltura) => {
    return (
        <div>
            <label>Altura: (M)<input placeholder="Digite sua altura" type="text" value={altura} onChange={(entrada) => {setAltura(entrada.target.value)}} /></label>
        </div>
    )
}

// Componente funcional para os botões de calcular e limpar
const fcalcular = (peso, altura, setResultado) => {
    const calc = () => {
        setResultado(peso / (altura * altura)); // Calcula o IMC e atualiza o estado 'resultado'
    }

    const calclimpar = () => {
        setResultado(0); // Limpa o estado 'resultado'
    }

    return (
        <div>
            <button onClick={calc}>Calcular</button>
            <button onClick={calclimpar}>Limpar</button>
        </div>
    )
}

// Componente funcional para exibir o resultado do IMC
const fresultado = (resultado) => {
    return (
        <div>
            <p>Seu IMC é igual a {resultado.toFixed(2)}</p> {/* Exibe o IMC com duas casas decimais */}
        </div>
    )
}

export function Imc() { // Define o componente Imc como uma função React

    /* Retirando a barra de rolagem vetical */
    function unloadScrollBars() { // Define uma função para remover a barra de rolagem vertical
        document.documentElement.style.overflow = 'hidden'; // Esconde a barra de rolagem vertical do documento
        document.body.scroll = "no"; // Esconde a barra de rolagem vertical no Internet Explorer
    }
    unloadScrollBars(); // Chama a função para remover a barra de rolagem vertical

    const [peso, setPeso] = useState(0); // Define o estado 'peso' e a função 'setPeso' para atualizá-lo, inicializado como 0
    const [altura, setAltura] = useState(0); // Define o estado 'altura' e a função 'setAltura' para atualizá-lo, inicializado como 0
    const [resultado, setResultado] = useState(0); // Define o estado 'resultado' e a função 'setResultado' para atualizá-lo, inicializado como 0

    // Função para definir a condição do IMC com base no resultado
    const condicaoImc = (resultado) => {
        if (resultado === 0) {
            return (<p></p>); // Retorna um parágrafo vazio se o resultado for 0
        } else if (resultado < 18.5) {
            return (<p>Você está abaixo do peso adequado</p>); // Retorna uma mensagem se o resultado for menor que 18.5
        } else if (resultado < 24.9) {
            return (<p>Você está com o peso adequado</p>); // Retorna uma mensagem se o resultado estiver entre 18.5 e 24.9
        } else if (resultado < 29.9) {
            return (<p>Você está acima do peso adequado</p>); // Retorna uma mensagem se o resultado estiver entre 24.9 e 29.9
        } else if (resultado < 34.9) {
            return (<p>Você está no primeiro nível de obesidade</p>); // Retorna uma mensagem se o resultado estiver entre 29.9 e 34.9
        } else if (resultado < 39.9) {
            return (<p>Você está no segundo nível de obesidade</p>); // Retorna uma mensagem se o resultado estiver entre 34.9 e 39.9
        } else if (resultado > 39.9) {
            return (<p>Você está em obesidade mórbida</p>); // Retorna uma mensagem se o resultado for maior que 39.9
        }
    }

    return (
        <> {/* Fragmento React usado para englobar múltiplos elementos sem adicionar um nó extra ao DOM */}
        <section className="section-IMC"> {/* Define a seção principal do componente */}
            <div className="section-info-IMC"> {/* Define a seção de informações do IMC */}
                <h1>Cálculo IMC</h1> {/* Título da seção */}
                {fpeso(peso, setPeso)} {/* Renderiza o campo de peso */}
                {faltura(altura, setAltura)} {/* Renderiza o campo de altura */}
                {fcalcular(peso, altura, setResultado)} {/* Renderiza os botões de calcular e limpar */}
                {fresultado(resultado)} {/* Renderiza o resultado do IMC */}
                {condicaoImc(resultado)} {/* Renderiza a condição do IMC */}
            </div>
        </section>
        </>
    )
}