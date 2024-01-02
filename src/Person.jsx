import React from "react";

const Person = ({ image, name, age, id, people, setPeople }) => {
  const filterPeople = () => {
    const filteredPeople = people.filter((person) => {
      return person.id !== id;
    });
    setPeople(filteredPeople);
  };

  return (
    <article className="person">
      <img src={image} alt={name} className="img" />
      <div>
        <h4>{name}</h4>
        <p>{age}</p>
      </div>
      <button type="button" className="btn" onClick={() => filterPeople()}>
        remove item
      </button>
    </article>
  );
};

export default Person;
