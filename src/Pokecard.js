import React from 'react'; 

const pokeImgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/`;

const Pokecard = (props) => {
    let img = pokeImgUrl + `${props.id}.png`;
    return (
        <div className="card card-width">
            <img src={img} alt="" className="card-img-top" />
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">type: {props.type}</p>
                <p className="card-text">experience: {props.exp}</p>
            </div>
        </div>

    );
}

export default Pokecard;