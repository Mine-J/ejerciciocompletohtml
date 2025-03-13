import { FunctionalComponent } from "preact/src/index.d.ts";

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
    id:string;
    name:string;
    air_date:string;
    episode:string
    characters:charac[]
}

export type data = {
    results:charac
}

export const CharacterInfo:FunctionalComponent<data> = (data)=> {

    return (
        <div>
            <header>
                <a href="/"><img  class = "casa" src="/casa.png" alt="foto" /></a>
            </header>
            <div class="contenido"> 
                <h1>{data.results.name}</h1>
                
            
                <table>
                    <tr>
                        <td>
                            <img class = "imagen" src={data.results.image} alt="foto" />
                        </td>
                        <td>
                            <p>Genero: {data.results.gender}</p>
                            <p>Origen: {data.results.originName}</p>
                            <p>Especie: {data.results.species}</p>
                            <p>Estatus: {data.results.status}</p>
                        </td>
                    </tr>
                </table>
                <ul>
                    {data.results.episode.map((elem) => (
                        <li><a href={`/episodes/${elem.id}`}>Episodio {elem.id}: {elem.name}</a></li>
                    ))}
                </ul>
            </div >
        </div>
    )
}