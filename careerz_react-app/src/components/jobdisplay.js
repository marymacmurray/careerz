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
      <div>
        <p>job description: </p>
        <p dangerouslySetInnerHTML={{ __html: props.description }} />
      </div>
    </li >
  )
}

export default Jobdisplay

// key={job.id}
//       logo={job.company_logo}
//       company_url={job.company_url}
//       type={job.type}
//       location={job.location}
//       title={job.title}
//       url={job.url}
//       apply={job.how_to_apply}
//       description={job.description}