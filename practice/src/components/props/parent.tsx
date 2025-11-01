import Child from "./Childs"

export default function Parent(){
     function handleClick(data:string) {
        console.log("Data from Child:", data);
        alert("Button clicked in Child Component!");
    }
    const classes = "border p-4 mb-4"
    return (
        <div>
            <h2>Props and this is the data from the parent</h2>
            <Child handleClick={handleClick} classes={classes} message="Hello from Parent!" />
        </div>
    )

}