import { Card, Grid } from '@nextui-org/react';

import { useState, useEffect } from 'react';

import { Layout } from "../../components/layouts"
import { NoFavorites } from "../../components/UI";
import { pokemons } from '../../utils/localFavorites';


const FavoritesPage = () => {
    const [favoritePokemons, setFavoritesPokemons] = useState <number[]>([]);

    console.log(favoritePokemons);
    

    useEffect(() => {
        setFavoritesPokemons(pokemons());
    }, []);

    return (
        <Layout title="Pokemons Favoritos">
            {
                favoritePokemons.length === 0 ? (
                    <NoFavorites />
                ) : (
                    <Grid.Container gap={ 2 } direction="row" justify='flex-start'>
                        {
                            favoritePokemons.map((id) => (
                                <Grid xs={ 6 } sm={ 3 } md={ 2 } xl={ 1 } key={ id }>
                                    <Card hoverable clickable css={{ padding: 10 }}>
                                        <Card.Image
                                            src={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/'+id+'.svg'}
                                            width={'100%'}
                                            height={ 140 }
                                        />
                                    </Card>
                                </Grid>
                            ))
                        }
                    </Grid.Container>
                )
            }
        </Layout>
    )
}

export default FavoritesPage;