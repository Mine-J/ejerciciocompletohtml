import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Axios from "npm:axios";
import { CharacterInfo } from "../../components/characterInfo.tsx";

type charac = {
    name:string;
    image:string;
    gender:string;
    status:string;
    species:string;
    origin:{name:string};
    episode:string[]
}

export const handler:Handlers = {
    GET:async(_req:Request,ctx:FreshContext<unknown,charac>)=>{
        const {id} = ctx.params;
        
        const personaje = await Axios.get<charac>(`https://rickandmortyapi.com/api/character/${id}`)
        
        return ctx.render(personaje.data);
    }
} 

const Page = (props:PageProps<charac>) =>{
    const personaje = props.data;
    console.log(personaje)
    return (
        <div>
            <CharacterInfo results = {personaje}/>
        </div>
    );
}
export default Page;