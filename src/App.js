import React from "react";

/*import Chart from "./components/Chart/Chart";
import Cards from "./components/Cards/Cards";
import CountryPicker from "./components/CountryPicker/CountryPicker;"*/

//instead of above code we can use it like
import {Cards, Chart, CountryPicker} from "./components";
import styles from "./App.module.css";

//importing api here using {} since it is named import, also here we dont need to use ./api/index since we using the index name.
import {fetchData} from "./api"

import coronaImage from'./images/image.png';

class App extends React.Component {
    
    //to call the data to the cards, chart & countypicker here we use
    state = {
        data: { },
        country: '',
    }


    //here we call the fetchData
    async componentDidMount(){
        //using await bcos it is async func
        const fetchedData = await fetchData();
        
        //we set the data here
        this.setState({data: fetchedData});


    }
    handleCountryChange = async (country) => {
        //const fetchedData = await fetchData(country);
      console.log(country);
        //this.setState({ data: fetchedData, country: country});
    }
    render() {
        //defining data here
        const {data, country} = this.state
        return (
            <div className = {styles.container}>
                <img calssName={styles.image}src={coronaImage}></img>
                <h1>
                    <Cards data={data}/>
                    <CountryPicker handleCountryChange={this.handleCountryChange}/>
                    <Chart data={data} country={country}/>
                    
                </h1>
            </div>
            
        )
    }
   
}

export default App;