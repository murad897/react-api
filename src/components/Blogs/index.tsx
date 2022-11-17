import React from "react";
import { fetchBlogs } from "../../slices/blogSlice";
import { connect, ConnectedProps } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { Blog } from "../../types";

const mapStateToProps = (state: RootState) => {
    return {
        blogs: state.blogs.list
    }
}

const mapDispatchToProps = (dispatch: AppDispatch) =>({
    fetchBlogs: () => dispatch(fetchBlogs())
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
        {
          blogs.length > 1 ? blogs.map((item: Blog) => {
            return <h1 key={item.id}>{item.id}</h1>
          }) : <p>loading</p>
        }
       </main>
    );
  }
}


export default connector(Blogs);
