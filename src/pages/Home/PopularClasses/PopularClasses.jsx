import React from "react";
import useClass from "../../../hooks/useClass";

const PopularClasses = () => {
  const [classes] = useClass();
  // Calculate noOfStudents (totalSeats - availableSeats) for each class
  const classesWithNoOfStudents = classes.map((singleClass) => ({
    ...singleClass,
    noOfStudents: singleClass.totalSeats - singleClass.availableSeats,
  }));

  // Sort the classesWithNoOfStudents array based on noOfStudents in descending order
  const sortedClasses = [...classesWithNoOfStudents].sort(
    (a, b) => b.noOfStudents - a.noOfStudents
  );

  // Get the first six classes from the sorted array
  const topSixClasses = sortedClasses.slice(0, 6);
  return (
    <div>
      <div className="flex justify-center">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-4">
          {topSixClasses.map((singleClass) => (
            <div
              key={singleClass._id}
              className="card w-96 bg-base-100 shadow-xl"
            >
              <figure className="px-10 pt-10">
                <img
                  src={singleClass.picture}
                  alt="Shoes"
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body">
                <div>
                  <h2 className="text-center font-semibold text-3xl mb-3 ">
                    {singleClass.subName}
                  </h2>
                  <h2 className="text-center text-xl mb-2 ">
                    <span className="font-semibold "> Instructor: </span>
                    <span className="text-normal">
                      {singleClass.instructorsName}
                    </span>
                  </h2>
                  <div className="flex">
                    <div className="w-1/2 text-lg">
                      <p className="mb-2">
                        <span className="font-semibold"> Duration:</span>
                        {singleClass.courseDuration}
                      </p>
                      <p className="mb-2">
                        <span className="font-semibold"> Total Class:</span>
                        {singleClass.totalClass}
                      </p>
                      <p>
                        <span className="font-semibold"> Price:</span>
                        {singleClass.price}
                      </p>
                    </div>
                    <div className="text-right text-lg">
                      <p className="mb-2">
                        <span className="font-semibold"> Total Seats:</span>{" "}
                        {singleClass.totalSeats}
                      </p>
                      <p className="mb-2">
                        {" "}
                        <span className="font-semibold">
                          {" "}
                          Available Seats:{" "}
                        </span>{" "}
                        {singleClass.availableSeats}
                      </p>
                      <p>
                        {" "}
                        <span className="font-semibold">
                          {" "}
                          No. Of Students:{" "}
                        </span>{" "}
                        {singleClass.noOfStudents}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card-actions w-full">
                  <button className="btn btn-primary w-full font-semibold">
                    select
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularClasses;
