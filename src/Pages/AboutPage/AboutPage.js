import DisplayBox from "../../Components/AboutPageComponents/DisplayBox";
import DropDownList from "../../Components/AboutPageComponents/DropDownList";
import MainContent from "../../UI/MainContent";
const AboutPage = (props) => {
  return (
    <MainContent>
      <DropDownList />
      <DisplayBox />
    </MainContent>
  );
};
export default AboutPage;
