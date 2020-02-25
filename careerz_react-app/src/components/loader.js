import React from "react";
import { css } from "@emotion/core";
import PacmanLoader from "react-spinners/PacmanLoader";

const override = css`
  display: block;
  align-self: center;
  margin: 0 auto;
  border-color: red;
`;

class Loader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  render() {
    return (
      <div className="sweet-loading">
        <PacmanLoader
          // css={override}
          size={150}
          //size={"150px"} this also works
          color={"pink"}
          loading={this.state.loading}
        />
      </div>
    );
  }
}

export default Loader