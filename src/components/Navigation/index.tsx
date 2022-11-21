import React from "react";
import styles from  './Navigation.module.css';
import { RootState } from "../../store";
import { AppDispatch } from "../../store";
import { fetchAllBlogs } from "../../slices/blogSlice";
import { connect,ConnectedProps } from "react-redux";

const mapStateToProps = (state: RootState) => {
  return {
    fullArrayLength: state.blogs.fullArrayLength,
  }
}

const mapDispatchToProps = (dispatch: AppDispatch) =>({
  fetchAllBlogs: () => dispatch(fetchAllBlogs())
}) 

const connector = connect(mapStateToProps, mapDispatchToProps);

type IProps = ConnectedProps<typeof connector>;

class Navigation extends React.Component<IProps> {
    componentDidMount() {
      this.props.fetchAllBlogs()
    }
    render() {
      return (
       <div className={styles.navigation}>
         <button>Prev</button>
           <p>Show 1-8 of {this.props.fullArrayLength.length}</p>
         <button>Next</button>
       </div>
      );
    }
}
  
export default connector(Navigation);
