import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { chooseLimit,  changeCurrentPage } from "../../slices/blogSlice";
import { AppDispatch, RootState } from "../../store";
import { ButtonsProps, HeaderProps } from "../../types";
import { Button } from "../UI/Button";
import styles from  './Header.module.css';
import { fetchBlogs } from "../../slices/blogSlice";

const mapStateToProps = (state: RootState) => {
  return {
    limit: state.blogs.limit,
  }
}

const mapDispatchToProps = (dispatch : AppDispatch) => {
  return {
    chooseLimit: (value: number) => dispatch(chooseLimit(value)),
    fetchBlogs: (page:number, limit:number) => dispatch(fetchBlogs({page, limit})),
    changeCurrentPage: () => dispatch( changeCurrentPage()),
    dispatch
  }
}

const connector = connect(mapStateToProps, mapDispatchToProps);

class Header extends React.Component<HeaderProps, { buttons: ButtonsProps[]  }> {
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
              return <Button key={button.value} value={button.value} chooseLimit={this.props.chooseLimit} fetchBlogs={this.props.fetchBlogs}  changeCurrentPage={this.props.changeCurrentPage}/>
         })}
       </header>
    );
  }
}

export default connector(Header);
