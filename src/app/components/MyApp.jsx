import TheHeader from "./TheHeader/TheHeader";
import TheContent from "./TheContent/TheContent";
import "./MyApp.css";
import TheFooter from "./TheFooter/TheFooter";
import TheStories from "./TheStories/TheStories";

function MyApp() {
  return (
    <>
      <div className="background">
        <TheHeader></TheHeader>
        <TheContent></TheContent>
      </div>
      <TheStories></TheStories>
      <TheFooter></TheFooter>
    </>
  );
}

export default MyApp;
