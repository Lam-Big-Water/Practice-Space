import '../../style/Info.scss'
import InfoImg from "../../assets/laura-jones.jpg";
import InformationImg from "../../assets/post-img.jpg"

const Info = () => {
    return (
            <>
                    <div className="info">
                    <h1 className="primary-title">The Basic Language of the Web: HTML</h1>
                        <div className="info__part">
                            <img className="info__part--avatar" src={InfoImg} alt="" />
                            <span className="info__part--intro">Posted by Laura Jones on Monday, June 21st 2027</span>
                        </div>
                        <div className="info__information">
                            <img className="info__information--img" src={InformationImg} alt="" />
                            <div className='info__information--text'>
                                <p>
                                    All modern websites and web applications are built using three fundamental technologies: HTML, CSS and JavaScript. These are the languages of the web.
                                </p>
                                <p>
                                    In this post, let's focus on HTML. We will learn what HTML is all about, and why you too should learn it.
                                </p>
                            </div>
                        </div>
                    </div>
            </>
    )
}

export default Info;