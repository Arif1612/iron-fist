import React from "react";
import useClass from "../../../hooks/useClass";
import SelectedClasses from "../../Classes/SelectedClasses/SelectedClasses";

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
            <SelectedClasses
              key={singleClass._id}
              classes={singleClass}
            ></SelectedClasses>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularClasses;
