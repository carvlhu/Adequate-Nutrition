import './header.css'

export function Header () {
    return(
        <>
        <section>
            <nav className='nav-bar'>
                <span className='logo'>
                    <a href="/">N+</a>
                </span>

                <ul className='nav-list'>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/suplements">Suplements</a></li>
                    <li><a href="/contact">Contact</a></li>
                    <li><a href="/imc">IMC</a></li>
                </ul>
            </nav>
        </section>
        </>
    )
}