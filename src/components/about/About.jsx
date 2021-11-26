import "./about.css"
import Sunset from  "../../img/Sunflower-Boy.jpg"
import Football from "../../img/Soccerball.png"
import Reading from "../../img/Reading.png"
import Videogames from "../../img/Videogames.png"

const About = () => {
    return (
        <div className="about">
            <div className="about-left">
                <div className="about-card background"></div>
                <div className="about-card">
                    <img src={Sunset} alt="" className="about-img"/>
                </div>
            </div>
            <div className="about-right">
                <h1 className="about-title">About Me</h1>
                <p className="about-subtitle">
                “Home is not where you are born;
                <br/>home is where all 
                your attempts to escape cease” ― Naguib Mahfouz
                </p>
                <p className="about-description">
                My biggest strengths are my energy and optimism. 
                My hobbies include playing football,
                reading epic fantasy novels, and playing videogames.
                </p>
                <div className="about-misc">
                    <img src={Reading} alt="reading" className="about-misc-img" />
                    <img src={Football} alt="footabll" className="about-misc-img" />
                    <img src={Videogames} alt="footabll" className="about-misc-img" />
                </div>
            </div>
        </div>
    )
}

export default About
