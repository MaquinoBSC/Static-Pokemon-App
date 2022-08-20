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
            <NoFavorites />
        </Layout>
    )
}

export default FavoritesPage;