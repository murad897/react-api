import React from "react";
import { Button } from "../UI/Button";
import styles from  './Header.module.css';

export class Header extends React.Component {
  render() {
    return (
     <header className={styles.header}>
       <p>Items per page</p>
       <Button value={8}/>
       <Button value={16}/>
       <Button value={32}/>
     </header>
    );
  }
}
