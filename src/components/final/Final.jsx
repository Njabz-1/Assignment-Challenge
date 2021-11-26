import "./final.css"
import Me from  "../../img/Dimple-Sunset.jpg"

const Final = () => {
    return (
        <div className="final">
            <div className="final-left">
                <h1 className="final-heading">
                    Why SovTech?
                </h1>
                <div className="final-list">
                    <li>Good Company to gain experience</li>
                    <li>Offer clients myriad of solutions</li>
                    <li>Many technologies on offer, so I assume there's a lot of training</li>
                </div>
                <br />
                <br />
                <div className="final-descr">
                    <p> In short I think SovTech is a good company <br />
                        to gain experience in the software development space.<br /> I saw on the 
                        <a href="https://www.sovtech.co.za/"> website </a> that you work with small to 
                        big firms (Even startups). I am still relatively new 
                        in this field so I think making a possible career at 
                        Sovtech would be to my benefit. </p>
                </div>
            </div>
            <div className="final-right">
                <div className="final-card background"></div>
                <div className="final-card">
                    <img src={Me} alt="An image of myself" className="final-img"/>
                </div>
            </div>
        </div>
    )
}

export default Final
