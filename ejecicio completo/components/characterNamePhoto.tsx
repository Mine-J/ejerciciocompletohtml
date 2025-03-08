import { FunctionalComponent } from "preact/src/index.d.ts";

type character = {
    id:string;
    name: string;
    image:string;
    
}

export const Character: FunctionalComponent<character> = (character)=> {

    return (
        <div class="caja">
            <a href={`/character/${character.id}`}>
                <h2>{character.name}</h2>
                <img src={character.image} alt="foto" />
            </a>
            
        </div>
    );
} 

export default Character;