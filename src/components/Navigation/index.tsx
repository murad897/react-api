import React from "react";
import styles from  './Navigation.module.css';

export class Navigation extends React.Component {
    render() {
      return (
       <div className={styles.navigation}>
         <button>Prev</button>
           <p>Show 1-8 of 1243</p>
         <button>Next</button>
       </div>
      );
    }
}
  