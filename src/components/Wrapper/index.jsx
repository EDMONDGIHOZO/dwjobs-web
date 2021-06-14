import React, { Component } from "react";
import Header from "../Headers/Header";

class Wrapper extends Component {
  state = {};

  render() {
    return (
      <>
        <main className="bg-white relative h-full overflow-hidden">
          <Header />
          <div className="w-full flex self-start my-8 px-20">
            {this.props.children}
          </div>
        </main>
      </>
    );
  }
}

export default Wrapper;
