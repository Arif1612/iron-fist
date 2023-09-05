import { Helmet } from "react-helmet-async";
import SliderSection from "../SliderSection/SliderSection";
import PopularClasses from "../PopularClasses/PopularClasses";
import InstructorSection from "../InstructorSection/InstructorSection";
import StudentAchievements from "../StudentAchievements/StudentAchievements";
import Container from "../../Container";
import About from "../About/About";
import StudentFeedback from "../StudentFeedback/StudentFeedback";
import ChooseUs from "../ChooseUs/ChooseUse";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Iron Fist | Home </title>
      </Helmet>
      <SliderSection></SliderSection>

     <div className="flex justify-center items-center ">
     <Container>
     <div class="text-center my-10 ">
          <h2 class="text-5xl my-5">About Us</h2>
          <hr class="md:w-4/12 w-9/12 mx-auto border-2 border-gray-700  " />
        </div>
        <About></About>
        <div class="text-center my-10 ">
          <h2 class="text-5xl my-5">Popular Classes</h2>
          <hr class="md:w-4/12 w-9/12 mx-auto border-2 border-gray-700  " />
        </div>
        <PopularClasses></PopularClasses>

        <div class="text-center my-10 ">
          <h2 class="text-5xl my-5">Popular Instructors</h2>
          <hr class="md:w-4/12 w-11/12 mx-auto border-2 border-gray-700  " />
        </div>
        <InstructorSection></InstructorSection>

        <div class="text-center my-10 ">
          <h2 class="text-5xl my-5">Our Brightest Students</h2>
          <hr class="md:w-5/12 w-11/12 mx-auto border-2 border-gray-700  " />
        </div>
        <StudentAchievements></StudentAchievements>
        <div class="text-center my-10 ">
          <h2 class="text-5xl my-5">Our Student Feedback</h2>
          <hr class="md:w-5/12 w-11/12 mx-auto border-2 border-gray-700  " />
        </div>
        <StudentFeedback></StudentFeedback>

        <div class="text-center my-10 ">
          <h2 class="text-5xl my-5">Why Choose us</h2>
          <hr class="md:w-5/12 w-11/12 mx-auto border-2 border-gray-700  " />
        </div>
        <ChooseUs></ChooseUs>
        <div class="text-center my-10 ">
          <h2 class="text-5xl my-5">Contact Us</h2>
          <hr class="md:w-5/12 w-11/12 mx-auto border-2 border-gray-700  " />
        </div>
        
       
      
      </Container>
     </div>
    </div>
  );
};

export default Home;
