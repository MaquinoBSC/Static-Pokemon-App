import type { NextPage, GetStaticProps } from 'next';
import { Grid } from '@nextui-org/react';
import { pokeApi } from '../api';
import { Layout } from '../components/layouts';
import { PokemonListResponse, SmallPokemon } from '../interfaces/pokemon-list';
import { PokemonCard } from '../components/pokemon';


interface Props {
  pokemons: SmallPokemon[];
}

const HomePage: NextPage <Props> = ({ pokemons }) => {
  console.log(pokemons);

  return (
    <Layout title='Listado de Pokemones'>
      <Grid.Container gap={ 2 } justify='flex-start'>
        {
          pokemons.map((pokemon) => (
            <PokemonCard pokemon={ pokemon } key={ pokemon.id } />
          ))
        }
      </Grid.Container>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get <PokemonListResponse>('/pokemon?limit=151');

  const pokemons: SmallPokemon[] = data.results.map((pokemon, idx) => {
    return {
      name: pokemon.name,
      url: pokemon.url,
      id: `${idx + 1}`,
      img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${idx+1}.svg`
    }
  })

  // https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg
  return {
    props: {
      pokemons,
    }
  }
};

export default HomePage;
