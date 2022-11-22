import React from "react";
import './Button.module.css';
import { ButtonProps } from "../../../types";

export class Button extends React.Component<ButtonProps> {
  render() {
    const { value } = this.props
    return (
      <button onClick={() => {
        this.props.chooseLimit(value)
        this.props.fetchBlogs(1, value)
        this.props.changeCurrentPage()
      } }>{ value }</button>
    );
  }
}

export default Button;
