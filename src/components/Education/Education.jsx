import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";
import { AiOutlinePlusCircle } from "react-icons/ai";
import FroalaEditorComponent from "react-froala-wysiwyg";
import "froala-editor/css/froala_style.min.css";
import "froala-editor/css/froala_editor.pkgd.min.css";

const Education = () => {
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
        <div className="ex_inputs mt-4">
          <h4 className="font-Nunito text-xl text-textColor font-bold">
            Work Experiences
          </h4>
          <div className="ex_inputItems grid grid-cols-2 gap-4">
            <div className="company_name mt-4">
              <label htmlFor="">
                <input
                  className="border border-solid border-[#f5f5f5] bg-[#f5f5f5] w-full p-2 rounded mt-2 outline-none"
                  type="text"
                  placeholder="Company name"
                />
              </label>
            </div>
            <div className="job_title mt-4">
              <label htmlFor="">
                <input
                  className="border border-solid border-[#f5f5f5] bg-[#f5f5f5] w-full p-2 rounded mt-2 outline-none"
                  type="text"
                  placeholder="Job title"
                />
              </label>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="date_of_birth mt-4">
                <label htmlFor="">
                  <p className="font-Nunito text-base text-[#777] font-normal">
                    Start date
                  </p>
                  <input
                    className="border border-solid border-[#f5f5f5] bg-[#f5f5f5] w-full p-2 rounded mt-2 outline-none"
                    type="date"
                  />
                </label>
              </div>
              <div className="date_of_birth mt-4">
                <label htmlFor="">
                  <p className="font-Nunito text-base text-[#777] font-normal">
                    End date
                  </p>
                  <input
                    className="border border-solid border-[#f5f5f5] bg-[#f5f5f5] w-full p-2 rounded mt-2 outline-none"
                    type="date"
                  />
                </label>
              </div>
              <div className="still_working flex gap-1">
              <input id="checkbox" type="checkbox" />
              <label htmlFor="checkbox" className="font-Nunito text-base text-[#777] font-normal" >
                    Still working
                  </label>
              </div>
            </div>
            <div className="company_address mt-4">
              <label htmlFor="">
                <p className="font-Nunito text-base text-[#777] font-normal">
                  Company address
                </p>
                <input
                  className="border border-solid border-[#f5f5f5] bg-[#f5f5f5] w-full p-2 rounded mt-2 outline-none"
                  type="text"
                />
              </label>
            </div>
          </div>
        </div>
        <div className="experience mt-4">
          <p className="font-Nunito text-base text-[#777] font-normal mb-2">
            Your responsibilities
          </p>
          <FroalaEditorComponent tag="textarea" />
        </div>
        <div className="add_more flex mt-4 cursor-default">
          <AiOutlinePlusCircle className="text-xl text-bcolor mt-[2px]" />
          <span>
            <p className="font-Nunito text-base text-[#777] font-normal ml-1">
              Your responsibilities
            </p>
          </span>
        </div>
        <div className="buttons flex justify-end">
          <button
            className="flex justify-center items-center bg-[#f5f5f5] w-[185px] h-[44px] mt-[48px] border border-solid border-[#f5f5f5] rounded font-Nunito text-lg text-textColor font-semibold mr-4 hover:bg-bcolor hover:text-[#fff] hover:border-[#502acd] transition duration-500 ease-in-out"
            type="submit">
            <AiOutlineArrowLeft />
            Prev
          </button>
          <button
            className="flex justify-center items-center bg-bcolor w-[185px] h-[44px] mt-[48px] border border-solid border-[#502acd] rounded font-Nunito text-lg text-[#fff] font-semibold"
            type="submit">
            Next
            <AiOutlineArrowRight />
          </button>
        </div>
      </div>
    </>
  )
}

export default Education