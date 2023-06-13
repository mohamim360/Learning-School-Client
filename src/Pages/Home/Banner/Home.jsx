import Banner from "./Banner";
import ExtraSection from "../Popular/ExtraSection";
import PopularClasses from "../Popular/PopularClasses";
import Populerinstructor from "../Popular/Populerinstructor";


const Home = () => {
  return (
    <div>
     <Banner></Banner>
     <PopularClasses></PopularClasses>
     <Populerinstructor></Populerinstructor>
     <ExtraSection></ExtraSection>
    </div>
  );
};

export default Home;