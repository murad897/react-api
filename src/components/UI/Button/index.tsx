import React from "react";
import './Button.module.css';
import { ButtonProps } from "../../../types";

export class Button extends React.Component<ButtonProps> {
  componentDidMount() {
    console.log(this.props)
  }
  render() {
    const { value } = this.props
    return (
      <button onClick={() => this.props.chooseLimit(value)}>{ value }</button>
    );
  }
}

export default Button;
