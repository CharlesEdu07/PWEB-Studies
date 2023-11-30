import useSWR from "swr";
import { useRouter } from "next/router";

import { Button, Descriptions, Spin } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";

export default function MovieDetails({ imdbID }) {
  const router = useRouter();

  const { query } = router;

  const { data, error } = useSWR(
    `http://www.omdbapi.com/?apikey=67b600f&i=${query.imdbID}`,
    fetcher
  );

  const handleBack = () => {
    router.back();
  };

  const BackBtn = ({ onClick }) => (
    <Button type="primary" icon={<ArrowLeftOutlined />} onClick={onClick}>
      Voltar
    </Button>
  );

  if (error) return <div>Falha na requisição...</div>;
  if (!data) return <Spin>Aguarde...</Spin>;

  return (
    <div style={{ padding: 20 }}>
      <BackBtn onClick={handleBack}></BackBtn>
      <h1>{data.Title}</h1>
      <img src={data.Poster} alt={data.Title} />
      <p>{data.Plot}</p>
      <p>{data.Runtime}</p>
      <p>{data.Genre}</p>
    </div>
  );
}

async function fetcher(url) {
  console.log(url);

  const res = await fetch(url);
  const json = await res.json();

  return json;
}
