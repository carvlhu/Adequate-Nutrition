import "./Css/About.css"; // Importa o arquivo de estilo CSS específico para este componente

export function About() { // Define o componente About como uma função React

    /* Retirando a barra de rolagem vetical */
    function unloadScrollBars() { // Define uma função para remover a barra de rolagem vertical
        document.documentElement.style.overflow = 'hidden'; // Esconde a barra de rolagem vertical do documento
        document.body.scroll = "no"; // Esconde a barra de rolagem vertical no Internet Explorer
    }
    unloadScrollBars(); // Chama a função para remover a barra de rolagem vertical

    return (
        <main> {/* Elemento principal do componente */}
            <section className="page-about"> {/* Seção de conteúdo sobre a página */}
                <div className="page-text-about"> {/* Div para o texto da página */}
                    <p>
                        {/* Parágrafo com o conteúdo sobre a empresa */}
                        Fundada em 2016, por Rafael Carvalho a Adequate Nutrition tem o objetivo de proporcionar uma vida saudável e estável, nas áreas da saúde, nutrição e musculação. Nesse sentido, a ajuda que podemos disponibilizar começa com os especialistas na parte de alimentação (Nutricionistas), seguindo de Psicólogos e Terapeutas, e, por fim, o treino e acompanhamento completo com os Personal Trainers.
                    </p>
                </div>
            </section>
        </main>
    )
}