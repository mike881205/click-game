import React, { Component } from "react";
import Mutant from "./components/Mutant";
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

  clickMutant = mutant => {
    const {id, clicked} = mutant;
    if (clicked) {
      this.lose()
    } else {
      // copy of the state
      const mutants = [...this.state.mutants];
      // use findIndex with id to find the index of the mutant clicked
      let index = mutants.findIndex(mutant => id === mutant.id)
      console.log(mutants.findIndex(mutant => id === mutant.id))
      // set mutants[index].clicked = true
      mutants[index].clicked = true
      console.log(mutants[index].clicked)
      // setState({mutants})
      this.setState({mutants})
    }
  }


  lose = () => {
    this.setState(
      {
        score: 0,
        topScore: this.state.score,
        clicked: false
      }
    )
    console.log("Lose")
  }

  // Map over this.state.mutants and render a Mutants component for each mutant object
  render() {
    return (
      <Wrapper>
        <Title>Mutants</Title>
        {this.state.mutants.map(mutant => (
          <Mutant
            handleClick={()=>this.clickMutant(mutant)}
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
