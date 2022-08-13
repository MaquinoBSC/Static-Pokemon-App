import { useRouter } from "next/router";
import { Layout } from "../../components/layouts";

const PokemonPage = () => {
    const router = useRouter();
    console.log(router);
    
    return (
        <Layout title="Algun pokemon">
            <h1>Hola Pokemon</h1>
        </Layout>
    )
};



export default PokemonPage;