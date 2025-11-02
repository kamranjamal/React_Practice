import Parent from "./components/props/parent";
import Ref from "./components/refs/Ref";
import States from "./components/useEffectuseState/States";
import UserReducer from "./components/useReducer/userreducer";

export default function App() {


  return <div className="my-2 mx-2"> 
   <Parent/> 
   <States/>
   <UserReducer></UserReducer>
   <hr className="my-3" />
   <Ref/>
    </div>;
}