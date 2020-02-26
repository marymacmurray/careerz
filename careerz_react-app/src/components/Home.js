import React from 'react';
import '../App.css';
import Jobsearch from './jobsearch'
import Careercoach from './careercoach'
import { Link, Route, Switch } from 'react-router-dom'
import App from '../App'


class Home extends React.Component {
  constructor() {
    super()
    this.state = {

    }
  }

  render() {
    return (
      <div className="App">
        <nav>
          {/* <img className="logo" src="../images/logo.png" /> */}
          <li className='nav-li'>
            <Link to="/">home</Link>
          </li>
          <li className='nav-li'>
            <Link to="/search">search jobs</Link>
          </li>
          <li className='nav-li'>
            <Link to="/coachsearch">find career coach</Link>
          </li>
        </nav>
        <header className="App-header">
          <h1>devJobz</h1>
        </header>
        <main>
          <Switch>
            <Route exact path="/search" component={App} />
            <Route exact path="/coachsearch" component={Careercoach} />
            {/* <Route path={`/search/:search`} render={(props) =>
              <Jobsearch
                jobslist={this.state.jobslist}
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                //passing toggleShowmore down as props.  This ternary checks if the axios data is back, see the axios call where we put isLoading into state.  You could accomplish the same thing with a .catch/.then as well.
                toggleShowmore={this.toggleShowmore} />}
            /> */}
          </Switch>
        </main>
        <footer className="app-footer">
          <p>© 🧜‍♀️ Mary Mac</p>
        </footer>
      </div>
    );
  }
}


export default Home;
