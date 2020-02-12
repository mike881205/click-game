import React, { Component } from "react";
import Mutants from "./components/Mutants";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import mutants from "./mutants.json";

class App extends Component {
  // Setting this.state.mutants to the mutants json array
  state = {
    mutants,
    score: 0,
    topScore: 0
  };

  clickHandler = () => {
    
  }

  lose = () => {
    this.setState(
      {
        score: 0,
        topScore: this.state.score
      }
    )
  }

  // Map over this.state.mutants and render a Mutants component for each mutant object
  render() {
    return (
      <Wrapper>
        <Title>Mutants</Title>
        {this.state.mutants.map(mutant => (
          <Mutants
            id={mutant.id}
            key={mutant.id}
            image={mutant.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
