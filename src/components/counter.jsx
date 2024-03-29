import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    console.log(`Counter-component ${props.counter.id} -- Constructor`);
  }

  componentDidMount() {
    console.log(`Counter-component ${this.props.counter.id} -- Mounted`);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Previous props", prevProps);
    console.log("Previous state", prevState);
  }

  componentWillUnmount() {
    console.log(`Counter-component ${this.props.counter.id} -- Unmount`);
  }

  render() {
    console.log(`Counter-component ${this.props.counter.id} -- Rendered`);
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  formatCount() {
    return this.props.counter.value === 0 ? "Zero" : this.props.counter.value;
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }
}

export default Counter;
