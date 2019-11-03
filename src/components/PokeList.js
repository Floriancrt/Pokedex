import React from "react";
import { loadOptions } from "@babel/core";
import Loader from "./Loader";
import axios from "axios";
import "./PokeList.css";
import PokeCard from "./Cards";

class PokeList extends React.Component {
  state = {
    isLoading: false,
    users: [],
    error: null
  };

  componentDidMount() {
    var url = "https://pokeapi.co/api/v2/pokemon?offset=50&limit=50";

    this.setState({ isLoading: true});

    axios
      .get(url)
      .then(response =>
        response.data.results.map(
          (user, n, url, p, name) => (
             n = `${user.name}`,
             user = `${user.url}`,
             url = user.split("/")[6],
             p = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${url}.png`,
             
            {
              name: n,
              username: user,
              pics: p
            }
          )
        )
      )

      .then(users => {
        this.setState({
          users,
          isLoading: false
        });
      })
      .catch(error => this.setState({ error, isLoading: false }));
  }

  render() {
    const { isLoading, users } = this.state;
    return (
      <React.Fragment>
        <div>
          {users.map(user => {
            const { name, pics } = user;

            return (
              <div className="row" >
                <PokeCard img={pics} title={name} key={name}/>
              
              </div>
            );
          })}
        </div>
      </React.Fragment>
    );
  }
}

export default PokeList;
