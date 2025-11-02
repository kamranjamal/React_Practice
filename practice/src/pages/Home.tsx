import { Link } from "react-router";
import Parent from "../components/props/parent";
import Ref from "../components/refs/Ref";
import States from "../components/useEffectuseState/States";
import UserReducer from "../components/useReducer/userreducer";
import UseCallback from "../hooks/useCallback";

export default function Home() {


    return <div className="my-2 mx-2">
        <nav>
            <ul>
                <li><Link to={'/home'}>Home</Link></li>
                <li><Link to={'/contact'}>Contact</Link></li>
                <li><Link to={'/about'}>About</Link></li>
                <li><Link to={'/dashboard'}>Dashboard</Link></li>
                <li><Link to={'/products'}>Products</Link></li>
            </ul>

        </nav>
        <Parent />
        <States />
        <UserReducer></UserReducer>
        <hr className="my-3" />
        <Ref />
        <hr className="my-3"/>
        <UseCallback/>
    </div>;
}