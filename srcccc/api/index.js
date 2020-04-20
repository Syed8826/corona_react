import axios from 'axios'

const url ='https://covid19.mathdro.id/api';

export const fetchData = async () => {
    try {
        const {data: {confirmed, recovered, deaths, lastUpdate}} = await axios.get('https://covid19.mathdro.id/api/countries/india');
        
        const modifiedData = {
            confirmed,
            recovered,
            deaths,
            lastUpdate
        }
        return {confirmed, recovered, deaths, lastUpdate};
      
    } catch (error) {
        
    }
}

 export const fetchDailyData = async () => {
    try {
       const {data} = await axios.get('https://api.covid19india.org/data.json'); 
      const ddata = data.cases_time_series;

      const modifiedData = ddata.map((dailyData)=>({
        confirmed:dailyData.totalconfirmed,
        recovered:dailyData.totalrecovered,
        deaths:dailyData.totaldeceased,
        date:dailyData.date,
       }));
     return modifiedData;
      //console.log(modifiedData);
      //console.log(ddata);
    } catch (error) {
        console.log(error);
    }
}

//for tomorrow
/*export const fetchStateData = async () => {
    try {
       const {data} = await axios.get('https://api.covid19india.org/data.json'); 
      const ddata = data.statewise;

        const modifiedData = ddata.map((dailyStateData)=>({
        states:dailyStateData.state,
        /*confirmed:dailyStateData.confirmed,
        recovered:dailyStateData.recovered,
        deaths:dailyStateData.deaths,
        date:dailyStateData.lastUpdatedtime,*/
     /*  }));
     return modifiedData;
      //console.log(modifiedData);
     // console.log(ddata);
    } catch (error) {
        console.log(error);
    }
}


/*not worked export const fetchStates = async () =>{
    try {
        const {data: { state }} = await axios.get('https://api.covid19india.org/v2/state_district_wise.json');
      return state.map((state)=> state);
      //const modifiedData = data.map((StateData)=>({

     
    } catch (error) {
        
    }

}*/
















/*import axios from 'axios';

//urlData has value of confirmed, recovered & deaths
const url ='https://covid19.mathdro.id/api/countries/india'

const urlStates = 'https://api.covid19india.org/v2/state_district_wise.json';

export const fetchData = async () => {
    try {
       const {data: {confirmed, recovered, deaths, lastUpdate}} = await axios.get(url);
      return(confirmed, recovered, deaths, lastUpdate);
         
       
     
       // const data = data.cases_time_series.length;
        //console.log(data);
       
       
        
    } catch (error) {
        console.log(error);
    }
}

export const fetchStates = async () => {
    try {
        const {states:{confirmed, recovered, deaths, lastUpdate}} = await axios.get(urlStates);
        return(confirmed, recovered, deaths, lastUpdate);
    } catch (error) {
        
    }
}*/