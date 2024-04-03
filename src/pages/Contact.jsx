import "./Css/Contact.css"

export function Contact() {

    /* Retirando a barra de rolagem vetical */
    function unloadScrollBars() {
        document.documentElement.style.overflow = 'hidden';
        document.body.scroll = "no";
    }
    unloadScrollBars();

    return (
        <main>
            <section className="page-contact">
                <div className="page-contact-info">
                    <h1>Endereço: Avenida Paulista, s/n - Bela Vista - São Paulo - SP </h1>
                    <h1>Telefone: (11)99999-9999</h1>
                    <h1>Email: rafael.ccarvalhoo@icloud.com</h1>
                </div>
            </section>
        </main>
    )
}