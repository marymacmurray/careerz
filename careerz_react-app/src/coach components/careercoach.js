import React from 'react';
import axios from 'axios'
import Loader from '../components/loader';
import Coachinput from './coachinput'
import Coachsearch from './coachsearch'
import { Switch, Link, Route, withRouter } from 'react-router-dom'

//withRouter permits the use of router props pretty much anywhere. WOWEE!

const MUSE_KEY = process.env.REACT_APP_MUSE_KEY

class Careercoach extends React.Component {
  constructor() {
    super()
    this.state = {
      coacheslist: [],
      value: '',
      isLoading: true
    }
  }

  fetchCoaches = async (inputValue) => {
    try {
      const coachesarray = await axios.get(`https://www.themuse.com/api/public/coaches?api_key=1c01f7eb5e9b6fb6d5db1fa9a596c3fcca9a1a9dd821b17024696814f2cbc342&page=3`)
      //adding the showmore value to state for each cycle of the .map.
      console.log(coachesarray.data)
      return coachesarray.data.results.map(job => ({
        ...job,
        showmore: false
      }))
    }
    catch (error) {
      console.error(error)
    }
  }

  toggleShowmore = (index) => {
    this.setState(state => {
      state.coacheslist[index].showmore = !state.coacheslist[index].showmore
      return state
    })
  }

  handleChange = (event) => {
    console.log('inside careercoach handleChange')
    this.setState({
      value: event.target.value
    });
  }

  handleSubmit = async (event) => {
    console.log('inside careercoach Submit')
    event.preventDefault()
    const coachesarray = await this.fetchCoaches(this.state.value)
    let search = this.state.value

    this.setState({
      coacheslist: coachesarray,
      isLoading: false,
      value: ''
    }, () => this.props.history.push(`/coachsearch/${search}`))
  }

  render() {
    // console.log(this.state.coacheslist.data)
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
            <Link to="/contact">contact</Link>
          </li>
        </nav>

        <header className="App-header">
          <h1>devJobz</h1>
          <h3>find a dev job near you</h3>
        </header>
        < main >
          <Coachinput
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit} />
          {/* <Route path="/contact" component={Contact} />*/}
          {
            this.state.isLoading ?
              <Loader />
              :
              <Route path={`/coachsearch/:coachsearch`} render={(props) =>
                <Coachsearch
                  coacheslist={this.state.coacheslist}
                  onChange={this.handleChange}
                  onSubmit={this.handleSubmit}
                  //passing toggleShowmore down as props.  This ternary checks if the axios data is back, see the axios call where we put isLoading into state.  You could accomplish the same thing with a .catch/.then as well.
                  toggleShowmore={this.toggleShowmore} />}
              />
          }

        </main >
        <footer className="app-footer">
          <p>© 🧜‍♀️ Mary Mac</p>
        </footer>
      </div >
    );
  }
}


export default withRouter(Careercoach);