import React from 'react'
import './css/main.css'
function MiddelForecast(props) {
    const data = props.data


    let locale = 'en-US';
    let baseDate = new Date(Date.now()); 
    console.log(baseDate);
    let weekDays = [];
    for (let i = 0; i < 4; i++) {
        weekDays.push(baseDate.toLocaleDateString(locale, { weekday: 'long' }));
        baseDate.setDate(baseDate.getDate() + 1);
    }

    console.log(weekDays);

    return (
        <div className="days">

            {data?.map((item, i) => {
                return (

                    <div className="bimg">
                        <div className='bold ms-2'>{weekDays[i + 1]} <img src={`icons/${item.icons}.png`} className=' img ' alt="waether" /></div>
                        <div className='d-flex align-items-center '> <div className='me-3'>{item.desc}</div> <div className='me-2'>{item.temp.toFixed()}℃</div>  </div>
                    </div>

                )
            })}
        </div>
    )
}

export default MiddelForecast