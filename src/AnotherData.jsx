import React, {useState, useEffect} from 'react';

function AnotherData(){

    const [country, setCountries] = useState({
        items: []
    })

    useEffect(() => {
        const fetchData = async () => {
            const url = "https://coronavirus-monitor.p.rapidapi.com/coronavirus/latest_stat_by_country.php?country=Pakistan"
            const response = await fetch(url, {
                "method": "GET",
            "headers": {
            "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
            "x-rapidapi-key": "7232dd1eaamshbe4d4b7f0daf8dfp1e2bc6jsnee3f849aead5"
            }})

            const data = await response.json()
            const items = {items: data}
            setCountries({items:data})
            console.log(country.items)
        }
        fetchData();
    }, [])

    return(
        <div>
            <p>Hello</p>
        </div>
    )
}

export default AnotherData;