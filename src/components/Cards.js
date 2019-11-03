import React from "react";
import './Cards.css'

const PokeCard = ({ img, title }) => (
  <>
    <div class="cards-list">
        <div class="card 1">
            <div class="card_image"> 
                <img src={img} alt="" /> 
            </div>
            <div class="card_title title-white">
                <p>{title}</p>
            </div>
        </div>
    </div>
  </>
);



export default PokeCard;



