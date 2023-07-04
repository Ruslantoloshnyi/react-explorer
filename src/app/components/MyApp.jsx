import TheHeader from "./TheHeader/TheHeader";
import TheContent from "./TheContent/TheContent";
import "./MyApp.css";

function MyApp() {
  return (
    <div className="background">
      <TheHeader></TheHeader>
      <TheContent></TheContent>
    </div>
  );
}

export default MyApp;
