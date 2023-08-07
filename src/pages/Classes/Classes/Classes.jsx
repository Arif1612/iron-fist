import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../../Providers/AuthProvider";
import useClass from "../../../hooks/useClass";

import { useContext } from "react";
import SelectedClasses from "../SelectedClasses/SelectedClasses";

const Classes = () => {
  const { user } = useContext(AuthContext);
  const [classes] = useClass();

  // Calculate noOfStudents (totalSeats - availableSeats) for each class
  const classesWithNoOfStudents = classes.map((singleClass) => ({
    ...singleClass,
    noOfStudents: singleClass.totalSeats - singleClass.availableSeats,
  }));

  // Sort the classes array based on noOfStudents in descending order
  const sortedClasses = [...classesWithNoOfStudents].sort(
    (a, b) => b.noOfStudents - a.noOfStudents
  );

  return (
    <div>
      <Helmet>
        <title>Iron Fist | Classes </title>
      </Helmet>
      <div className="flex justify-center mt-5">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-4">
          {sortedClasses.map((singleClass) => (
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

export default Classes;
