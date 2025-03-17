import resources from "../ressurser"; //Importerer ressurser fra ressurser.js.
import PageTitle from "./PageTitle";

//Resources-komponenten tar imot en 'category'-prop og viser tilhørende ressurser.
const Resources = ({ category }) => {
  //Filtrerer ressurser basert på kategori-prop-en.
  const filteredResources = resources.filter((res) => res.category === category);

  return (
    <section id="content">
      {/*Jeg bruker "toUpperCase()" for at det viser overskriften med kategorinavnet i store bokstaver.*/}
      <PageTitle title={category.toUpperCase()} /> {/*Bruker PageTitle her.*/}
      <ul>
         {/*Mapper gjennom de filtrerte ressursene og viser dem som en liste med lenker.*/}
        {filteredResources.map((res, index) => (
          <li key={index}>
             {/*Klikkbare lenker til ressursene, åpnes i en ny fane*/}
            <a href={res.url} target="_blank" rel="#">
              {res.title}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Resources;

