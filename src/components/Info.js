import mail from "../images/Mail.png";
import MyImage from "../images/BhanuSharma.png";
import LinkedIn from "../images/linkedin.png";
export default function Info() {
  return (
    <div>
      <div className="back-color-info">
        <img className="img-size" src={MyImage} alt="ImageOfBhanu" />
        <div className="color-2-div">
          <p className="name">Bhanu Sharma</p>
          <p className="front">Frontend Developer</p>
          <p>
            <a className="link" href="#" target="_blank">
              bhanusharma.website
            </a>
          </p>
          <br />
          <a href="#" target="_blank">
            <button className="email mail-linkedin-common">
              <img src={mail} alt="mail-icon" />
              Email
            </button>
          </a>
          <a href="#" target="_blank">
            <button className="linkedin mail-linkedin-common">
              <img src={LinkedIn} alt="linkedIn-icon" />
              Linked In
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
