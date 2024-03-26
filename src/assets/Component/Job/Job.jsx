import { ImLocation } from "react-icons/im";
import { HiCurrencyDollar } from "react-icons/hi";
import { Link } from "react-router-dom";

const Job = ({ job }) => {
    const { logo,id, job_title, company_name, remote_or_onsite, location, job_type, salary } = job;
    return (
        <div className="card card-compact  bg-base-100 shadow-xl">
            <figure><img src={logo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{job_title}</h2>
                <p>{company_name}</p>
                <div>
                    <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] mr-4 text-[#7E90FE]">{remote_or_onsite}</button>
                    <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] mr-4 text-[#7E90FE]">{job_type}</button>
                </div>
                <div className="flex">
                    <div className="mt-4" >
                        <h2 className="flex"><ImLocation className="text-2xl mr-2"></ImLocation>{location}</h2>
                    </div>
                    <div className="mt-4 mx-4 ">
                        <h2 className="flex"><HiCurrencyDollar className="text-2xl mr-2"></HiCurrencyDollar>{salary}</h2>
                    </div>
                </div>
                <div className="card-actions ">
                    <Link to={`/job/${id}`}>
                       <button className="btn btn-primary">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Job;