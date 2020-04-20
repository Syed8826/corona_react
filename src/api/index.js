import axios from "axios";

const url = "https://covid19.mathdro.id/api";
export const fetchData = async () => {
    //here we pass country to print the selected country
//export const fetchData = async () => {
 //declaring the variable to get the contry

    try {
     //const response = await axios.get(url);
//we can destrcut the response to data
     /*const {data} = await axios.get(url);

     const modifiedData = {
         confirmed : data.confirmed,
         recovered : data.recovered,
         deaths : data.deaths,
         lastUpdate : data.lastUpdate

     }*/

     //instead of writing above code, we can simplify by
    const {data : {confirmed, recovered, deaths, lastUpdate}} = await axios.get('https://covid19.mathdro.id/api/countries/india');
     return {confirmed, recovered, deaths, lastUpdate};   
    } catch (error) {
        console.log(error);
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


export const fetchCountries = async () => {
 
    try {
        const {data: {statewise}} = await axios.get('https://api.covid19india.org/data.json');
        return statewise.map((statewise)=>statewise.state);
    } catch (error) {
        
    }
}

export const fetchPlaces = async () => {
    try {
        const {data} = await axios.get('https://api.covid19india.org/data.json');
     return data;
    } catch (error) {
        
    }
}

  




/*export const fetchCountries = async () => {
try {
    const {data} = await axios.get('https://api.covid19india.org/data.json'); 
   const ddata = data.statewise;

     const modifiedData = ddata.map((dailyStateData)=>({
     states:dailyStateData.state,
     /*confirmed:dailyStateData.confirmed,
     recovered:dailyStateData.recovered,
     deaths:dailyStateData.deaths,
     date:dailyStateData.lastUpdatedtime,*/
  /* }));
  return modifiedData.map((state) => state);;
 // return countries.map((country) => country.name);
   //console.log(modifiedData);
  // console.log(ddata);
 } catch (error) {
     console.log(error);
 }
}*/


/*export const fetchCountries = async () => {
    try {
      // const response = await axios.get(`${url}/countries`);
      //here we destruct the above code as like line no.8
      const { data: {countries}} = await axios.get(`${url}/countries`);
      return countries.map((country) => country.name);
    } catch (error) {
        
    }
}*/