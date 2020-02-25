import React from 'react';
import './App.css';
import axios from 'axios'
import Jobsearch from './components/jobsearch'
import Loader from './components/loader';
import Input from './components/Input'
import { Link, Route, withRouter } from 'react-router-dom'

//withRouter permits the use of router props pretty much anywhere. WOWEE!

const MUSE_KEY = process.env.REACT_APP_MUSE_KEY

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      jobslist: [],
      value: '',
      isLoading: true
    }
  }

  componentDidMount() {
    // this.fetchJobs()
    // console.log(this.props)
  }

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
    let search = this.state.value

    this.setState({
      jobslist: jobsarray.data,
      isLoading: false,
      value: ''
    }, () => this.props.history.push(`/search/${search}`))
  }

  render() {
    // console.log(this.state.jobslist.data)
    return (
      <div className="App">
        <nav>
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/search">search jobs</Link>
          </li>
          <li>
            <Link to="/contact">contact</Link>
          </li>
        </nav>

        <header className="App-header">
          <h1>devJobz</h1>
          {/* <h3>find a dev job near you</h3> */}
        </header>
        <main>
          <Input
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit} />

          {/* <Route exact path="/" component={Loader} /> */}
          {/* <Route path="/contact" component={Contact} /> */}
          {
            this.state.isLoading ?
              <Loader />
              : <Route path={`/search/:search`} render={(props) =>
                <Jobsearch
                  jobslist={this.state.jobslist}
                  onChange={this.handleChange}
                  onSubmit={this.handleSubmit}
                  value={this.state.searchQuery} />}
              />
          }

        </main>
        <footer className="app-footer">
          <p>© 🧜‍♀️ Mary Mac</p>
        </footer>
      </div>
    );
  }
}


export default withRouter(App);
