import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import {Character} from "../components/characterNamePhoto.tsx"
import Axios from 'npm:axios';

type character = {
  name: string;
  image:string;
  info:{pages:string}
  page:number
}
export const handler: Handlers = {
  GET: async (req: Request, ctx: FreshContext<unknown, character>) => {
      try {
          const url = new URL(req.url);
          const page = parseInt(url.searchParams.get("page") || "1");
          
          const charac = await Axios.get<character>(`https://rickandmortyapi.com/api/character?page=${page}`)
            charac.data.page = page;
          return ctx.render(charac.data);
      } catch (error) {
          console.error(error);
          throw new Error("Error fetching data");
      }
  },
};
const Page = (props:PageProps<character>) => {
  const charac = props.data;
  
  return (
    <div >
      <div class= "contenedor">
        {charac.results.map(elem => (
          <Character name={elem.name} image={elem.image} id={elem.id}/>
        ))}
      </div>
      <br />
      <div class="pasarPagina">
        {charac.page>1  && (<a href={`/?page=${charac.page - 1}`}><button><img class="pasoPagina" src="/atras.png" alt="anterior página" /></button></a>)}
        {charac.page <= charac.info.pages && (<a href={`/?page=${charac.page + 1}`}><button><img class="pasoPagina" src="/siguiente.png" alt="anterior página" /></button></a>)}
      </div>
      
      
    </div>
  );
}

export default Page;
