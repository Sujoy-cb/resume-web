const Signup = () => {
  return (
    <>
      <div className="sign_up min-h-screen flex justify-center items-center">
        <div className="sign_up_form w-[400px] border border-[#f5f5f5] rounded-lg p-4 shadow-sm">
          <h3>Sign up</h3>
          <div className="form">
            <input className="w-full border border-[#d1d0d0] p-2 rounded" type="text" placeholder="Your name" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
