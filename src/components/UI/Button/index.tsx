import React from "react";
import './Button.module.css';
import { ButtonProps } from "../../../types";

export class Button extends React.Component<ButtonProps> {
  render() {
    const { value } = this.props
    return (
      <button>{ value }</button>
    );
  }
}
