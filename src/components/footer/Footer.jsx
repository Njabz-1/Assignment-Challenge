import "./footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons"
import { faFile } from "@fortawesome/free-solid-svg-icons"

const Footer = () => {
    return (
        <footer class="footer" id="contact">
        <h2>How to get a hold of me</h2>
        
        <ul class="social_list">
          <li class="social_list_item">
            <a class="social_list_link" href="https://www.linkedin.com/in/njabulo-mhlambi-866129102/" target="_blank"> LinkedIn
            <span></span> <FontAwesomeIcon icon={faLinkedinIn} /></a>
          </li>
          <li class="social_list_item">
            <a class="social_list_link" href="https://github.com/Njabz-1" target="_blank"> GitHub
            <span></span> <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
          <li class="social_list_item">
            mhlambinjabulo@gmail.com
          </li>
          <li class="social_list_item">
            <a class="social_list_link" href="public\NA Mhlambi CV.pdf" target="#"> CV     
            <span></span> <FontAwesomeIcon icon={faFile} /></a>
          </li>
        </ul>
      </footer>

    )
}

export default Footer
