import type { NextPage, GetStaticProps } from 'next';
import { pokeApi } from '../api';
import { Layout } from '../components/layouts';
import { PokemonListResponse, SmallPokemon } from '../interfaces/pokemon-list';


interface Props {
  pokemons: SmallPokemon[];
}

const HomePage: NextPage <Props> = ({ pokemons }) => {
  console.log(pokemons);

  return (
    <Layout title='Listado de Pokemones'>
      <ul>
        {
          pokemons.map((pokemon) => (
            <div>
              <p>{ pokemon.id }</p>
              <p>{ pokemon.name }</p>
              <img src={ pokemon.img } alt="" />
              
            </div>
          ))
        }
      </ul>
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
}


export default HomePage;
