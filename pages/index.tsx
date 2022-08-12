import type { NextPage, GetStaticProps } from 'next';
import { Layout } from '../components/layouts';


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
  console.log("Hola Mundo")

  return {
    props: {
      name: "Maquino"
    }
  }
}


export default HomePage;
