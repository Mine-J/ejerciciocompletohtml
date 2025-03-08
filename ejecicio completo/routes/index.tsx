import {Character} from "../components/characterNamePhoto.tsx"
import Axios from 'npm:axios';

type character = {
  name: string;
  image:string;
  
}

export default async function Home() {
  const charac = await Axios.get<character>("https://rickandmortyapi.com/api/character")
  
  return (
    <div class= "contenedor">
      {charac.data.results.map(elem => (
        <Character name={elem.name} image={elem.image} id={elem.id}/>
      ))}
    </div>
  );
}
