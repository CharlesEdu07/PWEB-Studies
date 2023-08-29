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

const table = React.createElement(
  "table",
  null,
  React.createElement(
    "thead",
    null,
    React.createElement(
      "tr",
      null,
      React.createElement("th", null, "ID"),
      React.createElement("th", null, "Nome"),
      React.createElement("th", null, "Idade"),
      React.createElement("th", null, "Cidade")
    )
  ),
  React.createElement(
    "tbody",
    null,
    React.createElement(
      "tr",
      null,
      React.createElement("td", null, "1"),
      React.createElement("td", null, "João"),
      React.createElement("td", null, "25"),
      React.createElement("td", null, "São Paulo")
    ),
    React.createElement(
      "tr",
      null,
      React.createElement("td", null, "2"),
      React.createElement("td", null, "Maria"),
      React.createElement("td", null, "30"),
      React.createElement("td", null, "Rio de Janeiro")
    )
  )
);

ReactDOM.render(table, document.getElementById("my-table"));