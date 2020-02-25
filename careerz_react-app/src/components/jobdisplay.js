import React from 'react'

function Jobdisplay(props) {
  console.log(props)

  return (
    <li className="job">
      <div>
        <a href={props.url} target="_blank" rel="noopener noreferrer">{props.title}</a>
      </div>
      <div>
        <h3>{props.company}</h3>
      </div>
      <div>
        <img src={props.logo} alt="logo" height="50 vh" width="100 vh" />
      </div>
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

export default Jobdisplay