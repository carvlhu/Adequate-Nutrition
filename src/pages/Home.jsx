import "../index.css"; // Importa o arquivo de estilo global

export function Home() { // Define o componente Home como uma função React

    return (
        <> {/* Fragmento React usado para englobar múltiplos elementos sem adicionar um nó extra ao DOM */}

            {/* Main */}
            <main>
                {/* Seção de boas-vindas */}
                <section className='welcome'>
                    <div className='text'>
                        <h1 className='text-welcome' style={{color: "#fff"}}>Welcome<h4 style={{color: "#4C89E5"}}>Adequate Nutrition</h4></h1>
                        <div className='text-about'>
                            {/* Descrição sobre a empresa */}
                            <p className='about'>A <span style={{color: "#4C89E5"}}> Adequate Nutrition </span> é uma empresa dedicada ao bem-estar físico e nutricional, oferecendo produtos e serviços personalizados para auxiliar na alimentação, nutrição e musculação. Nossa equipe de especialistas está comprometida em fornecer orientação especializada e suporte contínuo para ajudar os clientes a alcançarem seus objetivos de saúde e fitness.</p>
                            {/* Informações sobre o IMC */}
                            <div className='about-imc'>
                                <p>Para agendar uma consulta, preencha um questionário com seu peso, altura, idade e condicionamento físico. </p>
                                <button><a href="/imc">Clique aqui</a></button> {/* Botão para redirecionar para a página de IMC */}
                            </div>
                        </div>
                    </div>
                </section>

                <div className="linha-hr"><hr/></div> {/* Linha horizontal para separar seções */}

                {/* Seção 'About' */}
                <section>
                    <div className='sobre'>
                        <img src="../public/img/img-about.svg" alt="" /> {/* Imagem para ilustrar a seção */}
                        <div className='part-about'>
                            <h1>About</h1> {/* Título da seção */}
                            <p>Fundada em 2016, por Rafael Carvalho a Adequate Nutrition tem o objetivo de proporcionar uma vida saudável e estável, nas áreas da saúde, nutrição e musculação. Nesse sentido, a ajuda que podemos disponibilizar começa com os especialistas na parte de alimentação (Nutricionistas), seguindo de Psicólogos e Terapeutas, e, por fim, o treino e acompanhamento completo com os Personal Trainers.</p> {/* Descrição sobre a empresa */}
                        </div>
                    </div>
                </section>

                <div className="linha-hr" ><hr /></div> {/* Linha horizontal para separar seções */}

                {/* Seção de suplementação */}
                <section className='suplementation'>
                    <div className='banner-suplementation'>
                        <h1>Supplementation</h1> {/* Título da seção */}
                    </div>

                    <div className="container-item">
                        {/* Item de suplemento: Whey Protein */}
                        <div className='item'>
                            <div className='descript-item'>
                                <h1 className='gradient'>Whey Protein</h1> {/* Nome do suplemento */}
                                <p>O suplemento auxilia no ganho de força e massa muscular, na regeneração e produção das fibras musculares, na redução do nível de gordura corporal e na diminuição do tempo de recuperação entre os treinos.</p> {/* Descrição do suplemento */}
                            </div>
                            <img src="../public/img/img-whey.svg" alt="" /> {/* Imagem do suplemento */}
                        </div>

                        {/* Item de suplemento: Creatine */}
                        <div className='item'>
                            <img src="../public/img/img-creatine.svg" alt="" /> {/* Imagem do suplemento */}
                            <div className='descript-item'>
                                <h1 className='gradient'>Creatine</h1> {/* Nome do suplemento */}
                                <p>Creatina é um composto de aminoácidos responsável por trazer diversos benefícios para o corpo humano. Estudos mostram que a creatina pode aumentar a massa muscular, força e desempenho no exercício, além de efeitos positivos em doenças neurológicas e outras doenças crônicas.</p> {/* Descrição do suplemento */}
                            </div>
                        </div>

                        {/* Item de suplemento: Hypercaloric */}
                        <div className='item'>
                            <div className='descript-item'>
                                <h1 className='gradient'>Hypercaloric</h1> {/* Nome do suplemento */}
                                <p>O hipercalórico é muito indicado para quem busca volume muscular e mais energia para enfrentar os treinos diários. Esse produto oferece uma boa união de nutrientes importantes para o organismo, como carboidratos, proteínas e gorduras.</p> {/* Descrição do suplemento */}
                            </div>
                            <img src="../public/img/img-hypercaloric.svg" alt="" /> {/* Imagem do suplemento */}
                        </div>

                    </div>
                </section>
            </main>
            {/* /Main */}
        </>
    )
}
