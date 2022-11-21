import React from "react";
import { Button } from "../UI/Button";
import styles from  './Header.module.css';

export class Header extends React.Component<{}, {buttons: {value: number, active?:boolean}[]}> {
    constructor(props:never) {
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
             return <Button key={button.value} value={button.value}/>
         })}
       </header>
    );
  }
}
