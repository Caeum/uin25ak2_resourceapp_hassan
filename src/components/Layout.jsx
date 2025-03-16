import Nav from "./Nav";
import "../styles/Layout.scss"
import "../styles/ColorFont.scss"

const Layout = ({ children }) => {
  return (
    <main>
      <Nav />
      {children}
    </main>
  );
};

export default Layout;
