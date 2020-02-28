import React from 'react';
import './App.css';
import axios from 'axios'
import Jobsearch from './components/jobsearch'
import Loader from './components/loader';
import Input from './components/Input'
import NotFound from './components/NotFound';
import { Link, Route, withRouter, Switch } from 'react-router-dom'

//withRouter permits the use of router props pretty much anywhere. WOWEE!

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      jobslist: [],
      value: '',
      isLoading: false
    }
  }

  fetchJobs = async (inputValue) => {
    try {
      const proxyurl = "https://cors-anywhere.herokuapp.com/";
      const jobsarray = await axios.get(`${proxyurl}https://jobs.github.com/positions.json?description=${inputValue}`
      )

      //adding the showmore value to state for each cycle of the .map.
      return jobsarray.data.map(job => ({
        ...job,
        showmore: false
      }))
    }
    catch (error) {
      console.error(error)
    }
  }

  //::::WIP:::email a single job to someone.
  // handleEmailSubmit = (index) => {

  // }


  toggleShowmore = (index) => {
    //setting state for each button to be it's own button.  if you don't do this, the buttons won't be unique.
    this.setState(state => {
      state.jobslist[index].showmore = !state.jobslist[index].showmore
      return state
    })
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
    this.setState({
      isLoading: true,
      jobslist: [],
    })
    const jobsarray = await this.fetchJobs(this.state.value)
    let search = this.state.value

    this.setState({
      jobslist: jobsarray,
      isLoading: false,
      value: ''
    })
    //to be able to send router props with my state props.
    this.props.history.push(`/search/${search}`)
  }

  render() {

    return (
      <div className="App">
        <nav>
          <li className='nav-li'>
            <Link to="/">home</Link>
          </li>
          <li className='nav-li'>
            <Link to="/search">search jobs</Link>
          </li>
          <li className='nav-li'>
            <a href="https://www.themuse.com/coaches?coach_specializations=Engineering%2FTech&coach_levels=Mentor&filter=true" target="_blank">find career coach</a>
          </li>
        </nav>
        <header className="App-header">
          <h1>devJobz</h1>
          <h3>find a dev job near you</h3>
        </header>

        <main>
          {/* showing loader on home screen */}
          <Route exact path={'/'}>
            <Loader />
          </Route>
          <Route
            path={`/search`}
            render={(props) =>
              <Input
                {...props}  //router props.
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
              />
            }
          />

          {
            this.state.isLoading &&
            <Loader />
          }
          <Route
            path={`/search/:search`}
            render={(props) =>
              <Jobsearch
                isLoading={this.state.isLoading}  //have to pass as props so that "no results" ternary can function.
                jobslist={this.state.jobslist}
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                //passing toggleShowmore down as props.  This ternary checks if the axios data is back, see the axios call where we put isLoading into state.  You could accomplish the same thing with a .catch/.then as well.
                toggleShowmore={this.toggleShowmore}

              //::::WIP::::EMAIL HANDLING
              // onSubmit={this.handleEmailSubmit}
              />

            }
          />

          {/* <Route path={`/*`} component={NotFound} /> */}

        </main>

        <footer className="app-footer">
          <p>© 🧜‍♀️ Mary Mac</p>
        </footer>

      </div>
    );
  }
}


export default withRouter(App);