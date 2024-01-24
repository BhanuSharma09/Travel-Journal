import icon from "../images/reactjs-icon.png"
export default function Navbar(){
    return(
        <header>
            <nav className="nav-item">
                <span className="nav-item nav-item-2">
                    <img className="size" src={icon} alt="react js icon"/>
                    <h2 className="h2-color">ReactFacts</h2>
                </span>
                <h3 className="h3-color">React Course-Project 1</h3>
            </nav>
        </header>
    )
}