import {AiOutlineArrowLeft} from "react-icons/ai"
import {AiOutlineArrowRight} from "react-icons/ai"
const DataInput = () => {
  return (
    <>
      <div className="bg-[#fff] w-[50%] p-4 shadow-lg shadow-slate-100 rounded-md">
        <h4 className="font-Nunito text-xl text-textColor font-semibold">
          Establish fact that a reader
        </h4>
        <p className="font-Nunito text-base text-textColor">
          Fill it out, and land that dream job! Create and download your
          professional resume in less than 5 minutes.
        </p>
        <div className="input_parts">
          <div className="grid grid-cols-2 gap-4">
            <div className="first_name mt-4">
              <label htmlFor="">
                <p className="font-Nunito text-base text-[#777] font-normal">
                  First name
                </p>
                <input
                  className="border border-solid border-[#f5f5f5] bg-[#f5f5f5] w-full p-2 rounded mt-2 outline-none"
                  type="text"
                />
              </label>
            </div>
            <div className="last_name mt-4">
              <label htmlFor="">
                <p className="font-Nunito text-base text-[#777] font-normal">
                  Last name
                </p>
                <input
                  className="border border-solid border-[#f5f5f5] bg-[#f5f5f5] w-full p-2 rounded mt-2 outline-none"
                  type="text"
                />
              </label>
            </div>
            <div className="email mt-4">
              <label htmlFor="">
                <p className="font-Nunito text-base text-[#777] font-normal">
                  Email address
                </p>
                <input
                  className="border border-solid border-[#f5f5f5] bg-[#f5f5f5] w-full p-2 rounded mt-2 outline-none"
                  type="email"
                />
              </label>
            </div>
            <div className="contact_number mt-4">
              <label htmlFor="">
                <p className="font-Nunito text-base text-[#777] font-normal">
                  Contact number
                </p>
                <input
                  className="border border-solid border-[#f5f5f5] bg-[#f5f5f5] w-full p-2 rounded mt-2 outline-none"
                  type="text"
                />
              </label>
            </div>
            <div className="city mt-4">
              <label htmlFor="">
                <p className="font-Nunito text-base text-[#777] font-normal">
                  City
                </p>
                <input
                  className="border border-solid border-[#f5f5f5] bg-[#f5f5f5] w-full p-2 rounded mt-2 outline-none"
                  type="text"
                />
              </label>
            </div>
            <div className="state mt-4">
              <label htmlFor="">
                <p className="font-Nunito text-base text-[#777] font-normal">
                  State
                </p>
                <input
                  className="border border-solid border-[#f5f5f5] bg-[#f5f5f5] w-full p-2 rounded mt-2 outline-none"
                  type="text"
                />
              </label>
            </div>
            <div className="country mt-4">
              <label htmlFor="">
                <p className="font-Nunito text-base text-[#777] font-normal">
                  Country
                </p>
                <input
                  className="border border-solid border-[#f5f5f5] bg-[#f5f5f5] w-full p-2 rounded mt-2 outline-none"
                  type="text"
                />
              </label>
            </div>
            <div className="zip_code mt-4">
              <label htmlFor="">
                <p className="font-Nunito text-base text-[#777] font-normal">
                  Zip code
                </p>
                <input
                  className="border border-solid border-[#f5f5f5] bg-[#f5f5f5] w-full p-2 rounded mt-2 outline-none"
                  type="text"
                />
              </label>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="date_of_birth mt-4">
              <label htmlFor="">
                <p className="font-Nunito text-base text-[#777] font-normal">
                  Date of birth
                </p>
                <input
                  className="border border-solid border-[#f5f5f5] bg-[#f5f5f5] w-full p-2 rounded mt-2 outline-none"
                  type="date"
                />
              </label>
            </div>
            <button
              className="flex justify-center items-center bg-bcolor w-[185px] h-[44px] mt-[48px] border border-solid border-[#502acd] rounded font-Nunito text-lg text-[#fff] font-semibold"
              type="submit">
              <AiOutlineArrowLeft/>
              Prev
            </button>
            <button
              className="flex justify-center items-center bg-bcolor w-[185px] h-[44px] mt-[48px] border border-solid border-[#502acd] rounded font-Nunito text-lg text-[#fff] font-semibold"
              type="submit">
              Next
              <AiOutlineArrowRight/>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DataInput;
