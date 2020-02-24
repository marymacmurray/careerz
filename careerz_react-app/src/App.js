import React from 'react';
import './App.css';

const MUSE_KEY = process.env.REACT_APP_MUSE_KEY

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      // jobslist:'' 
    }
  }

  // componentDidMount() {
  //   this.fetchJobs()
  // }
  // fetchJobs = async () => {
  //   try {
  //     const jobsarray = []
  //     this.state.ids.forEach(async ticker => {
  //       const jobs = await Axios.get(
  //         `https://www.themuse.com/api/public/coaches?api_key=${MUSE_KEY}&offering=Interview%20Coaching&page=3&descending=true`
  //       )
  //       jobslist.push(jobs.data)
  //       // console.log(jobslist)
  //       this.setState({
  //         jobslist: jobsarray
  //       })
  //     })
  //   } catch (error) {
  //     console.error(error)
  //   }
  // }
  // handleChange = event => {
  //   this.setState({
  //     [event.target.name]: event.target.value
  //   })
  // }
  // handleSubmit = event => {
  //   event.preventDefault()
  // const { job ids } = this.state
  // if (tickers.length === 0 && !this.state.searchQuery.length) {
  //   alert('Need job location')
  // } else if (jobs.includes(this.state.searchQuery.toLowerCase())) {
  //   alert('Already Exists')
  // } else {
  //   this.setState(
  //     state => ({
  //       tickers: [this.state.searchQuery.toLowerCase(), ...state.tickers],
  //       searchQuery: ''
  //     }),
  //     () => this.fetchJobs()
  //   )
  //   }
  // }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Careerz</h1>
        </header>
        <main>
          <h2>Components go here!</h2>
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
