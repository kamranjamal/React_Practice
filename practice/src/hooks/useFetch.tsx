import React from 'react'

function useFetch(url:string) {
    const [data,setData]=React.useState<any>(null);
    const [loading,setLoading]=React.useState<boolean>(true);
    const [error,setError]=React.useState<string |null>(null);

    async function fetchData(){
        try {
            setLoading(true);
            const response=await fetch(url)
            const json=await response.json();
            setData(json);
            setLoading(false);
        } catch (error) {
            
            setError("Error fetching data");
            setLoading(false);
            console.error("Error fetching data:",error);
        }
    }

    React.useEffect(()=>{
        fetchData();

    },[url]);
  return {data,loading,error};
}

export default useFetch