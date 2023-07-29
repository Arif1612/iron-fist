import React from "react";
import Marquee from "react-fast-marquee";
import useStudent from "../../../hooks/useStudent";

const StudentAchievements = () => {
  const [students] = useStudent();
  return (
    <div>
      <Marquee>
        {students.map((student) => (
          <div className="card w-96 bg-base-100 shadow-xl image-full mr-5 ">
            <img
              className="w-[400px] h-[280px] rounded-xl"
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
      </Marquee>
    </div>
  );
};

export default StudentAchievements;
