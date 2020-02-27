import React from 'react'


const initialState = {
  jobslist: ''
};

class ResetState extends Component {
  constructor(props) {
    super(props)
    this.state = initialState;
  }
  reset() {
    this.setState(initialState);
  }
  /* etc */
}

export default ResetState