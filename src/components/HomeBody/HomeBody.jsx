import DataInput from "../DataInput/DataInput";
import Sidebar from "../Sidebar/Sidebar";

const HomeBody = () => {
  return (
    <>
      <div className="container-full flex gap-4 mx-auto p-2">
      <Sidebar/>
        
        <DataInput/>
        <div className="bg-[#fff] w-[30%] p-4 shadow-lg shadow-slate-100 rounded-md">
          <h4 className="font-Nunito text-xl text-textColor font-semibold">
            Preview
          </h4>
          <p className="font-Nunito text-base text-textColor">
            Fill sections with your exact details.
          </p>
        </div>
      </div>
    </>
  );
};

export default HomeBody;
