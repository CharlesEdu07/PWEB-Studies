export default function Movies({ data }) {
  return (
    <div>
      <div>{data.Search.map(mapping)}</div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const res = await fetch(`http://www.omdbapi.com/?apikey=67b600f&s=bagdad`);

  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}

function mapping(element) {
  return (
    <div>
      {element.Title} --- {element.Year}
    </div>
  );
}
