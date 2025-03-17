import Nav from "./Nav";

//Layout-komponenten fungerer som en wrapper for applikasjonen. 
//Den sørger for at navigasjonsmenyen (Nav) alltid vises, og at alle undersider blir rendret inne i {children}.

//Layout-en fungerer blir som et hovedoppsett for nettsiden plus navigasjonen.
const Layout = ({ children }) => {
  return (
  <main>
    <Nav />
    {children} {/*Children representerer innholdet som kommer fra Route-komponentene i App.jsx.*/}
    </main>
  );
};

export default Layout;
