import React from 'react';
import './news.css';

import {Link} from 'react-router-dom';
import NewsPage from  './NewsPage';


const NewsHeader = () => {
    return(
        <React.Fragment>
            <div className="col-12">
                <div className="news">
                    <h1>
                        News
                    </h1>
                    {latest_news.map((n) => (
                       <Link to={`/news/${n.id}`}>
                           <div className="news_body" key={n.id}>
                            <h3>
                               {n.headline} 
                            </h3>
                            <p>
                                {n.small_detail}
                            </p>
                        </div> 
                       </Link>
                    ))}
                </div>
            </div>
        </React.Fragment>
    )
}

export default NewsHeader;  