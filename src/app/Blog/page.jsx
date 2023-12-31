import TheFooter from "../components/TheFooter/TheFooter";
import TheHeader from "../components/TheHeader/TheHeader";
import TheContent from "../components/TheContent/TheContent";

function Blog() {
  return (
    <>
      <div className="background">
        <TheHeader></TheHeader>
        <TheContent></TheContent>
      </div>
      <TheFooter></TheFooter>
    </>
  );
}

export default Blog;
