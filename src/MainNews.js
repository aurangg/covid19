import React from 'react';
import './News/news.css'
import {Link} from 'react-router-dom'

const MainNews = (props) => {
    let {latest_news} = props.newsProps
    //console.log(latest_news[0].headline)

    return(
        <div className="news">
            <Link to={{
                pathname:`/news/0`,
                state:{
                    data:latest_news
                }
            }}>
                <div className="news_body">
                    <h3>
                        {latest_news[0].headline}
                    </h3>
                    <p>
                        {latest_news[0].small_detail}
                    </p>
                </div>
            </Link>
            <Link to={{
                pathname:`/news/1`,
                state:{
                    data:latest_news
                }
            }}>
                <div className="news_body">
                    <h3>
                        {latest_news[1].headline}
                    </h3>
                    <p>
                        {latest_news[1].small_detail}
                    </p>
                </div>
            </Link>
        </div>
    )
}

export default MainNews;