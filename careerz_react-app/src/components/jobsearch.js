import React from 'react'
import Jobdisplay from './jobdisplay'

function Jobsearch(props) {
  // console.log(props.jobslist)
  const jobslist = props.jobslist;
  const listJobs = jobslist.map((job, index) =>
    <Jobdisplay
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

export default Jobsearch

// company
    // "Fundera"
    // company_logo
    // "https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBaUorIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--576683b0f1523f1d4662c695312c920cabcbd9bf/logo%20wordmark@4x.png"
    // company_url
    // "https://www.fundera.com/"
    // created_at
    // "Fri Feb 07 18:03:55 UTC 2020"
    // description
// "<p>Fundera</p>\n<p>Here’s the thing—we hate traditional job descriptions. In our experience, they’re a terrible representation of what a job really entails and never paint a true picture of what it’s like to work at an organization.</p>\n<p>That’s why, at Fundera, we do things differently. Instead of presenting you with some run-of-the-mill job description, we offer potential candidates our Job Spotlights. This gives us a chance to tell you the story of us, why you should work here, and what the r..."
            // how_to_apply
// "<p>Please apply at this link and reference Github <a href=\"https://jobs.lever.co/fundera/7133b9e4-36bf-4bad-90f2-abe18f1a342f\">https://jobs.lever.co/fundera/7133b9e4-36bf-4bad-90f2-abe18f1a342f</a></p>\n"
            // id
            // "7b7d433d-caf3-4b1b-9cf1-e4c25d560a53"
            // location
            // "New York"
            // title
            // "Senior Software Engineer"
            // type
            // "Full Time"
            // url