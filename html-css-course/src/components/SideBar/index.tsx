import '../../style/SideBar.scss'
import Related1 from "../../assets/related-1.jpg";
import Related2 from "../../assets/related-2.jpg";
import Related3 from "../../assets/related-3.jpg";

const SideBar = () => {
    return (
        <div className="sidebar">
            <h3 className="sidebar__title">RELATED POSTS</h3>
            <div className="sidebar__item">
                <img src={Related1} alt="" className="sidebar__item--img" />
                <h4 className="sidebar__item--title">How to Learn Web Development</h4>
                <span className="sidebar__item--author">By Jonas Schmedtmann</span>
            </div>
            <div className="sidebar__item">
                <img src={Related2} alt="" className="sidebar__item--img" />
                <h4 className="sidebar__item--title">The Unknown Powers of CSS</h4>
                <span className="sidebar__item--author">By Jim Dillon</span>
            </div>
            <div className="sidebar__item">
                <img src={Related3} alt="" className="sidebar__item--img" />
                <h4 className="sidebar__item--title">Why JavaScript is Awesome</h4>
                <span className="sidebar__item--author">By Matilda</span>
            </div>
        </div>
    )
}

export default SideBar