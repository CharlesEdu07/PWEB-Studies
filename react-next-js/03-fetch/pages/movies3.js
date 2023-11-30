import useSWR from "swr";
import { useState } from "react";
import { Button, Card, Spin, Row, Col } from "antd";

const { Meta } = Card;

async function theFetcher(url) {
  if (url === null || url === "") return { Search: "" };

  const res = await fetch(url);
  const json = await res.json();

  return json;
}

export function TheMovies({ data, show }) {
  if (!show) return <div></div>;

  if (data.error) return <div>Falha na requisição</div>;

  if (data.Search === "") return <div>Carregando...</div>;

  return (
    <div>
      {data.Search.map((movie) => (
        <Card
          key={movie.imdbID}
          hoverable
          style={{ width: 240, height: 500, float: "left", margin: 8 }}
          cover={<img alt={movie.Title} src={movie.Poster} />}
        >
          <Meta title={movie.Title} description={movie.Year} />
        </Card>
      ))}
    </div>
  );
}

export function TheLink({ url, handler }) {
  return (
    <div>
      <Button onClick={handler}>
        {url === "" ? "Mostrar filmes" : "Ocultar filmes"}
      </Button>
    </div>
  );
}

export default function Movies3() {
  const [url, setUrl] = useState("");
  const { data, error } = useSWR(url, theFetcher);

  const isShowingMovies = url !== "" && !error;

  return (
    <Row justify="center" style={{ marginTop: 16 }}>
      <Col span={8}>
        <TheLink
          url={url}
          handler={() =>
            setUrl(
              url === ""
                ? "http://www.omdbapi.com/?apikey=67b600f&s=bagdad"
                : ""
            )
          }
        />
      </Col>
      <Col span={16}>
        {isShowingMovies && (
          <Spin spinning={!data} tip="Carregando..." style={{ marginTop: 24 }}>
            <TheMovies data={data ? data : { Search: "" }} show={url !== ""} />
          </Spin>
        )}
        {error && (
          <div style={{ marginTop: 20, color: "red", fontSize: 16 }}>
            Erro na pesquisa
          </div>
        )}
      </Col>
    </Row>
  );
}
