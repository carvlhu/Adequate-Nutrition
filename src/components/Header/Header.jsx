import './header.css'; // Importa o arquivo de estilo CSS específico para o cabeçalho

export function Header() { // Define o componente Header como uma função React

    return (
        <> {/* Fragmento React usado para englobar múltiplos elementos sem adicionar um nó extra ao DOM */}

            {/* Seção principal */}
            <section>
                {/* Barra de navegação */}
                <nav className='nav-bar'> {/* Define a barra de navegação */}
                    <span className='logo'> {/* Elemento para o logotipo */}
                        <a href="/">N+</a> {/* Link para a página inicial com o logotipo */}
                    </span>

                    {/* Lista de navegação */}
                    <ul className='nav-list'> {/* Define a lista de itens de navegação */}
                        {/* Itens de navegação */}
                        <li><a href="/">Home</a></li> {/* Link para a página inicial */}
                        <li><a href="/about">About</a></li> {/* Link para a página 'About' */}
                        <li><a href="/suplements">Suplements</a></li> {/* Link para a página de suplementos */}
                        <li><a href="/contact">Contact</a></li> {/* Link para a página de contato */}
                        <li><a href="/imc">IMC</a></li> {/* Link para a página de cálculo de IMC */}
                    </ul>
                </nav>
            </section>
        </>
    )
}