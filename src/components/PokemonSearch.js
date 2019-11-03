import React from "react";
import axios from "axios";
import "./PokemonSearch.css";

class PokeFind extends React.Component {
  state = {
    isLoading: false,
    name: "",
    weight: "",
    height: "",
    img: "",
    type:'',
    error: null
  };

  async componentDidMount() {
    const id = this.props.match.params.id;

    this.setState({ isLoading: true });

    try {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const data = await res.json();

      this.state.weight = data.weight;
      this.state.height = data.height;
      this.state.name = data.name;
      const ID = data.id;
      this.state.img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${ID}.png`;
      this.state.type = data.types[0].type.name;

      this.setState({ data, isLoading: false });
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  //   componentDidMount() {

  //     var url = "https://pokeapi.co/api/v2/pokemon?offset=50&limit=50";

  //     const id = this.props.match.params.id;

  //     axios
  //     .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
  //     .then(response =>

  //         c

  //       this.state.weight = response.data.weight,
  //       this.state.height = response.data.height
  //     )

  //     .catch(error => this.setState({ error, isLoading: false }));
  //   }

  render() {
    const { isLoading, users, weight, height, name, img, type } = this.state;
    return (
      <React.Fragment>
          
       <div class="slide-container">
  
  <div class="wrapper">
    <div class="clash-card barbarian">
      <div class="clash-card__image clash-card__image--barbarian">
        <img src={img} alt="barbarian" />
      </div>
      <div class="clash-card__level clash-card__level--barbarian">{type}</div>
      <div class="clash-card__unit-name">{name}</div>
      <div class="clash-card__unit-description">
       
      </div>

      <div class="clash-card__unit-stats clash-card__unit-stats--barbarian clearfix">
        <div class="one-third">
          <div class="stat">{height}<sup></sup></div>
          <div class="stat-value">Taille</div>
        </div>

        <div class="one-third">
          <div class="stat">{weight}</div>
          <div class="stat-value">Poids</div>
        </div>

        

      </div>

    </div> 
  </div>
  </div>
      </React.Fragment>
    );
  }
}

export default PokeFind;
