import { GetStaticProps, NextPage, GetStaticPaths } from "next";
import { pokeApi } from "../../api";
import { Layout } from "../../components/layouts";
import { Pokemon } from "../../interfaces";


interface Props {
    pokemon: Pokemon;
}


const PokemonPage: NextPage <Props> = ({ pokemon }) => {
    return (
        <Layout title="Algun pokemon">
            <h2>{ pokemon.name }</h2>
        </Layout>
    )
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {

    const pokemons151 = [...Array(151)].map((value, idx) => `${idx + 1 }`);
    
    return {
        // paths: [
        //     {
        //         params: { id: '1' }
        //     },
        // ],
        paths: pokemons151.map(id => ({
            params: { id }
        })),
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async (ctx) => {
    const { id } = ctx.params as { id: string };

    const { data } = await pokeApi.get<Pokemon>(`/pokemon/${id}`);
    
    return {
        props: {
            pokemon: data
        }
    }
}


export default PokemonPage;