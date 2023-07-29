import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../../Providers/AuthProvider";
import useClass from "../../../hooks/useClass";
import SelectedClasses from "../SelectedClasses/SelectedClasses";
import { useContext } from "react";

const Classes = () => {
  const { user } = useContext(AuthContext);
  const [classes] = useClass();

  // Sort the classes array based on totalSeats in descending order
  const sortedClasses = [...classes].sort(
    (a, b) => b.totalSeats - a.totalSeats
  );

  return (
    <div>
      <Helmet>
        <title>Iron Fist | Classes </title>
      </Helmet>
      <div className="flex justify-center">
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
