import resources from "../ressurser";
import "../styles/Resources.scss"
import "../styles/ColorFont.scss"



const Resources = ({ category }) => {
  const filteredResources = resources.filter((res) => res.category === category);

  return (
    <section id="content">
      <h2>{category.toUpperCase()}</h2>
      <ul>
        {filteredResources.map((res, index) => (
          <li key={index}>
            <a href={res.url} target="_blank" rel="noopener noreferrer">{res.title}</a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Resources;
