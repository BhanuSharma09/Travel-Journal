import twitter from "../images/TwitterIcon.png"
import facebook from "../images/FacebookIcon.png"
import instagram from "../images/InstagramIcon.png"
import github from "../images/GitHubIcon.png"
export default function Footer(){
    return(
        <div className="footer">
              <footer>
              <img className="margin-right" src={twitter} alt="Twitter logo" />  
              <img className="margin-right" src={facebook} alt="Facebook logo" />  
              <img className="margin-right1" src={instagram} alt="Instagram logo" />  
              <img src={github} alt="Github logo" />  
              </footer>
        </div>
    )
}