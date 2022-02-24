import Link from "next/link";
import Head from "next/head";
import styles from "../styles/notfound.module.css";

export default function NotFound() {
  return (
    <>
      <Head>
        <title>Página não encontrada</title>
      </Head>
      <div className={styles.notfound}>
        <h1>404 - Essa página não foi encontrada</h1>
        <Link href="/">
          <a>Voltar a página principal</a>
        </Link>
      </div>
    </>
  );
}
