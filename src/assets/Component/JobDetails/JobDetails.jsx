import { useLoaderData, useParams } from "react-router-dom";
import { HiCurrencyDollar } from "react-icons/hi";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../../Utility/LocalStorage";



const JobDetails = () => {
    const jobs = useLoaderData();

    const { id } = useParams();
    const intid = parseInt(id);
    const job = jobs.find(job => job.id === intid)
    console.log(job);

    const ApplyJob = () =>{ 
        saveJobApplication(id);
        
        toast("You have Apply job successfully ");
    }

    return (
        <div>
            <h2>Job Details id :{id}</h2>
            <div className="grid gap-4 md:grid-cols-4   ">
                <div className="border md:col-span-3">
                    <p > <span className="font-bold">JOb Description :</span> {job.job_description}</p>
                    <p className="mt-8 "><span className="font-bold">Job Responsibility : </span>{job.job_responsibility}</p>
                    <p className="mt-8 ">
                        <span className="font-bold">Educational Requirements:</span>
                        <br />
                        <br />
                        {job.educational_requirements}

                    </p>
                    <p className="mt-8 ">
                        <span className="font-bold">Experiences :</span>
                        <br />
                        <br />
                        {job.experiences}
                    </p>
                    


                </div>
                <div className="border">
                    <div className="p-5">
                        <h2 className=" text-x underline-offset-4 font-bold">Job Details</h2>
                        <h2 ><HiCurrencyDollar className="text-2xl mr-2"></HiCurrencyDollar> <span></span></h2>




                    </div>

                    <button onClick={ApplyJob} className="btn btn-primary ">Apply Now </button>



                </div>
                
            </div>
            <ToastContainer />
           
        </div>
    );
};

export default JobDetails;