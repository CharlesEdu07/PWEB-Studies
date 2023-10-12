const { Component } = React;

const DrinksTable = ({ table_title, headers, content }) => {
  return (
    <div>
      <h1>{table_title}</h1>
      <table>
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {content.map((rowData, rowIndex) => (
            <tr key={rowIndex}>
              {rowData.map((cellData, cellIndex) => (
                <td key={cellIndex}>{cellData}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const headerValues = ["Nome", "Alcool", "Estilo", "IBU"];

const beers = [
  ["Guinness", "10%", "Stout", 45],
  ["Desperados", "6%", "Lager", 15],
  ["Becks", "5%", "Pilsner", 25],
];

class LoadBtn extends Component {
  handleClick = () => {
    ReactDOM.render(
      <DrinksTable
        table_title="Tabela de Gelas"
        headers={headerValues}
        content={beers}
      />,
      document.getElementById("my-table")
    );
  };

  render() {
    return (
      <button id="load-btn" onClick={this.handleClick}>
        Carregar
      </button>
    );
  }
}

ReactDOM.render(<LoadBtn />, document.getElementById("load-btn-div"));
