import "./footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons"
import { faFile } from "@fortawesome/free-solid-svg-icons"

const Footer = () => {
    return (
        <footer>
        <h2>How to get a hold of me</h2>
        
        <ul className="social-list">
          <li className="social-list-item">
            <a  href="https://www.linkedin.com/in/njabulo-mhlambi-866129102/" target="_blank" rel="noreferrer"> LinkedIn
            <span></span> <FontAwesomeIcon icon={faLinkedinIn} /></a>
          </li>
          <li className="social-list-item">
            <a   href="https://github.com/Njabz-1" target="_blank" rel="noreferrer"> GitHub
            <span></span> <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
          <li className="social-list-item" >
            mhlambinjabulo@gmail.com
          </li>
          <li className="social-list-item">
            <a   href="public\NA Mhlambi CV.pdf" target="#"> CV     
            <span></span> <FontAwesomeIcon icon={faFile} /></a>
          </li>
        </ul>
      </footer>

    )
}

export default Footer
