import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../../Utility/LocalStorage";



const AppliedJobs = () => {
    const jobs = useLoaderData();
    const [appliedJobs,setAppliedJobs] = useState([]);
    useEffect(()=>{
        const storedJobIds = getStoredJobApplication();
        if(jobs.length>0){
            const jobsApplied =jobs.filter(job => storedJobIds.includes(job.id))
            // console.log(jobs,storedJobIds,jobsApplied)
            setAppliedJobs(jobsApplied);
        }
       
    },[])
    return (
        <div>
            <h2 className="text-3xl">JObs i Applied :{appliedJobs.length}</h2>
            <ul>
                {
                    appliedJobs.map(job => <li key={job.id}><span>{job.job_title}</span></li>)
                }
            </ul>
        </div>
    );
};

export default AppliedJobs;