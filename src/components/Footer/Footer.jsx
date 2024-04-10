import "./footer.css"; // Importa o arquivo de estilo CSS específico para o rodapé

export function Footer() { // Define o componente Footer como uma função React

    return (
        <> {/* Fragmento React usado para englobar múltiplos elementos sem adicionar um nó extra ao DOM */}

            {/* Rodapé */}
            <footer> {/* Define o rodapé */}
                <div> {/* Div para o conteúdo do rodapé */}
                    <h1>Contact</h1> {/* Título do rodapé */}
                    <h3>Rafael Carvalho</h3> {/* Nome do contato */}
                    <h4>rafael.ccarvalhoo@icloud.com</h4> {/* Endereço de e-mail do contato */}

                    {/* Ícones de mídia social */}
                    <ul className="icons"> {/* Define a lista de ícones de mídia social */}
                        {/* Links para os perfis de mídia social */}
                        <li><a href="https://github.com/carvlhu"><i class="fa-brands fa-github"></i></a></li> {/* Ícone do GitHub com link para o perfil */}
                        <li><a href="https://www.instagram.com/carvlhu/"><i class="fa-brands fa-instagram"></i></a></li> {/* Ícone do Instagram com link para o perfil */}
                        <li><a href="https://api.whatsapp.com/send/?phone=11999506038&text&type=phone_number&app_absent=0"><i class="fa-brands fa-whatsapp"></i></a></li> {/* Ícone do WhatsApp com link para o número de telefone */}
                    </ul>
                </div>
            </footer>
        </>
    )
}