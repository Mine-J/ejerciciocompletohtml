import { Handlers,FreshContext, PageProps } from "$fresh/server.ts";
import Axios from "npm:axios";
import { Episodio } from "../../components/episodio.tsx";




type episodeApi = {
    id:string
    name:string;
    air_date:string;
    episode:string
    characters:string[]
}

type charac = {
    id:string;
    name:string;
    image:string;
    gender:string;
    status:string;
    species:string;
    originName:string;
    episode:string[]
}

type episode = {
    id:string
    name:string;
    air_date:string;
    episode:string
    characters:charac[]
}

export const handler: Handlers = {
    GET: async (_req: Request, ctx: FreshContext<unknown, episode>) => {
        const { numero } = ctx.params;
        try {
            const episodeApi = await Axios.get<episodeApi>(`https://rickandmortyapi.com/api/episode/${numero}`);
            const episode: episode = {
                id: episodeApi.data.id.toString(), // Convertir id a cadena
                name: episodeApi.data.name,
                air_date: episodeApi.data.air_date,
                episode: episodeApi.data.episode,
                characters: await Promise.all(episodeApi.data.characters.map(async (elem) => {
                    const character = await Axios.get<charac>(elem);
                    return character.data;
                }))
            };
            console.log(episode);
            return ctx.render(episode);
        } catch (error) {
            console.error('Error fetching episode data:', error);
            return new Response('Error fetching episode data', { status: 500 });
        }
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