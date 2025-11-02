import {useEffect,useState} from 'react';
export default function Calculation({calculateNumber}:{calculateNumber:(num:number)=>number[]}) {
    const [counts,setCounts]=useState<number[]>([])
    useEffect(()=>{
        setCounts(calculateNumber(1))
        console.log("Calculation Component Rendered")
    },[calculateNumber])

    return(<div>
        <h1>Calculated Numbers:</h1>
        <ul>
            {counts.map((num,index)=><li key={index}>{num}</li>)}
        </ul>
    </div>
    )
}