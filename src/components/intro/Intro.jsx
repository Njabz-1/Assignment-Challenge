import "./intro.css"
import Me from "../../img/Smiling.jpg"


const Intro = () => {
    return (
        <div className="intro">
            <div className="intro-left">
                <div className="intro-left-wrapper">
                    <h2 className="intro-intro">Top of the morning! My name is</h2>
                    <h1 className="intro-name">Njabulo</h1>
                    <div className="intro-title">
                        <div className="intro-title-wrapper">
                            <div className="intro-title-item">Footballer</div>
                            <div className="intro-title-item">Explorer</div>
                            <div className="intro-title-item">Frontend Developer</div>
                            <div className="intro-title-item">Gamer, on occasion</div>
                            <div className="intro-title-item">Happy chappy</div>

                        </div>
                    </div>
                    <div className="intro-desc">
                    I am a team player, enthusiastic and an individual 
                    who likes to work towards a clearly defined goal. 
                    I have an inquisitive approach to life and often like 
                    to ask questions when I do not understand a concept (which is most of the time).
                    </div>
                </div>
            </div>
            <div className="intro-right">
                <div className="intro-background"></div>
                <img src={Me}  className="intro-img" alt="Me" />
            </div>
        </div>
    )
}

export default Intro
