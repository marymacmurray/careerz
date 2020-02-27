import React from 'react'

function Jobdisplay(props) {
  // console.log(props)

  return (
    <li className="job">
      <div className="job-url">
        <a href={props.url} target="_blank" rel="noopener noreferrer">{props.title}</a>
      </div>
      <div className="job-company">
        <h3>{props.company}</h3>
      </div>
      <div className="job-logo">
        <img src={props.logo ? props.logo : `http://t0.gstatic.com/images?q=tbn%3AANd9GcS9N47t1VWQzdybFyeev92AUmNIt5ge7Ej_6aZFDvEknzQoK2KnnOJzRJmm5EZfbvGoUM985A50&usqp=CAc`} height="50 vh" width="100 vh" />
      </div>

      {/* conditional rendering of button for each 'cycle' of the .map of jobslist.  Each button has to be independent so the source of the showmore prop must be created in jobsearch.  See that component for more notes. */}
      <button className="show-more-button"
        onClick={() => props.toggleShowmore(props.index)}
      >{props.showmore ? 'show less' : 'show more'}</button>
      {props.showmore ? <div className="job-description">
        <p>job description: </p>
        <p dangerouslySetInnerHTML={{ __html: props.description }} />
      </div>
        : null}

    </li >
  )
}

export default Jobdisplay