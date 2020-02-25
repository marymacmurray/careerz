import React from 'react';
import './App.css';
import axios from 'axios'
import Jobsearch from './components/jobsearch'
import Loader from './components/loader';
import Input from './components/Input'

const MUSE_KEY = process.env.REACT_APP_MUSE_KEY

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      jobslist: '',
      value: ''
    }
  }

  // componentDidMount() {
  //   this.fetchJobs()
  // }

  fetchJobs = async (inputValue) => {
    try {
      const proxyurl = "https://cors-anywhere.herokuapp.com/";
      const jobsarray = await axios.get(`${proxyurl}https://jobs.github.com/positions.json?description=${inputValue}`
      )
      return jobsarray
    }
    catch (error) {
      console.error(error)
    }
  }

  handleChange = (event) => {
    console.log('inside App handleChange')
    this.setState({
      value: event.target.value
    });
  }

  handleSubmit = async (event) => {
    console.log('inside App Submit')
    event.preventDefault()
    const jobsarray = await this.fetchJobs(this.state.value)

    this.setState({
      jobslist: jobsarray
    })
  }

  render() {
    // console.log(this.state.jobslist.data)
    return (
      <div className="App">
        <header className="App-header">
          <h1>devJobz</h1>
        </header>
        <main>
          <Input
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit} />

          {
            this.state.jobslist.data ?

              <Jobsearch
                jobslist={this.state.jobslist.data}
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                value={this.state.searchQuery} />
              : <Loader />
          }
        </main>

        {/* <SearchContainer jobs={this.state.jobs} />
        <Search
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
          value={this.state.searchQuery}
          name="searchQuery"
        />
        <Route
          path="/detail/:job_id"
          render={(props) => <Job Detail={this.state.jobs}{...props} />}
        //this is just an anonymous function.  render accepts a function that will return a component.  using the spread operator gives me back access to props.
        /> */}
      </div>
    );
  }
}


export default App;
