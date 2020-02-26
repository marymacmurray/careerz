import React from 'react'
import Coachdisplay from './coachdisplay'

function Coachsearch(props) {
  // console.log(props.jobslist)
  const jobslist = props.jobslist;
  const listJobs = jobslist.map((job, index) =>
    <Coachdisplay
      key={job.id}
      logo={job.company_logo}
      company={job.company}
      company_url={job.company_url}
      type={job.type}
      location={job.location}
      title={job.title}
      url={job.url}
      apply={job.how_to_apply}
      description={job.description}
      //need an index to make each of the functions connected to the buttons individual and specific to that div.
      index={index}
      toggleShowmore={props.toggleShowmore}
      //here we create a prop showmore to be passed to the jobsdisplay render.
      showmore={job.showmore}
    />
  )
  return (
    <ul>
      {listJobs}
    </ul>
  );
}

export default Coachsearch