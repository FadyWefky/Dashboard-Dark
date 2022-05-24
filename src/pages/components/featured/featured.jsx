import React from 'react';
import './featured.scss';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';


const Featured = () => {
    return (
        <div className='featured'>
            <div className="top">
                <h1 className="title">Total revenue</h1>
                <MoreVertIcon fontSize='small' /> 
            </div>


            <div className="bottom">
                <div className="featuredChart">
                    <CircularProgressbar value={70} text={"70%"}  styles={buildStyles({pathColor: `purple`})} strokeWidth={5} />
                </div>

                <p className="title">Total salse made today</p>
                <p className="amount">$5220</p>
                <p className="desc">Previous transactions processing. Last payments may not be included.</p>


                <div className="summary">
                    <div className="item">
                        <div className="itemTitle">Target</div>
                        <div className="itemResult positive">
                            <KeyboardArrowUpOutlinedIcon fontSize='small' />

                        <div className="resultAmount">$12.4K</div>

                        </div>

                    </div>
                    
                    <div className="item">
                        <div className="itemTitle">Last week</div>
                        <div className="itemResult negative">
                            <KeyboardArrowDownIcon fontSize='small' />

                        <div className="resultAmount">$3.2K</div>

                        </div>

                    </div>
                    
                    <div className="item">
                        <div className="itemTitle">Last month</div>
                        <div className="itemResult positive">
                            <KeyboardArrowUpOutlinedIcon fontSize='small' />

                        <div className="resultAmount">$8.5K</div>

                        </div>

                    </div>
                    
                </div>

            </div>

        </div>
    );
}

export default Featured;