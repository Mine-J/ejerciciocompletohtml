import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Axios from "npm:axios";
import { CharacterInfo } from "../../components/characterInfo.tsx";

type characApi = {
    name:string;
    image:string;
    gender:string;
    status:string;
    species:string;
    origin:{name:string};
    episode:string[]
}

type episodeApi = {
    id:string
    name:string;
    air_date:string;
    episode:string
    characters:string[]
}

type charac = {
    name:string;
    image:string;
    gender:string;
    status:string;
    species:string;
    originName:string;
    episode:episode[]
}

type episode = {
    id:string
    name:string;
    air_date:string;
    episode:string
    characters:charac[]
}

export const handler:Handlers = {
    GET:async(_req:Request,ctx:FreshContext<unknown,charac>)=>{
        const {id} = ctx.params;
        
        const personajeApi = await Axios.get<characApi>(`https://rickandmortyapi.com/api/character/${id}`)
        const personaje:charac = {
          name: personajeApi.data.name,
          image: personajeApi.data.image,
          gender: personajeApi.data.gender,
          status: personajeApi.data.status,
          species: personajeApi.data.species,
          originName: personajeApi.data.origin.name,
          episode: await Promise.all(personajeApi.data.episode.map(async (_elem) => {
            const response = await Axios.get<episode>(_elem);
            return response.data;
          }))
        }
        console.log(personaje);
        
        return ctx.render(personaje);
    }
} 

const Page = (props:PageProps<charac>) =>{
    const personaje = props.data;
    
    return (
        <div>
            <CharacterInfo results = {personaje}/>
        </div>
    );
}
export default Page;