import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/navbar";
import Counters from "./components/counters";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  constructor() {
    super();
    console.log("App-component -- Constructor");
  }

  componentDidMount() {
    console.log("App-component -- Mounted");
  }

  handleDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters: counters });
  };

  handleIncrement = counter => {
    const counters = [...this.state.counters]; // Copy of array
    const index = counters.indexOf(counter);
    counters[index] = { ...counter }; // Copy of object
    counters[index].value++;
    this.setState({ counters: counters });
  };

  handleReset = () => {
    const counters = [...this.state.counters];
    counters.forEach(c => (c.value = 0));
    this.setState({ counters: counters });
  };

  render() {
    console.log("App-component -- Rendered");
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
