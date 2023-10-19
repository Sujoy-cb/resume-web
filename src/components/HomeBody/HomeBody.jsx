import DataInput from "../DataInput/DataInput";
import Preview from "../Preview/Preview";
import Sidebar from "../Sidebar/Sidebar";

const HomeBody = () => {
  return (
    <>
      <div className="container-full flex gap-4 mx-auto p-2">
        <Sidebar />
        <DataInput />
        <Preview />
      </div>
    </>
  );
};

export default HomeBody;
