import Link from "next/link";
import { Header } from "./fragments/Header";
import { Footer } from "./fragments/Footer";

export default function Home() {
  return (
    <div>
      <Header />

      <h2>Viva Santana!</h2>
      <h3>Olá, mundo!</h3>
      <Link href="/about">Sobre</Link>
      <br></br>
      <Link href="/form">Form</Link>

      <Footer />
    </div>
  );
}
