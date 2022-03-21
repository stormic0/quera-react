import Designer from "./components/Designer";

import desingers from "./data/designers";

function App() {
  return (
    <div className="container">
      <h1 className="heading">اساتید دوره</h1>
      <div className="designers">
        {desingers.map((designer, index) => (
          <Designer
            key={index}
            name={designer.name}
            image={designer.image}
            meta={designer.meta}
            description={designer.description}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
