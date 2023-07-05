import TheFooter from "../components/TheFooter/TheFooter";
import TheHeader from "../components/TheHeader/TheHeader";
import TheTravel from "../components/TheTravel/TheTravel";

function Stories() {
  return (
    <>
      <div className="background">
        <TheHeader></TheHeader>
        <TheTravel></TheTravel>
      </div>
      <TheFooter></TheFooter>
    </>
  );
}

export default Stories;
