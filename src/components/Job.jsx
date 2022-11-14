import React from "react";
import "./Job.css";
import { Link } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

const Job = ({ job }) => {
  return (
    <div className="card relative">
      <img src={job.image} alt="" />
      <h4 className="mt-4">{job.name}</h4>
      <p className="mt-2">{job.description}</p>
      <div className="absolute bottom-5 text-blue-500">
        <Link isExternal>
          View job
          <ArrowForwardIcon mx="2px" />
        </Link>
      </div>
    </div>
  );
};

export default Job;
