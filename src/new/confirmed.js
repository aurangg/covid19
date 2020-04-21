import React from 'react';
import Facts from '../components/Data/Facts'
const Confirmed = (props) => {
    const {heading, date, items, time, query} = props.confirmedProps
    return(
        <div>
            {items.latest_stat_by_country.map((i) => (
                        <div key={i.id}>
                            <div className="cards">
                                <div className="start">
                                    <h4>
                                        {heading}{query}
                                    </h4>
                                    <h1>
                                        Confirmed Cases: {i.total_cases}
                                    </h1>
                                </div>
                                <h5>
                                    <Facts />
                                </h5>
                                <p>
                                   Date: {date}
                                </p>
                                <p style={{paddingBottom:'5px'}}>
                                    Time: {time} (GMT + 5)
                                </p>
                            </div>
                        </div>
                    ))}
        </div>
    )
}

export default Confirmed;