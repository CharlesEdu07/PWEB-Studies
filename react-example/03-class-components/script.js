const { Component } = React;

const beers = [
  {
    name: "Guiness",
    alcohol: "10%",
    style: "Stout",
    ibu: 45,
  },
  {
    name: "Desperados",
    alcohol: "6%",
    style: "Lager",
    ibu: 15,
  },
  {
    name: "Becks",
    alcohol: "5%",
    style: "Pilsner",
    ibu: 25,
  },
];

ReactDOM.render(
  React.createElement(
    "h1",
    { id: "my-heading" },
    React.createElement(
      "span",
      null,
      "React ",
      React.createElement("em", null, "é muito")
    ),
    " massa!"
  ),

  document.getElementById("app")
);

const Header = () => {
  return <h1>Minha tabela de bebidas</h1>;
};

class DrawTable extends Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Idade</th>
            <th>Cidade</th>
          </tr>
        </thead>
        <tbody>
          {beers.map((beer, index) => (
            <tr key={index}>
              <td>{beer.name}</td>
              <td>{beer.alcohol}</td>
              <td>{beer.style}</td>
              <td>{beer.ibu}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

const LoadBtn = () => {
  const handleClick = () => {
    ReactDOM.render(<DrawTable />, document.getElementById("my-table"));
  };

  return (
    <button id="load-btn" onClick={handleClick}>
      Carregar
    </button>
  );
};

ReactDOM.render(<Header />, document.getElementById("header"));
ReactDOM.render(<LoadBtn />, document.getElementById("load-btn-div"));
