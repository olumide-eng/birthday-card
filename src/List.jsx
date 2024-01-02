import React from "react";
import Person from "./Person";

const List = ({ people, setPeople }) => {
  return (
    <section>
      {people.map((person) => {
        return (
          <Person
            key={people.id}
            {...person}
            people={people}
            setPeople={setPeople}
          />
        );
      })}
    </section>
  );
};

export default List;
