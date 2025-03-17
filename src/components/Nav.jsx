import { Link } from "react-router-dom"; //Importerer Link fra react-router-dom for Nav.
import "../styles/Nav.scss" 

//Den inneholder lenker til forskjellige ressurssider ved hjelp av React Router sin <Link>-komponent.
const Nav = () => {
  return (
    <nav id="categories"> {/*Link-komponentene erstatter <a> for navigasjon. Hvis det gir mening.*/}
      <Link to="html">HTML</Link>
      <Link to="css">CSS</Link>
      <Link to="javascript">JavaScript</Link>
      <Link to="react">React</Link>
      <Link to="headless-cms">Sanity & Headless CMS</Link>
    </nav>
  );
};

export default Nav;
