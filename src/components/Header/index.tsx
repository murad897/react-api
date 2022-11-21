import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { chooseLimit } from "../../slices/blogSlice";
import { AppDispatch, RootState } from "../../store";
import { HeaderProps } from "../../types";
import { Button } from "../UI/Button";
import styles from  './Header.module.css';


const mapStateToProps = (state: RootState) => {
  return {
    limit: state.blogs.limit,
  }
}

const mapDispatchToProps = (dispatch : AppDispatch) => {
  return {
    chooseLimit: (value: number) => dispatch(chooseLimit(value)),
    dispatch
  }
}

const connector = connect(mapStateToProps, mapDispatchToProps);

class Header extends React.Component<HeaderProps, { buttons: { value: number, active?:boolean}[] }> {
    constructor(props:HeaderProps) {
        super(props);
        this.state = {
            buttons: [{value:8},{value:16},{value: 32}]
        };
    }
    render() {
      return (
       <header className={styles.header}>
         <p>Items per page</p>
         {this.state.buttons.map(button => {
              return <Button key={button.value} value={button.value} chooseLimit={this.props.chooseLimit} />
         })}
       </header>
    );
  }
}


export default connector(Header);
