import React from "react";
import Marquee from "react-fast-marquee";
import useStudent from "../../../hooks/useStudent";

const StudentAchievements = () => {
  const [students] = useStudent();
  return (
    <div>
      {/* <Marquee> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 ">
        {students.map((student) => (
        
       
           <div
            key={student._id}
            className="card w-full bg-base-100 shadow-xl image-full mr-5 "
          >
            <img
              className="w-full rounded-xl"
              src={student.picture}
              alt="Shoes"
            />

            <div className="card-body text-center  ">
              <div className="mt-12">
                <h2 className="text-2xl font-bold">{student.studentName}</h2>
                <h2 className="text-2xl font-semibold">{student.courseName}</h2>
                <p>{student.achievements}</p>
              </div>
            </div>
          </div>
       
        ))}
        </div>
      {/* </Marquee> */}
    </div>
  );
};

export default StudentAchievements;
