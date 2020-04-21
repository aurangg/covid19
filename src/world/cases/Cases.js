import React from 'react';
import ActiveCases from './ActiveCases';
import ClosedCases from './ClosedCases';
import Loader from '../../components/Common/Loading';
class Cases extends React.Component{
    constructor(props){
        super(props)
        this.state={
            world:props.casesProps,
            critical:null,
            loading:true,
        }
    }


    async componentDidMount(){
        const url = 'https://covid-193.p.rapidapi.com/statistics';
        const response = await fetch(url, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "covid-193.p.rapidapi.com",
                "x-rapidapi-key": "7232dd1eaamshbe4d4b7f0daf8dfp1e2bc6jsnee3f849aead5"
            }
        })
        
        const data = await response.json()
        this.setState({
            critical:data,
            loading:false,
        })
        
    }
    
    render(){
        let {world, critical, loading} = this.state;
        //let closedCasesProps = this.state.world
        let closedCasesProps = world
        //let activeWorldProps =  this.state.world
        //let activeCriticalProps = this.state.critical
        let activeCasesProps = {world,critical}
        //console.log(activeCasesProps)

        if(loading){
            return <Loader />
        }
        if(!critical){
            return <p>Hello error</p>
        }

        return(
            <React.Fragment>
                <div className="col-lg-6">
                    <ActiveCases activeCasesProps={activeCasesProps} />
                </div>
                <div className="col-lg-6">
                    <ClosedCases closedCasesProps={closedCasesProps} />
                </div>
            </React.Fragment>
        )
    }
}

export default Cases;