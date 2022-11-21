import React from "react";
import { fetchBlogs } from "../../slices/blogSlice";
import { connect, ConnectedProps } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { Blog } from "../../types";
import { BlogBox } from "../Blog";
import styles from  './Blogs.module.css';
import  Navigation  from "../Navigation";

const mapStateToProps = (state: RootState) => {
    return {
        blogs: state.blogs.list,
    }
}

const mapDispatchToProps = (dispatch: AppDispatch) =>({
    fetchBlogs: () => dispatch(fetchBlogs({ page:1, limit:32 }))
}) 

const connector = connect(mapStateToProps, mapDispatchToProps);
type IProps = ConnectedProps<typeof connector>;

class Blogs extends React.Component<IProps> {
    componentDidMount() {
      this.props.fetchBlogs()
    }
    
    render() {
      const { blogs } = this.props;
      return (
       <main>
        <Navigation />   
        <div className={styles.blogsContainer}>
        {
          blogs.length > 1 ? blogs.map((item: Blog) => {
            return <BlogBox key={item.id} id={item.id} title={item.title} url={item.url}/>
          }) : <p>loading</p>
        }
        </div>   
        <Navigation />   
       </main>
    );
  }
}

export default connector(Blogs);
