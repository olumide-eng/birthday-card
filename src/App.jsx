import { useState } from "react";
import data from "./data";
import List from "./List";

const App = () => {
  const [people, setPeople] = useState(data);

  return (
    <>
      <section className="container">
        <h3>{people.length} birthday today</h3>
        <List people={people} setPeople={setPeople} />
        <button
          type="button"
          className="btn btn-block"
          onClick={() => setPeople([])}
        >
          clear Items
        </button>
      </section>
    </>
  );
};
export default App;
