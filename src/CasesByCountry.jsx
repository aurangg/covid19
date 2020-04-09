import React from 'react';

class CasesByCountry extends React.Component{

    state = {
        loading: true,
        items: []
    }

     async componentDidMount(){
         const url = "https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php";
         const response = await fetch(url, {
            "method": "GET",
            "headers": {
            "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
            "x-rapidapi-key": "7232dd1eaamshbe4d4b7f0daf8dfp1e2bc6jsnee3f849aead5"
         }
        })
        
        
        // function filterItems(item){
        //     const query = "Pakistan"
        //     if(item.country_name.toLowerCase().indexOf(query.toLowerCase())!== -1)
        //     {
        //         return true;
        //     }
        // }
        let i = 0;

        function filterItems(item){
            const query = "Pakistan"
            if(item.country_name.toLowerCase().indexOf(query.toLowerCase())!== -1){
                return true;
            } 
        }
        
        // function loop(item) {
            
        //     for(i=0; i< item.countries_stat.length; i++){
        //         filterItems()
        //         if(true){
        //             return i;
        //         }
        //     }
        // }


        const data = await response.json()
        //loop(data)
        let j;
        const items =  data.countries_stat.filter(filterItems)
        // const items = data;
        this.setState({items: items, loading: false})
        
        let catcher;

        for( j = 0; j < data.countries_stat.length; j++){
            if(data.countries_stat[j].country_name == "Pakistan")
            {
                catcher = j
                break;   
            }
        }
        
        //console.log(catcher)
        //  console.log(typeof data.countries_stat[30].country_name)
        //console.log(items.country_name)
     }

    render(){

        const {loading, items} = this.state;

        if(loading){
            return(
                <div>
                    Loading...
                </div>
            )
        }

        if(!items){
            return(
                <div>
                    Couldn't find anything...
                </div>
            )
        }

        return(
           <div>
                {items.map((i) => (
                    <div>
                        <h3>
                            {i.country_name}
                        </h3>
                        <h4>
                            Cases: {i.cases}
                        </h4>
                        <h4>
                            Deaths: {i.deaths}
                        </h4>
                        <h4>
                            Recovered: {i.total_recovered}
                        </h4>
                    </div>
                ))}
            </div>
        )
    }
}

export default CasesByCountry;