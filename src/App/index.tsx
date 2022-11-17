import React from "react";
import Blogs from "../components/Blogs";
import { Header } from "../components/Header";

export class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Blogs />
      </div>
    );
  }
}
