import Link from "next/link";
import { Header } from "./fragments/Header";
import { Footer } from "./fragments/Footer";
import { CustomPage } from "./fragments/custom-page";

export default function Home() {
  console.log("Vamos ver se você é brabo mesmo");

  return (
    <div>
      <Header />
      <h2>Viva Santana!</h2>
      <h3>Olá, mundo!</h3>
      <Link href="/about">Sobre</Link>
      <br></br>
      <Link href="/form">Form</Link>
      <br></br>
      <Link href="/movies">Filmes carregados no servidor</Link>
      <br></br>
      <Link href="/movies2">Filmes carregados no cliente</Link>
      <div>
        <h1>Meu Aplicativo</h1>
        <CustomPage text="Este é um texto passado por uma propriedade." />
      </div>
      <Footer />
    </div>
  );
}
