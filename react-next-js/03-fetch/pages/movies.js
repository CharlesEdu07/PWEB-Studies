import { useState } from "react";

export default function Movies({ initialData }) {
  const [data, setData] = useState(initialData);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchYear, setSearchYear] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const res = await fetch(
      `http://www.omdbapi.com/?apikey=67b600f&s=${searchTerm}&y=${searchYear}`
    );
    const newData = await res.json();

    setData(newData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter movie title"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter year"
          value={searchYear}
          onChange={(e) => setSearchYear(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <div>{data.Search && data.Search.map(mapping)}</div>
    </div>
  );
}

function mapping(element) {
  return (
    <div key={element.imdbID}>
      <div>
        <img src={element.Poster} alt={element.Title} />
        <div>
          <p>
            {element.Title} --- {element.Year}
          </p>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const res = await fetch(`http://www.omdbapi.com/?apikey=67b600f&s=batman`);

  const initialData = await res.json();

  return {
    props: {
      initialData,
    },
  };
}
