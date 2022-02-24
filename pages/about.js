import Image from "next/image";
import styles from "../styles/About.module.css";

export default function About() {
  return (
    <div className={styles.about}>
      <h1>Sobre o projeto</h1>
      <p>
        Charizard, conhecido como Lizardon (リザードン Rizadon?) no Japão, é uma
        criatura fictícia da franquia Pokémon que pertence a Nintendo e Game
        Freak. Criado por Ken Sugimori, Charizard apareceu pela primeira vez nos
        jogos Pokémon Red e Blue e subsequentes sequelas. Eles apareceram também
        em várias mercadorias, títulos de spinoff e adaptações animadas e
        impressas da franquia. Shin-ichiro Miki, o ator que faz a voz do James
        na versão japonesa do anime, é quem dá voz ao Charizard em versões
        japonesas e em inglês do anime.
      </p>
      <Image
        src="/images/charizard.png"
        width="300"
        height="300"
        alt="charizard"
      />
    </div>
  );
}
