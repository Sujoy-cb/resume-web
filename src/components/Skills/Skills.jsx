import { FaTimes } from "react-icons/fa";
const Skills = () => {
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
        <h4 className="font-Nunito text-xl text-textColor font-bold mt-4">
          Add your skills in your resume
        </h4>
        <div className="input_part">
          <input
            className="border border-solid border-[#f5f5f5] bg-[#f5f5f5] w-full p-2 rounded mt-2 outline-none"
            type="search"
            placeholder="Search and add skills"
          />
          <div className="addedSkills flex justify-between flex-wrap mt-4">
            <span className="w-[120px] flex justify-between items-center bg-bcolor p-2 rounded-full font-Nunito text-base text-[#fff] font-medium mt-2">
              React{" "}
              <span>
                <FaTimes />
              </span>
            </span>
            <span className="w-[120px] flex justify-between items-center bg-bcolor p-2 rounded-full font-Nunito text-base text-[#fff] font-medium mt-2">
              Node{" "}
              <span>
                <FaTimes />
              </span>
            </span>
            <span className="w-[120px] flex justify-between items-center bg-bcolor p-2 rounded-full font-Nunito text-base text-[#fff] font-medium mt-2">
              MongoDB{" "}
              <span>
                <FaTimes />
              </span>
            </span>
            <span className="w-[120px] flex justify-between items-center bg-bcolor p-2 rounded-full font-Nunito text-base text-[#fff] font-medium mt-2">
              Express JS{" "}
              <span>
                <FaTimes />
              </span>
            </span>
            <span className="w-[120px] flex justify-between items-center bg-bcolor p-2 rounded-full font-Nunito text-base text-[#fff] font-medium mt-2">
              Next Js{" "}
              <span>
                <FaTimes />
              </span>
            </span>
            <span className="w-[120px] flex justify-between items-center bg-bcolor p-2 rounded-full font-Nunito text-base text-[#fff] font-medium mt-2">
              Prisma{" "}
              <span>
                <FaTimes />
              </span>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
