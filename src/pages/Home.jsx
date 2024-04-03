import "../index.css"

export function Home() {
    return (
    <>
        {/* Main */}
        <main>
        <section className='welcome'>
            <div className='text'>
            <h1 className='text-welcome' style={{color: "#fff"}}>Welcome<h4 style={{color: "#4C89E5"}}>Adequate Nutrition</h4></h1>
                <div className='text-about'>
                <p className='about'>A <span style={{color: "#4C89E5"}}> Adequate Nutrition </span> é uma empresa dedicada ao bem-estar físico e nutricional, oferecendo produtos e serviços personalizados para auxiliar na alimentação, nutrição e musculação. Nossa equipe de especialistas está comprometida em fornecer orientação especializada e suporte contínuo para ajudar os clientes a alcançarem seus objetivos de saúde e fitness.</p>
                <div className='about-imc'>
                    <p>Para agendar uma consulta, preencha um questionário com seu peso, altura, idade e condicionamento fisíco. </p>
                    <button><a href="/imc">Clique aqui</a></button>
                </div>
                </div>
            </div>
        </section>

        <div className="linha-hr"><hr/></div>

        <section>
            <div className='sobre'>
            <img src="../public/img/img-about.svg" alt="" />
            <div className='part-about'>
                <h1>About</h1>
                <p>Fundada em 2016, por Rafael Carvalho a Adequate Nutrition tem o objetivo de proporcionar uma vida saudável e estável, nas áreas da saúde, nutrição e musculação. Nesse sentido, a ajuda que podemos disponibilar começa com os especialistas na parte de alimentação (Nutricionistas), seguindo de Pscicólogos e Terapeutas, e, por fim, o treino e acompanhamento completo com os Personal Trainers.</p>
            </div>
            </div>
        </section>

        <div className="linha-hr" ><hr /></div>

        <section className='suplementation'>
            <div className='banner-suplementation'>
            <h1>Supplementation</h1>
            </div>

            <div className="container-item">

            <div className='item'>
                <div className='descript-item'>
                <h1 className='gradient'>Whey Protein</h1>
                <p>O suplemento auxilia no ganho de força e massa muscular, na regeneração e produção das fibras musculares, na redução do nível de gordura corporal e na diminuição do tempo de recuperação entre os treinos.</p>
                </div>
                <img src="../public/img/img-whey.svg" alt="" />
            </div>

            <div className='item'>
                <img src="../public/img/img-creatine.svg" alt="" />
                <div className='descript-item'>
                <h1 className='gradient'>Creatine</h1>
                <p>Creatina é um composto de aminoácidos responsável por trazer diversos benefícios para o corpo humano. Estudos mostram que a creatina pode aumentar a massa muscular, força e desempenho no exercício, além de efeitos positivos em doenças neurológicas e outras doenças crônicas.</p>
                </div>
            </div>

            <div className='item'>
                <div className='descript-item'>
                <h1 className='gradient'>Hypercaloric</h1>
                <p>O hipercalórico é muito indicado para quem busca volume muscular e mais energia para enfrentar os treinos diários. Esse produto oferece uma boa união de nutrientes importantes para o organismo, como carboidratos, proteínas e gorduras.</p>
                </div>
                <img src="../public/img/img-hypercaloric.svg" alt="" />
            </div>

            </div>
        </section>
        </main>
        {/* /Main */}
    </>
    )
}