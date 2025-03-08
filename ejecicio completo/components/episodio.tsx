import { FunctionalComponent } from "preact/src/index.d.ts";

type epidioDatos = {
    name:string;
    air_date:string;
    episode:string
    characters:string[]
}
export type data = {
    data:epidioDatos;
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
                <p>air_date: {datos.air_date}</p>
                <p>Episodio: {datos.episode}</p>
                <ul>
                    {datos.characters.map(elem => {
                        return (<li><a href={`/character/${elem.split('/').pop()}`}>Personaje: {elem.split('/').pop()}</a></li>)
                    })}
                </ul>
            </div>
        </div>
    )
}