import React, { useEffect, useState } from "react"
import type { DataInterface } from "../../interfaces/child.interfaces";
import { usersData } from "../../commons/data";

export default function States() {
    const [data, setData] = useState<DataInterface[]>(usersData);
    const [filter, setFilter] = useState<string>("");
    

    function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
        setFilter(e.target.value);
    }

    useEffect(() => {

        const timer = setTimeout(() => {
            const filteredData = usersData.filter(user =>
                user.name.toLowerCase().includes(filter.toLowerCase())
            )
            setData(filteredData);
        },300)
        return () => clearTimeout(timer);
    }, [filter]);

    return (
        <div className="w-screen">
            <h2>This is States component</h2>
            <div className="flex items-center w-full my-2">
                <input type="search" className="border p-1 rounded justify-center" placeholder="Search User" onChange={handleSearch} />
            </div>
            <ul>
                {data.map((user) => (
                    <li key={user.id} className="mb-4 p-4 border">
                        <h3 className="text-lg font-bold">{user.name}</h3>
                        <p>Age: {user.age}</p>
                        <p>Marital Status: {user.isMarried ? "Married" : "Single"}</p>
                        <h4 className="font-semibold mt-2">Experiences:</h4>
                        <ul className="list-disc list-inside">
                            {user.experiences.map((exp, index) => (
                                <li key={index}>
                                    {exp.company} - {exp.years} years
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    )
}