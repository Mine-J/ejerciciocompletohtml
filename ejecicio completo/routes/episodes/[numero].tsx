import { Handlers,FreshContext, PageProps } from "$fresh/server.ts";
import Axios from "npm:axios";
import { Episodio } from "../../components/episodio.tsx";

type episode = {
    name:string;
    air_date:string;
    episode:string
    characters:string[]
}

export const handler:Handlers = {
    GET: async (_req:Request, ctx:FreshContext<unknown,episode>) => {
        const {numero} = ctx.params;
        const episodeApi = await Axios.get<episode>(`https://rickandmortyapi.com/api/episode/${numero}`)
        return ctx.render(episodeApi.data)
    }
}

const Page = (props:PageProps<episode>) => {
    const episodio = props.data;
    
    return (
        <div>
            <Episodio data = {episodio} /> 
        </div>
    )
}

export default Page;