import type { NextPage, GetStaticProps } from 'next';
import { pokeApi } from '../api';
import { Layout } from '../components/layouts';
import { PokemonListResponse } from '../interfaces/pokemon-list';


const HomePage: NextPage = (props) => {
  console.log(props);

  return (
    <Layout title='Listado de Pokemones'>
      <ul>
        <li>Pokemon</li>
        <li>Pokemon</li>
        <li>Pokemon</li>
        <li>Pokemon</li>
        <li>Pokemon</li>
        <li>Pokemon</li>
        <li>Pokemon</li>
        <li>Pokemon</li>
        <li>Pokemon</li>
        <li>Pokemon</li>
        <li>Pokemon</li>
      </ul>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get <PokemonListResponse>('/pokemon?limit=151');  



  return {
    props: {
      pokemons: data.results
    }
  }
}


export default HomePage;
