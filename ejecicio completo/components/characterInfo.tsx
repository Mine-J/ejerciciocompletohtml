import { FunctionalComponent } from "preact/src/index.d.ts";

type charac = {
    name:string;
    image:string;
    gender:string;
    status:string;
    species:string;
    origin:{name:string};
    episode:string[]
}
export type data = {
    results:charac
}

export const CharacterInfo:FunctionalComponent<data> = (data)=> {

    return (
        <div>
            <h1>{data.results.name}</h1>
            <table>
                <tr>
                    <td>
                        <img src={data.results.image} alt="foto" />
                    </td>
                    <td>
                        <p>Genero: {data.results.gender}</p>
                        <p>Origen: {data.results.origin.name}</p>
                        <p>Especie: {data.results.species}</p>
                        <p>Estatus: {data.results.status}</p>
                    </td>
                </tr>
            </table>
            <ul>
                {data.results.episode.map((elem, index) => (
                    <li key={index}>{elem}</li>
                ))}
            </ul>
        </div>
    )
}