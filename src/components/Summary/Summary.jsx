const Summary = () => {
  return (
    <>
      <div className="w-[50%] bg-fcolor p-4 shadow-lg shadow-slate-100 rounded-md">
        <h4 className="font-Nunito text-xl text-textColor font-semibold">
          Add summary about you
        </h4>
        <p className="font-Nunito text-base text-textColor">
          Fill it out, and land that dream job! Create and download your
          professional resume in less than 5 minutes.
        </p>
        <div className="summary_input h-[400px]">
          <textarea className="border border-solid border-[#f5f5f5] bg-[#f5f5f5] w-full h-full p-2 rounded mt-2 outline-none" name="#" id="summaryInput" cols="30" rows="10"></textarea>
        </div>
      </div>
    </>
  );
};

export default Summary;
