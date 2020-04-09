import React from 'react';
import './Facts.css'

class Facts extends React.Component{
    state = {
        loading: true,
        rank: null,
        emergency:10,
        dangerous: 20,
        mild:30,
        threat:31,
}

    async componentDidMount(){
        const urlLink = "https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php";
        const responses = await fetch(urlLink, {
            "method": "GET",
            "headers": {
            "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
            "x-rapidapi-key": "7232dd1eaamshbe4d4b7f0daf8dfp1e2bc6jsnee3f849aead5"
         }
        })

        const dataFacts = await responses.json();
        
        let j;
        let rank = 0;
        for(j = 0; j < dataFacts.countries_stat.length ; j++)
        {
            if(dataFacts.countries_stat[j].country_name === "Pakistan")
            {
                rank = j;
                break;
            }
        }
        this.setState({
            loading:false,
            rank: rank,
        })
    }

    render(){
        let {rank, emergency, dangerous, mild, threat} = this.state;
        let spanclasses = "text";
        if(rank <= emergency) {
            spanclasses = "text e"
        }
        if((rank > emergency) && (rank <=dangerous)){
            spanclasses = "text d"
        }
        if((rank > dangerous) && (rank <= mild)){
            spanclasses="text m"
        }
        if(rank >= threat){
            spanclasses="text t"
        }
        return(
            <React.Fragment>
                Pakistan's rank in the world for most cases: <span className={spanclasses}>
                    <strong>
                        {this.state.rank}
                    </strong>
                </span>
            </React.Fragment>
        )
    }
}

export default Facts;