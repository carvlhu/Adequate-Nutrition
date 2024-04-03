import "./Css/About.css"

export function About() {

    /* Retirando a barra de rolagem vetical */
    function unloadScrollBars() {
        document.documentElement.style.overflow = 'hidden';
        document.body.scroll = "no"; // IE
    }
    unloadScrollBars();

    return (
        <main>
            <section className="page-about"> 
                <div className="page-text-about">
                    <p>
                    Fundada em 2016, por Rafael Carvalho a Adequate Nutrition tem o objetivo de proporcionar uma vida saudável e estável, nas áreas da saúde, nutrição e musculação. Nesse sentido, a ajuda que podemos disponibilar começa com os especialistas na parte de alimentação (Nutricionistas), seguindo de Pscicólogos e Terapeutas, e, por fim, o treino e acompanhamento completo com os Personal Trainers.
                    </p>
                </div>
            </section>
        </main>
    )
}