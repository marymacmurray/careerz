import React from 'react'
import Jobdisplay from './jobdisplay'

function Jobsearch(props) {
  const jobslist = props.jobslist;
  const listJobs =
    //if it's not an empty array and isLoading is false (which happens in state when the data comes back from the axios call), then map through the array.
    jobslist.length > 0 && !props.isLoading ?
      jobslist.map((job, index) =>
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
          //need an index to make each of the toggleShowmore functions connected to that particular button.
          index={index}
          toggleShowmore={props.toggleShowmore}
          //prop showmore to be passed to the jobsdisplay render.
          showmore={job.showmore}
        />
      ) : <h2 className="no-results">No Results</h2>
  return (
    <ul>
      {listJobs}
    </ul>
  );
}

export default Jobsearch