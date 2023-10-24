import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h2>Viva Santana!</h2>
      <h3>Olá, mundo!</h3>
      <Link href="/about">Sobre</Link>
      <br></br>
      <Link href="/form">Form</Link>
    </div>
  );
}
