import React from 'react';

const WorldDateTime = (props) => {
    const {worldDate, worldTime} = props.dateTimeProps
    return(
        <div className="date_time">
            <div className="date">
                {worldDate}
            </div>
            <div className="spacers"></div>
            <div className="time">
                {worldTime}
            </div>
        </div>
    )
}

export default WorldDateTime;