import React, { Component } from "react";

class AuthWrapper extends Component {
  state = {};

  render() {
    return (
      <>
        <main className="bg-gray-50 relative h-screen p-4 overflow-hidden">
          {this.props.children}
        </main>
      </>
    );
  }
}

export default AuthWrapper;
