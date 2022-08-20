const localFavorites = (id : number) => {
    console.log("toggle favorite");

    let favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]');
    if(favorites.includes(id)){
        favorites = favorites.filter(pokeId => pokeId !== id);
    }
    else {
        favorites.push(id);
    }

    localStorage.setItem('favorites', JSON.stringify(favorites));
}

const existPokemonInFavorite = (id: number): boolean => {
    // Evita conflictos cuando la funcion se ejecuta en el backend, pues localstorage no existe en el backend
    if(typeof window === 'undefined') return false;

    const favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]');

    return favorites.includes(id);
}

export {
    localFavorites,
    existPokemonInFavorite,
}