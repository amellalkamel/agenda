import React from 'react'
import '../assets/Calender.css'

export default function Calender() {
    /**
     * List des horaires (un tableau de 13 elements)
     */
    const handlClick = () => {
        console.log('handlClick event fired');
    };
    const hours = ['9 am', '10 am', '11 am', '12 am', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm', '8 pm', '9 pm'];
    return (
        <div className='body-calender'>
            <button onClick={handlClick}>test</button>
            {hours.map((hour, index) =>
            (
                <div key={index} className="hourContainer">
                    <div className="hours" >
                        {hour}
                    </div>
                    <div className="separator"></div>
                </div>
            )
            )}
        </div>
    )
}
