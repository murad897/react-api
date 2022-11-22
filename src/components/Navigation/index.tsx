import React from "react";
import styles from  './Navigation.module.css';
import { RootState } from "../../store";
import { AppDispatch } from "../../store";
import { fetchAllBlogs, nextPage, prevPage, showCurrentPage } from "../../slices/blogSlice";
import { connect,ConnectedProps } from "react-redux";
import { fetchBlogs } from "../../slices/blogSlice";

const mapStateToProps = (state: RootState) => {
  return {
    fullArrayLength: state.blogs.fullArrayLength,
    page: state.blogs.page,
    limit: state.blogs.limit,
    show: state.blogs.show
  }
}

const mapDispatchToProps = (dispatch: AppDispatch) =>({
  fetchAllBlogs: () => dispatch(fetchAllBlogs()),
  fetchBlogs: (page:number, limit:number) => dispatch(fetchBlogs({page, limit})),
  nextPage: () => dispatch(nextPage()),
  showCurrentPage: () => dispatch(showCurrentPage()),
  prevPage: () => dispatch(prevPage()),
  dispatch
}) 

const connector = connect(mapStateToProps, mapDispatchToProps);

type IProps = ConnectedProps<typeof connector>;

class Navigation extends React.Component<IProps> {
    componentDidMount() {
      this.props.fetchAllBlogs()
      this.props.showCurrentPage()
    }
    componentDidUpdate(prev: IProps) {
      if (prev.page !== this.props.page) {
        this.props.fetchBlogs(this.props.page, this.props.limit)
      }
    }
    
    render() {
      console.log(this.props.page)
      return (
       <div className={styles.navigation}>
         <button onClick={() => {
          this.props.prevPage()
         }}>Prev</button>
           <p>Show {this.props.show} of {this.props.fullArrayLength.length}</p>
         <button onClick={() => {
          this.props.nextPage()
         }}>Next</button>
       </div>
      );
    }
}
  
export default connector(Navigation);
