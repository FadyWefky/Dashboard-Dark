import React, {useContext} from 'react';
import './navbar.scss';
import ScreenSearchDesktopOutlinedIcon from '@mui/icons-material/ScreenSearchDesktopOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import NightlightOutlinedIcon from '@mui/icons-material/NightlightOutlined';
import FullscreenOutlinedIcon from '@mui/icons-material/FullscreenOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import {DarkModeContext} from "../../../context/darkModeContext";

const Navbar = () => {

    const {dispatch}= useContext(DarkModeContext)


    return (
        <div className="navbar">
            <div className="wrapper">
                <div className="search">
                    <input type="text" placeholder='Search...' />
                    <ScreenSearchDesktopOutlinedIcon/>
                </div>
                <div className="items">
                    <div className="item">
                        <LanguageOutlinedIcon className='icon' />
                        Arabic
                    </div>
                    <div className="item">
                        <NightlightOutlinedIcon className='icon'  onClick={()=>dispatch({type:"TOGGLE"})}/>
                        
                    </div>
                    <div className="item">
                        <FullscreenOutlinedIcon className='icon'/>
                        
                    </div>
                    <div className="item">
                        <NotificationsNoneOutlinedIcon className='icon'/>
                        <div className="counter">1</div>
                    </div>
                    <div className="item">
                        <ChatOutlinedIcon className='icon'/>
                        <div className="counter">2</div>
                        
                    </div>
                    <div className="item">
                        <ListOutlinedIcon className='icon'/>
                        
                    </div>

                    <div className="item">
                        <img src="https://images.pexels.com/photos/11293709/pexels-photo-11293709.jpeg" alt="" className='avatar' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;