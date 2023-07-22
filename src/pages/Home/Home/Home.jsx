import { Helmet } from "react-helmet-async";
import SliderSection from "../SliderSection/SliderSection";
import PopularClasses from "../PopularClasses/PopularClasses";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Iron Fist | Home </title>
      </Helmet>
      <SliderSection></SliderSection>
      <div class="text-center my-10 " >
        <h2 class="text-5xl my-5">Popular Classes</h2>
        <hr class="md:w-4/12 w-9/12 mx-auto border-2 border-gray-700  " />
      </div>
      <PopularClasses></PopularClasses>
    </div>
  );
};

export default Home;
