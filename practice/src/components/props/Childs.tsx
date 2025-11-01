import {useContext, useEffect} from "react"
import type { ChildProps } from "../../interfaces/child.interfaces"
import { themeContextApi } from "../../contexts/theme.context";

export default function Child(props:ChildProps) {
    const theme=useContext(themeContextApi)
    console.log("Current Theme:", theme?.theme);
    let data="passing to parent "

    useEffect(() => {
        console.log("Child component mounted");
       
    }, []);
    return (
        <div className={`${props.classes, theme?.theme==="dark"?"bg-gray-800 text-white":"bg-white text-black"}`}>
            <h2>Child Component data coming from parents</h2>
            <p>{props.message}</p>

            <button onClick={()=>(props.handleClick(data))} className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">
                Click Me
            </button>
        </div>
    )
}