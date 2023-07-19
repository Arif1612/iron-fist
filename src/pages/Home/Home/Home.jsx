import { Helmet } from "react-helmet-async";
import SliderSection from "../SliderSection/SliderSection";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Iron Fist | Home </title>
      </Helmet>
      <SliderSection></SliderSection>
    </div>
  );
};

export default Home;
