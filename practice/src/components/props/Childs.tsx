import {useEffect} from "react"
import type { ChildProps } from "../../interfaces/child.interfaces"

export default function Child(props:ChildProps) {
    let data="passing to parent "

    useEffect(() => {
        console.log("Child component mounted");
        props.handleClick(data)
    }, []);
    return (
        <div className={props.classes}>
            <h2>Child Component data coming from parents</h2>
            <p>{props.message}</p>

            <button onClick={()=>(props.handleClick(data))} className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">
                Click Me
            </button>
        </div>
    )
}