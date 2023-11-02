import useSWR from "swr";
import Link from "next/link";

export default function Movies2() {
  const { data, error } = useSWR(
    `http://www.omdbapi.com/?apikey=67b600f&s=bagdad`,
    fetcher
  );

  if (error) return <div>Falha na requisição...</div>;
  if (!data) return <div>Carregando...</div>;

  return (
    <div>
      {data.Search.map((m) => (
        <div key={m.imdbID}>
          <Link href={`/movies/${m.imdbID}`}>
            <img src={m.Poster} alt={m.Title} />
            <p>{m.Title}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}

async function fetcher(url) {
  const res = await fetch(url);
  const json = await res.json();

  return json;
}
