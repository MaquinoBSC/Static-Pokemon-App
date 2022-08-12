import type { NextPage, GetStaticProps } from 'next';
import { Card, Grid, Row, Text } from '@nextui-org/react';
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
      <Grid.Container gap={ 2 } justify='flex-start'>
        {
          pokemons.map(({ id, name, img }) => (
            <Grid xs={ 6 } sm={ 3 } md={ 2 } xl={ 1 } key={ id }>
              <Card hoverable clickable>
                <Card.Body css={{ p: 1 }}>
                  <Card.Image src={ img } width="100%" height={ 140 } />
                </Card.Body>
                <Card.Footer>
                  <Row justify='space-between'>
                    <Text transform='capitalize'>{ name }</Text>
                    <Text>#{ id }</Text>
                  </Row>
                </Card.Footer>
              </Card>
            </Grid>
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
}


export default HomePage;
