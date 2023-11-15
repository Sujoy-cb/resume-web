// import DataInput from "../DataInput/DataInput";
// import Experience from "../Experience/Experience";
// import Education from "../Education/Education";
// import Achievements from "../Achievements/Achievements";
// import Languages from "../Languages/Languages";
import Courses from "../Courses/Courses";
import Preview from "../Preview/Preview";
import Sidebar from "../Sidebar/Sidebar";
// import Summary from "../Summary/Summary";

const HomeBody = () => {
  return (
    <>
      <div className="container-full flex gap-4 mx-auto p-2">
        <Sidebar />
        {/* <DataInput /> */}
        {/* <Summary/> */}
        {/* <Experience/> */}
        {/* <Education/> */}
        {/* <Languages/> */}
        {/* <Achievements/> */}
        <Courses/>
        <Preview />
      </div>
    </>
  );
};

export default HomeBody;
