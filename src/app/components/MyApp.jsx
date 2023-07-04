import TheHeader from "./TheHeader/TheHeader";
import TheContent from "./TheContent/TheContent";
import "./MyApp.css";
import TheFooter from "./TheFooter/TheFooter";

function MyApp() {
  return (
    <div>
      <TheHeader></TheHeader>
      <TheContent></TheContent>
      <TheFooter></TheFooter>
    </div>
  );
}

export default MyApp;
