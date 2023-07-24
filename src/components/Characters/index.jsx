import Person from "../Person";
import "./Characters.css";

const Characters = ({name, primaryColor, secondColor, person}) => {
  return (
    person.length > 0 && <section className="characters" style={{backgroundColor: secondColor}}>
      <h3 style={{borderColor: primaryColor}}>{name}</h3>
      <div className="persons">
        {person.map(ch => <Person name={ch.name} job={ch.job} image={ch.image}></Person>)}
      </div>
    </section>
  )
}

export default Characters