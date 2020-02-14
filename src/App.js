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

  componentDidMount() {
    //shuffle
  };

  shuffleMutants = () => {
    //shuffle
    // this.state.mutants.sort((a,b) => Math.random -.5)
  }

  clickMutant = mutant => {

    const { id, clicked } = mutant;

    if (clicked) {
      //loop thru this.state.mutants and for each element change clicked to false
      //shuffle

      //set score to 0
      this.setState(
        {
          score: 0,
          topScore: this.state.score,
        }
      )



      // let index = mutants.findIndex(mutant => id === mutant.id)
      // console.log("Index: " + mutants.findIndex(mutant => id === mutant.id))

      // // set mutants[index].clicked = true
      // mutants[index].clicked = false
      // console.log("Clicked: " + mutants[index].clicked)

    } else {

      //set mutant.clicked = true
      let index = mutants.findIndex(mutant => id === mutant.id)
      console.log("Index: " + mutants.findIndex(mutant => id === mutant.id))
      mutants[index].clicked = true
      console.log("Clicked: " + mutants[index].clicked)

      //increment score
      this.setState(
        {
          score: this.state.score + 1
        }
      )

      //change topscore if score is greater than or equal topscore
      if (this.state.score >= this.state.topScore) {
        this.setState(
          {
            topScore: this.state.topScore + 1
          }
        )
      }

      //shuffle
      this.setState({mutants: this.state.mutants.sort(() => Math.random() - 0.5)});
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
