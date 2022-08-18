import { GetStaticProps, NextPage, GetStaticPaths } from "next";
import { useRouter } from "next/router";
import { Layout } from "../../components/layouts";


interface Props {
    // pokemon: any
    id: string;
    name: string;
}


const PokemonPage: NextPage <Props> = ({ id, name }) => {
    const router = useRouter();
    console.log(router.query);
    
    return (
        <Layout title="Algun pokemon">
            <h2>{ id } - { name }</h2>
        </Layout>
    )
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {

    return {
        paths: [
            {
                params: { id: '1' }
            },
        ],
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async (ctx) => {

    return {
        props: {
            id: 1,
            name: 'Bulbasaur'
        }
    }
}


export default PokemonPage;