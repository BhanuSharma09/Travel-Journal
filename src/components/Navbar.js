import Logo from "../images/Fill.png"
export default function Navbar(){
    return(
        <div>
            <nav className="navbar">
                <img className="img--padding" src={Logo} alt="Logo" />
                <h4 className="nav--h3">my travel journal.</h4>
            </nav>
        </div>
    )
}