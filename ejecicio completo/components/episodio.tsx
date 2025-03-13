import { FunctionalComponent } from "preact/src/index.d.ts";

export type data = {
    data:epidioDatos;
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

type epidioDatos = {
    id:string
    name:string;
    air_date:string;
    episode:string
    characters:charac[]
}


export const Episodio:FunctionalComponent<data> = (data) => {
    const datos:epidioDatos = data.data;
    
    return (
        <div>
            <div class = "cabecera">
                <h1>{datos.name}</h1>
                <a href="/"><img class = "casa" src="/casa.png" alt="foto" /></a>
            </div>
            <div>
                <p>Fecha de salida: {datos.air_date}</p>
                <p>Episodio: {datos.episode}</p>
                <ul>
                    {datos.characters.map(elem => {
                        return (<li><a href={`/character/${elem.id}`}>Personaje: {elem.name}</a></li>)
                    })}
                </ul>
            </div>
        </div>
    )
}