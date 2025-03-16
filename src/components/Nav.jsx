import { Link } from "react-router-dom";
import "../styles/Nav.scss"
import "../styles/ColorFont.scss"

const Nav = () => {
  return (
    <nav id="categories">
      <Link to="html">HTML</Link>
      <Link to="css">CSS</Link>
      <Link to="javascript">JavaScript</Link>
      <Link to="react">React</Link>
      <Link to="headless-cms">Sanity & Headless CMS</Link>
    </nav>
  );
};

export default Nav;
