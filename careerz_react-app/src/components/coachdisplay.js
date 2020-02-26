import React from 'react'

function Coachdisplay(props) {
  // console.log(props)

  return (
    <li className="job">
      <div>
        <a href={props.url} target="_blank" rel="noopener noreferrer">{props.title}</a>
      </div>
      <div>
        <h3>{props.company}</h3>
      </div>
      <div>
        <img src={props.logo} alt="no logo" height="50 vh" width="100 vh" />
      </div>

      {/* conditional rendering of button for each 'cycle' of the .map of jobslist.  Each button has to be independent so the source of the showmore prop must be created in jobsearch.  See that component for more notes. */}
      <button
        onClick={() => props.toggleShowmore(props.index)}
      >{props.showmore ? 'show less' : 'show more'}</button>
      {props.showmore ? <div>
        <p>job description: </p>
        <p dangerouslySetInnerHTML={{ __html: props.description }} />
      </div>
        : null}

    </li >
  )
}

export default Coachdisplay