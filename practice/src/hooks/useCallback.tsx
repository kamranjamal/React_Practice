import { useCallback, useContext, useState } from "react";
import Calculation from "../components/Calculation";
import { themeContextApi } from "../contexts/theme.context";

export default function UseCallback() {
    const [count, setCount] = useState<number>(0);
    const theme=useContext(themeContextApi)
     const  calculateNumber=useCallback((inc: number) =>{
        return [count + 1 + inc, count + 3 + inc, count + 5 + inc];
    }, [count]);

    function toggleTheme() {
        console.log("Toggling Theme");
        theme?.setTheme(theme.theme === "dark" ? "light" : "dark");
    }

    return <div className={`p-4 ${theme?.theme==="dark"?"bg-gray-800 text-white":"bg-white text-black"}`}>
        <button onClick={toggleTheme} className="bg-gray-200 p-1 rounded hover:bg-gray-300 cursor-pointer">Change Theme</button>
        <button
            onClick={() => setCount(count + 1)}
            className="bg-blue-500 text-white p-2 rounded ml-2 hover:bg-blue-600 cursor-pointer"
        >
            Cal
        </button>
        <Calculation calculateNumber={calculateNumber} />
    </div>;
}