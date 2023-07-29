import React from "react";
import useClass from "../../../hooks/useClass";

const PopularClasses = () => {
  const [classes] = useClass();
  // Sort the classes array based on totalSeats in descending order
  const sortedClasses = [...classes].sort(
    (a, b) => b.totalSeats - a.totalSeats
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
                  <h2 className="text-center font-bold text-3xl mb-3 ">
                    {singleClass.subName}
                  </h2>
                  <h2 className="text-center text-xl mb-2 ">
                    <span className="font-bold "> Instructor: </span>
                    <span className="text-normal">
                      {singleClass.instructorsName}
                    </span>
                  </h2>
                  <div className="flex">
                    <div className="w-1/2 text-lg">
                      <p className="mb-2">
                        <span className="font-bold"> Duration:</span>
                        {singleClass.courseDuration}
                      </p>
                      <p className="mb-2">
                        <span className="font-bold"> Total Class:</span>
                        {singleClass.totalClass}
                      </p>
                      <p>
                        <span className="font-bold"> Price:</span>
                        {singleClass.Price}
                      </p>
                    </div>
                    <div className="text-right text-lg">
                      <p className="mb-2">
                        <span className="font-bold"> Total Seats:</span>{" "}
                        {singleClass.totalSeats}
                      </p>
                      <p>
                        {" "}
                        <span className="font-bold">
                          {" "}
                          Available Seats:{" "}
                        </span>{" "}
                        {singleClass.availableSeats}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card-actions w-full">
                  <button className="btn btn-primary w-full font-bold">
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
