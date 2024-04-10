import "./Css/Contact.css"; // Importa o arquivo de estilo CSS específico para este componente

export function Contact() { // Define o componente Contact como uma função React

    /* Retirando a barra de rolagem vertical */
    function unloadScrollBars() { // Define uma função para remover a barra de rolagem vertical
        document.documentElement.style.overflow = 'hidden'; // Esconde a barra de rolagem vertical do documento
        document.body.scroll = "no"; // Esconde a barra de rolagem vertical no Internet Explorer
    }
    unloadScrollBars(); // Chama a função para remover a barra de rolagem vertical

    return (
        <main> {/* Elemento principal do componente */}
            <section className="page-contact"> {/* Seção de conteúdo sobre a página de contato */}
                <div className="page-contact-info"> {/* Div para as informações de contato */}
                    <h1>Endereço: Avenida Paulista, s/n - Bela Vista - São Paulo - SP </h1> {/* Informações sobre o endereço */}
                    <h1>Telefone: (11)99999-9999</h1> {/* Informações sobre o telefone */}
                    <h1>Email: rafael.ccarvalhoo@icloud.com</h1> {/* Informações sobre o email */}
                </div>
            </section>
        </main>
    )
}