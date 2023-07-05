import AboutUs from "../components/AboutUs/AboutUs";
import TheFooter from "../components/TheFooter/TheFooter";
import TheHeader from "../components/TheHeader/TheHeader";

function AboutUsPage() {
  return (
    <>
      <div className="background">
        <TheHeader></TheHeader>
        <AboutUs></AboutUs>
      </div>
      <TheFooter></TheFooter>
    </>
  );
}

export default AboutUsPage;
