export interface ChildProps {
    message: string;
    classes: string;
    handleClick: (data:string) => void;
}

export interface DataInterface {
    name: string;
    age: number;
    isMarried: boolean;
    experiences: {
        company: string;
        years: number;
    }[],
    id: number;


    
}
export interface StatusesInterface{
    status:string;
    amount:number;
    duration:string;
}