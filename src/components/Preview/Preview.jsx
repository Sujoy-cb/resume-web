const Preview = () => {
  return (
    <>
      <div className="bg-[#fff] w-[30%] p-4 shadow-lg shadow-slate-100 rounded-md">
        <h4 className="font-Nunito text-xl text-textColor font-semibold">
          Preview
        </h4>
        <p className="font-Nunito text-base text-textColor">
          Fill sections with your exact details.
        </p>
        <div className="preview flex justify-center">
          <div className="preview_part bg-[#f5f5f5] w-[270px] h-[330px] mt-4"></div>
        </div>
        <div className="grid grid-cols-4 gap-2 mt-4">
          <div className="p1 bg-[#f33737] h-[100px]"></div>
          <div className="p1 bg-[#f33737] h-[100px]"></div>
          <div className="p1 bg-[#f33737] h-[100px]"></div>
          <div className="p1 bg-[#f33737] h-[100px]"></div>
        </div>
        <button
              className="flex justify-center items-center bg-bcolor w-[185px] h-[44px] mt-[48px] border border-solid border-[#502acd] rounded font-Nunito text-lg text-[#fff] font-semibold"
              type="button">
              Download PDF
            </button>
      </div>
    </>
  );
};

export default Preview;
