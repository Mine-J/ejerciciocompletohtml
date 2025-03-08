import {Character} from "../components/character.tsx"
import Axios from 'npm:axios';

type character = {
  name: string;
  image:string;
  
}

export default async function Home() {
  const charac = await Axios.get<character>("https://rickandmortyapi.com/api/character")
  console.log(charac.data.results)
  return (
    <div class= "contenedor">
      {charac.data.results.map(elem => (
        <Character name={elem.name} image={elem.image}/>
      ))}
    </div>
  );
}
