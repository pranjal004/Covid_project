import React from 'react';
import Cards from './components/Cards/Cards';
import Chart from './components/Chart/Chart';
import CountryPicker from './components/CountryPicker/CountryPicker';
import styles from "./App.module.css";
import cx from "classnames";
import { fetchData } from "./api";
import cimage from "./images/image.png";

class App extends React.Component {
  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
    const fData = await fetchData();
    this.setState({data: fData});
  }

  handleCountryChange = async (country) => {
    const fData = await fetchData(country);
    this.setState({data: fData, country: country});
  }
  render() {
    const {data, country} = this.state;
  return (
    <div className={cx(styles.container, styles.App)}>
    <img className={styles.image} src={cimage} alt="COVID_19" />
    <Cards data={data}/>
    <CountryPicker handleCountryChange={this.handleCountryChange} />
    <Chart data={data} country={country}/>
    </div>
  );
  }
}

export default App;
