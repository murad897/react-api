import React from "react";
import styles from  './Blog.module.css';
import { Blog } from "../../types";

export class BlogBox extends React.Component<Blog> {
    render() {
    const {title, url} = this.props;
      return (
       <div className={styles.blog}>
           <img className={styles.blogImage} src={url}/>
           <p className={styles.description}>{title}</p>
       </div>
      );
    }
}
  