import React from "react";
import usePayment from "../../../hooks/usePayment";

const EnrolledClasses = () => {
  const [payments] = usePayment();
  console.log(payments);

  return (
    <div className="flex justify-center">
      <div className="grid sm:grid-cols-2 sm:w-11/12 lg:w-9/12 mx-auto  grid-cols-1 gap-4">
        {payments.map((classes) => {
          return classes.studentCarts.map((student) => (
            <div key={student._id} className="card bg-base-300 shadow-xl">
              <figure className="px-10 pt-10">
                <img
                  src={student.image}
                  alt="class image"
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body">
                <div>
                  <h2 className="text-left font-semibold text-3xl mb-3 ">
                    {student.subName}
                  </h2>
                  <h2 className="text-left text-xl mb-2 ">
                    <span className="font-semibold "> Instructor: </span>
                    <span className="text-normal">
                      {student.instructorName}
                    </span>
                  </h2>
                  <h2 className="text-left text-xl mb-2 ">
                    <span className="font-semibold "> Price: </span>
                    <span className="text-normal">
                      {student.price}
                    </span>
                  </h2>
                  <h2 className="text-left text-xl mb-2 ">
                    <span className="font-semibold "> Duration: </span>
                    <span className="text-normal">
                      {student.duration}
                    </span>
                  </h2>
                  <h2 className="text-left text-xl mb-2 ">
                    <span className="font-semibold ">Enrolled Date: </span>
                    <span className="text-normal">
                      {student.date}
                    </span>
                  </h2>
                </div>
              </div>
            </div>
          ));
        })}
      </div>
    </div>
  );
};

export default EnrolledClasses;
