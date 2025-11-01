import type { DataInterface } from "../interfaces/child.interfaces";

export const usersData:DataInterface[]=[
    {
        name:"John Doe",
        age:30,
        isMarried:false,
        experiences:[
            {company:"Company A", years:3},
            {company:"Company B", years:2}
        ],
        id:1
    },
    {
        name:"Jane Smith",
        age:28,
        isMarried:true,
        experiences:[
            {company:"Company C", years:4},
            {company:"Company D", years:1}
        ],
        id:2
    },
    {
        name:"Alice Johnson",
        age:35,
        isMarried:true,
        experiences:[
            {company:"Company E", years:5},
            {company:"Company F", years:3}
        ],
        id:3
    },
    {
        name:"Bob Brown",
        age:40,
        isMarried:false,
        experiences:[
            {company:"Company G", years:6},
            {company:"Company H", years:2}
        ],
        id:4
    }
]