import React from 'react';
import Facts from './components/Data/Facts';
import Loading from './components/Common/Loading';

class DataFile extends React.Component{

    state = {
        loading: true,
        items: [],
        heading: "Covid-19 Cases in ",
        query: "Pakistan",
        date:[]
    }
    
    async componentDidMount() {
        // const query = "Pakistan"    
        const url = `https://coronavirus-monitor.p.rapidapi.com/coronavirus/latest_stat_by_country.php?country=${this.state.query}`
        const response = await fetch(url, {
            "method": "GET",
	    "headers": {
		"x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
		"x-rapidapi-key": "7232dd1eaamshbe4d4b7f0daf8dfp1e2bc6jsnee3f849aead5"
        }})

        const data = await response.json()
       
        const items = data
        this.setState({items: items, loading: false})
        //this.setState({items: items, loading: false})
        console.log(data)

        let newArr = []
        newArr = items.latest_stat_by_country[0].record_date
        let olddate = newArr.split(' ')
        let date = olddate
        //console.log(date)
        this.setState({
            date: date
        })
    }
    render(){

        let {loading, items,query, heading, date} = this.state;

        if(loading){
            return(
                <div className="cards">
                    <Loading />
                </div>
            )
        }
        if(!items){
            return(
                <div>
                    Error. :(
                </div>
            )
        }
        
        return(
            <React.Fragment>
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
                                   Date: {date[0]}
                                </p>
                                <p style={{paddingBottom:'5px'}}>
                                    Time: {date[1]}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </React.Fragment>
        )
    }
}

export default DataFile;



{/* <h4>
{i.new_cases}
</h4>
<h4>
{i.active_cases}
</h4>
<h4>
{i.total_deaths}
</h4>
<h4>
{i.total_recovered}
</h4>
<h4>
{i.serious_critical}
</h4>
<h4>
{i.total_cases_perim}
</h4>
<h4>
{i.record_date}
</h4> */}
            
