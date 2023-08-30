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

const drawTable = () => {
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
        <tr>
          <td>1</td>
          <td>João</td>
          <td>25</td>
          <td>São Paulo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Maria</td>
          <td>30</td>
          <td>Rio de Janeiro</td>
        </tr>
      </tbody>
    </table>
  );
};

ReactDOM.render(drawTable(), document.getElementById("my-table"));
