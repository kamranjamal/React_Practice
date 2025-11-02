import React from 'react'
import { Link, Outlet } from 'react-router'

function Dashboard() {
  return (
    <div className='flex gap-3'>
        
        <div className='flex flex-col gap-3'>
            <Link to={'rewards'}>Rewards</Link>
            <Link to={'members'}>Members</Link>
            <Link to={'settings'}>Settings</Link>

        </div>
        <div>
            <Outlet></Outlet>
        </div>
    </div>
  )
}

export default Dashboard