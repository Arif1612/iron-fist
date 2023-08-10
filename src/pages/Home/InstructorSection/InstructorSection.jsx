import React from "react";
import useInstructor from "../../../hooks/useInstructor";

const InstructorSection = () => {
  const [instructors] = useInstructor();
  // Sort the classes array based on totalSeats in descending order
  const sortedInstructors = [...instructors].sort(
    (a, b) => b.noOfClass - a.noOfClass
  );

  // Slice the first 6 instructors from the sorted list
  const displayedInstructors = sortedInstructors.slice(0, 6);


  return (
    <div>
      <div className="flex justify-center">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-4">
          {displayedInstructors.map((instructor) => (
            <div
              key={instructor._id}
              className="card w-full bg-base-100 shadow-xl"
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
  );
};

export default InstructorSection;
