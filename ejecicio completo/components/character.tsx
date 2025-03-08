import { FunctionalComponent } from "preact/src/index.d.ts";

type character = {
    name: string;
    image:string;
    
}

export const Character: FunctionalComponent<character> = (character)=> {

    return (
        <div class="caja">
            <h2>{character.name}</h2>
            <img src={character.image} alt="foto" />
        </div>
    );
} 

export default Character;