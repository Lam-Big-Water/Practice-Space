import { Link, Routes, Route } from "react-router-dom";
import { Blog } from "../../Pages/Blog";
import './index.scss'
export const Header = () => {
  return (
    <header className='header'> 
            <h1 className="header__primary--title">🚞 The Code Magazine</h1>
            <Link className="header__nav--link" to="/blog">Blog</Link>
            <Link className="header__nav--link" to="/blog">Challenges</Link>
            <Link className="header__nav--link" to="/blog">Flexbox</Link>
            <Link className="header__nav--link" to="/blog">CSS Grid</Link>

        <Routes>
            <Route path="Blog" element={<Blog />}></Route>
            <Route path="Challenges" element={<Blog />}></Route>
            <Route path="Flexbox" element={<Blog />}></Route>
            <Route path="CSS Grid" element={<Blog />}></Route>
        </Routes>
    </header>     
  )
}
