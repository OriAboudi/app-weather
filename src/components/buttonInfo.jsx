import React from 'react'
import './css/main.css'

function ButtonInfo(props) {

    const data = props.data;

    return (
        <div>
            <div className="button">
                <div className=" sunrise">
                    <p className='bold'>{new Intl.DateTimeFormat('en-US', { hour: 'numeric', minute: 'numeric' }).format(data.location.sunrise * 1000)}</p>
                    <p>Sunries</p>
                </div>
                <div className=" sunset">
                    <p className='bold'>{new Intl.DateTimeFormat('en-US', { hour: 'numeric', minute: 'numeric' }).format(data.location.sunset * 1000)}</p>
                    <p>Sunset</p>
                </div>
            </div>

            <div className="button">
                <div className="feels">
                    <p className='bold'>{data.weather.temp.toFixed()}</p>
                    <p >Feels Like</p>
                </div>
                <div className="humidity">
                    <p className='bold'>{data.weather.humidity}%</p>
                    <p >Humidity</p>
                </div>
                <div className="wind">
                    <p className='bold'>{data.weather.wind} HPM</p>
                    <p >Wind Speed</p>
                </div>
            </div>
        </div>




    )
}

export default ButtonInfo