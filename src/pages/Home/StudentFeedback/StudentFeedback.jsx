import React from "react";

const StudentFeedback = () => {
  return (
    <div>
      <div className="carousel w-full ">
        {/* 1 */}
        <div id="slide1" className="carousel-item relative w-full">
          <div className="card w-full bg-gray-200 shadow-xl mx-auto">
            <div className="card-body items-center text-center">
              <h2 className="card-title">John Doe Kung Fu</h2>
              <p className="w-10/12">
              "I've been training at Iron Fist for a year now, and it's been an incredible journey. The instructors are not only skilled but also incredibly patient and encouraging. I've gained confidence in self-defense and improved my fitness. The sense of community here is fantastic, and I've made some great friends along the way."
              </p>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>

        {/* 2 */}

        <div id="slide2" className="carousel-item relative w-full">
          <div className="card w-full bg-gray-200 shadow-xl mx-auto">
            <div className="card-body items-center text-center">
              <h2 className="card-title">James Taylor</h2>
              <p className="w-10/12">  
              "Iron Fist is a great school, and I've learned so much in my time here. The instructors are top-notch, and I love the discipline and focus the training instills. My only suggestion would be to add more variety to the training routines to keep things fresh and challenging."
              </p>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        {/* 3 */}

        <div id="slide3" className="carousel-item relative w-full hidden md:block ">
          <div className="card w-full bg-gray-200 shadow-xl mx-auto">
            <div className="card-body items-center text-center">
              <h2 className="card-title">Shah Rukh Khan</h2>
              <p className="w-10/12">
              "I have mixed feelings about my experience at Iron Fist. While the instructors are knowledgeable, I found the class sizes to be too large, which made it challenging to get individualized attention. Also, the facility could use some upgrades. However, I did appreciate the sense of community and the focus on discipline."
              </p>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      
        {/* 4 */}
        <div id="slide4" className="carousel-item relative w-full hidden md:block">
          <div className="card w-full bg-gray-200 shadow-xl mx-auto">
            <div className="card-body items-center text-center">
              <h2 className="card-title">Micle Bevan</h2>
              <p className="w-10/12">
               "I've seen significant improvement in your flexibility and
                kicking height over the past few weeks. Your dedication to
                stretching and practicing is paying off. Keep pushing yourself,
                and you'll reach new heights in your martial arts journey."
                These feedback examples cover positive reinforcement,
                constructive criticism, technical guidance, and encouragement to
                motivate the student's growth and development.""
              </p>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentFeedback;
