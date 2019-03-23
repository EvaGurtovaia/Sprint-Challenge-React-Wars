
import React from 'react';
import './StarWars.css'

const CharacterCard = props =>{ 
    return( 
       <li className="character">
            <div className="list">
                <h1><span>Name:</span> {props.name}</h1>
                <h1><span>Gender: </span> {props.gender}</h1>
                <h1><span>Birth Year:</span>  {props.birth_year}</h1>
                <h1><span>Hair Color: </span> {props.hair_color}</h1>
                <h1><span>Eye Color:</span>  {props.eye_color}</h1>
                <h1><span>Skin Color:</span>  {props.skin_color}</h1>
                <h1><span>Mass:</span>  {props.mass}</h1>
            </div>
        </li>
    )
}
export default CharacterCard;