import { useState, useEffect } from 'react';

import { Layout } from "../../components/layouts"
import { FavoritePokemons } from '../../components/pokemon';
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
                    <FavoritePokemons favoritePokemons={ favoritePokemons } />
                )
            }
        </Layout>
    )
}

export default FavoritesPage;