import React from 'react'
import type { StatusesInterface } from '../../interfaces/child.interfaces'
function reducer(state: any, action: { type: string }): StatusesInterface {
    switch (action.type) {
        case 'Free':
            return { status: "Free", amount: 0, duration: "2hrs" }
        case 'Premium':
            return { status: "Premium", amount: 100, duration: "24hrs" }
        case 'Enterprise':
            return { status: "Enterprise", amount: 500, duration: "Unlimited" }
        default:
            return state
    }
}

function UserReducer() {
    const initalState = { status: "Free", amount: 0, duration: "2hrs" }
    const [statusState, dispatch] = React.useReducer(reducer, initalState)
    return (
        <div>
            <p>UserReducer </p>
            <div>
                <h2>Current Status: {statusState.status}</h2>
                <h3>Amount: ${statusState.amount}</h3>
                <h3>Duration: {statusState.duration}</h3>
                <button onClick={() => dispatch({ type: "Free" })} className="mr-2 px-4 py-2 bg-green-500 text-white rounded">Free</button>
                <button onClick={() => dispatch({ type: "Premium" })} className="mr-2 px-4 py-2 bg-blue-500 text-white rounded">Premium</button>
                <button onClick={() => dispatch({ type: "Enterprise" })} className="px-4 py-2 bg-purple-500 text-white rounded">Enterprise</button>
            </div>
        </div>
    )
}

export default UserReducer