import React from "react";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
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
        limit: state.blogs.limit
    }
}

const mapDispatchToProps = (dispatch: AppDispatch) =>({
    fetchBlogs: () => dispatch(fetchBlogs({ page:1, limit:8 }))
}) 

const connector = connect(mapStateToProps, mapDispatchToProps);
type IProps = ConnectedProps<typeof connector>;

class Blogs extends React.Component<IProps> {
    componentDidMount() {
      setTimeout(() => {
        this.props.fetchBlogs()
      },700)
    }
    
    render() {
      const { blogs } = this.props;
      return (
       <main>
        <Navigation />   
        <div >
        {
          blogs.length > 1 ? 
          <div className={styles.blogsContainer}>
            {
               blogs.map((item: Blog) => {
                return <BlogBox key={item.id} id={item.id} title={item.title} url={item.url}/>
              })
            }
          </div>
          : 
          <div className="skeleton-container">
             <Skeleton width={242} height={270} count={this.props.limit}/>
          </div>
        }
        </div>   
        <Navigation />   
       </main>
    );
  }
}

export default connector(Blogs);
