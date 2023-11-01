
const Login = () => {
  return (
    <>
      <div className="sign_up min-h-screen flex justify-center items-center">
        <div className="sign_up_form w-[400px] bg-[#fff] border border-[#fff] rounded-lg p-4 shadow-sm">
          <h3 className='font-josef text-2xl font-bold text-[#0F2C59]'>Login to your account</h3>
          <div className="form">
            
            <input
              className="w-full mt-3 border border-[#d1d0d0] p-2 rounded outline-1 outline-bcolor "
              type="email"
              placeholder="Your email"
            />
            <input
              className="w-full mt-3 border border-[#d1d0d0] p-2 rounded outline-1 outline-bcolor"
              type="password"
              placeholder="Password"
            />
            
            <div className="btns flex mt-4">
              <button className="w-2/5 font-Nunito text-lg bg-bcolor text-[#f8fafc] p-2 rounded-full">
                Login
              </button>
              <p className='font-Nunito text-sm font-medium text-[#444] ml-4 mt-[13px]'>Need an account? Sinup</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
