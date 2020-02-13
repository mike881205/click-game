import React, { Component } from "react";
import Mutant from "./components/Mutant";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Scores from "./components/Scores";
import mutants from "./mutants.json";

class App extends Component {
  // Setting this.state.mutants to the mutants json array
  state = {
    mutants,
    score: 0,
    topScore: 0
  };

  clickMutant = mutant => {

    const { id, clicked } = mutant;

    if (clicked) {

      let index = mutants.findIndex(mutant => id === mutant.id)
      console.log("Index: " + mutants.findIndex(mutant => id === mutant.id))

      // set mutants[index].clicked = true
      mutants[index].clicked = false
      console.log("Clicked: " + mutants[index].clicked)

      this.setState(
        {
          score: 0,
          topScore: this.state.score,
          mutants
        }
      )

    } else {

      // copy of the state
      const mutants = [...this.state.mutants];

      // use findIndex with id to find the index of the mutant clicked
      let index = mutants.findIndex(mutant => id === mutant.id)
      console.log("Index: " + mutants.findIndex(mutant => id === mutant.id))

      // set mutants[index].clicked = true
      mutants[index].clicked = true
      console.log("Clicked: " + mutants[index].clicked)

      this.setState(
        {
          mutants,
          score: this.state.score + 1
        }
      )
      console.log("Score: " + this.state.score)
    }
  }

  // Map over this.state.mutants and render a Mutants component for each mutant object
  render() {
    return (
      <Wrapper>
        <Title>Make Mutants Great Again!</Title>
        <Scores score={this.state.score} topScore={this.state.topScore} />
        {this.state.mutants.map(mutant => (
          <Mutant
            handleClick={() => this.clickMutant(mutant)}
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
