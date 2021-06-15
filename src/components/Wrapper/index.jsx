import React, { Component } from "react";
import Header from "../Headers/Header";

class Wrapper extends Component {
  state = {};

  render() {
    return (
      <>
        <main className="bg-gray-50 relative h-full overflow-hidden">
          <Header />
          <div className="w-full flex self-start min-h-screen my-8 md:px-20">
            {this.props.children}
          </div>
        </main>
      </>
    );
  }
}

export default Wrapper;
