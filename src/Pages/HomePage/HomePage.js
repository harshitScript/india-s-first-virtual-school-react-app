import Header from "../../Components/HomePageComponents/Header/Header";
import MainBody from "../../Components/HomePageComponents/MainBody/MainBody";
import SubBody from "../../Components/HomePageComponents/SubBody/SubBody";
import SubHeaderButtonsAndBlock from "../../Components/HomePageComponents/SubHeaderButtons/SubHeaderButtonsAndBlock";
import MainContent from "../../UI/MainContent";

const HomePage = (props) => {
  return (
    <MainContent>
      <Header />
      <SubHeaderButtonsAndBlock />
      <MainBody />
      <SubBody />
    </MainContent>
  );
};
export default HomePage;
