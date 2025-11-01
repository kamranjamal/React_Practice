import React from "react";
import Child from "./Childs"
import { themeContextApi } from "../../contexts/theme.context";

export default function Parent(){
    const theme=React.useContext(themeContextApi)
    console.log("Parent Theme:", theme?.theme);
     function handleClick(data:string) {
        console.log("Data from Child:", data);
        theme?.setTheme(theme.theme==="dark"?"light":"dark")
        // alert("Button clicked in Child Component!");
    }
    const classes = "border p-4 mb-4"
    return (
        <div>
            <h2>Props and this is the data from the parent</h2>
            <Child handleClick={handleClick} classes={classes} message="Hello from Parent!" />
        </div>
    )

}