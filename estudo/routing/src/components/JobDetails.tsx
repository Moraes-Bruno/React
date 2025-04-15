import { LoaderFunctionArgs, useLoaderData } from "react-router-dom";

function JobDetails() {
  const JobDetails = useLoaderData();

  return (
    <div className="job-details">
      <p>
        <b>{JobDetails.title} </b>
      </p>
      <p>
        <b>Salario: R${JobDetails.salary}</b>
      </p>
      <p>
        <b>Local: {JobDetails.location}</b>
      </p>  
      <p><b>Descrição: Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque expedita ut, sed deleniti maxime voluptas aut molestiae repudiandae debitis voluptate dolor deserunt rem quo libero quidem? Laudantium doloribus praesentium aspernatur?</b></p>  

      <button>Candidatar</button>  
    </div>
  );
}

export default JobDetails;

export const JobDetailsLoader = async ({ params }: LoaderFunctionArgs) => {
  const { id } = params;
  const res = await fetch(`http://localhost:5000/jobs/${id}`);
  return res.json();
};
