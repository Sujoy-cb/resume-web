import { FaFacebookF } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
const Signup = () => {
  return (
    <>
      <div className="sign_up min-h-screen flex justify-center items-center">
        <div className="sign_up_form w-[400px] border border-[#f5f5f5] rounded-lg p-4 shadow-sm">
          <h3>Sign up</h3>
          <div className="form">
            <input
              className="w-full mt-3 border border-[#d1d0d0] p-2 rounded outline-0"
              type="text"
              placeholder="Your name"
            />
            <input
              className="w-full mt-3 border border-[#d1d0d0] p-2 rounded outline-0"
              type="email"
              placeholder="Your email"
            />
            <input
              className="w-full mt-3 border border-[#d1d0d0] p-2 rounded outline-0"
              type="password"
              placeholder="Password"
            />
            <div className="btns mt-4">
              <button className="w-2/5 font-Nunito text-lg bg-bcolor text-[#f8fafc] p-2 rounded-full">
                Sign up
              </button>
              <div className="social_items flex justify-center mt-4">
              <p className='font-Nunito text-sm text-[#444] mt-[10px]'>Create accout with</p>
                <span className='text-[#3b5998] text-xl border border-[#e7e7e7] rounded-full p-2 mx-2'><FaFacebookF /></span>
                <span className='text-[#0072b1] text-xl border border-[#e7e7e7] rounded-full p-2'><FaLinkedinIn /></span>
                <span className='text-xl border border-[#e7e7e7] rounded-full p-2 mx-2'><FcGoogle /></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
