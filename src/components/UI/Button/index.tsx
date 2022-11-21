import React from "react";
import './Button.module.css';
import { ButtonProps } from "../../../types";
import { connect, ConnectedProps } from "react-redux";
import { AppDispatch } from "../../../store";
import { chooseLimit } from "../../../slices/blogSlice";

const mapDispatchToProps = (dispatch: AppDispatch) =>({
  chooseLimit: () => dispatch(chooseLimit(value))
}) 

const connector = connect(null, mapDispatchToProps);
type IProps = ConnectedProps<typeof connector>;
export class Button extends React.Component<ButtonProps & IProps> {
  render() {
    const { value } = this.props
    return (
      <button>{ value }</button>
    );
  }
}



export default connector(Button);
