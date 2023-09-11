import React from "react";
import useInstructor from "../../hooks/useInstructor";
import { Helmet } from "react-helmet-async";
import Container from "../Container";

const Instructor = () => {
  const [instructors] = useInstructor();

  const sortedInstructors = [...instructors].sort(
    (a, b) => b.noOfClass - a.noOfClass
  );
  

  return (

      <div className="flex justify-center items-center">
          <Container>
      <div>
      <Helmet>
        <title>Iron Fist | Instructors </title>
      </Helmet>
      <div className="flex justify-center mt-5">
        <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
          {sortedInstructors.map((instructor) => (
            <div
              key={instructor._id}
              className="card w-auto bg-base-100 shadow-xl"
            >
              <figure className="px-10 pt-10">
                <img
                  src={instructor.image}
                  alt="instructor"
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{instructor.name}</h2>
                <p>{instructor.email}</p>
                <p>Number of Classes: {instructor.noOfClass}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </Container>
      </div>
    
  );
};

export default Instructor;
