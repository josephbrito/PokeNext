import PokemonId from "../../components/Pokemon";
import { useRouter } from "next/router";
import ReactLoading from "react-loading";
import styled from "../../styles/Load.module.css";

export async function getStaticPaths() {
  const maxPokemons = 100;
  const api = "https://pokeapi.co/api/v2/pokemon";

  const res = await fetch(`${api}/?limit=${maxPokemons}`);
  const data = await res.json();

  const paths = data.results.map((pokemon, index) => {
    return {
      params: { pokemonId: (index + 1).toString() },
    };
  });
  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const id = context.params.pokemonId;

  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

  const data = await res.json();

  return {
    props: {
      pokemon: data,
    },
  };
}

export default function Pokemon({ pokemon }) {
  const router = useRouter();

  if (router.isFallback) {
    return (
      <div className={styled.load_container}>
        <ReactLoading className={styled.load} type="spin" color="black" />
      </div>
    );
  }
  return <PokemonId pokemon={pokemon} />;
}
