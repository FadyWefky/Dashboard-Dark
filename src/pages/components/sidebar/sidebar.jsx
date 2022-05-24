import React,{useContext} from 'react';
import './sidebar.scss';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import GroupIcon from '@mui/icons-material/Group';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import QueryStatsOutlinedIcon from '@mui/icons-material/QueryStatsOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import {Link} from "react-router-dom";
import { DarkModeContext } from '../../../context/darkModeContext';



const Sidebar = () => {
    const {dispatch}= useContext(DarkModeContext)


    return (
        <div className="sidebar">
            <div className="top">
                <Link to="/" style={{textDecoration: "none"}} ><span className="logo">Fady admin</span></Link>
                
            </div>
            <hr />
            <div className="center">
                <ul>
                    <p className="title">MAIN</p>
                    <li>
                        <DashboardCustomizeIcon className='icon' />
                        <span>Dashboard</span>
                    </li>
                    <p className="title">LISTS</p>
                    <Link to="/users" style={{textDecoration: "none"}} >
                    <li>
                        <GroupIcon className='icon'/>
                        <span>Users</span>
                    </li>
                    </Link>
                    <Link to="/products" style={{textDecoration: "none"}} >
                    <li>
                        <CategoryOutlinedIcon className='icon'/>
                        <span>Products</span>
                    </li>
                    </Link>
                    <li>
                        <BookmarkBorderOutlinedIcon className='icon'/>
                        <span>Orders</span>
                    </li>
                    <li>
                        <LocalShippingIcon className='icon'/>
                        <span>Delivey</span>
                    </li>
                    <p className="title">USEFUL</p>

                    <li>
                        <QueryStatsOutlinedIcon className='icon'/>
                        <span>Stats</span>
                    </li>
                    <li>
                        <NotificationsActiveOutlinedIcon className='icon'/>
                        <span>Notifications</span>
                    </li>
                    <p className="title">SERVICE</p>
                    <li>
                        <FavoriteBorderOutlinedIcon className='icon'/>
                        <span>System Health</span>
                    </li>
                    <li>
                        <PsychologyOutlinedIcon className='icon'/>
                        <span>Logs</span>
                    </li>
                    <li>
                    <AdminPanelSettingsIcon className='icon'/>
                        <span>Settings</span>
                    </li>
                    <p className="title">USER</p>

                    <li>
                        <AccountCircleIcon className='icon'/>
                        <span>Profile</span>
                    </li>
                    <li>
                        <LogoutIcon className='icon'/>
                        <span>Logout</span>
                    </li>
                </ul>
            </div>
            <div className="bottom">
                <div className="coloroption" onClick={()=>dispatch({type:"LIGHT"})}></div>
                <div className="coloroption" onClick={()=>dispatch({type:"DARK"})}></div>
            </div>
        </div>
    )
}

export default Sidebar;