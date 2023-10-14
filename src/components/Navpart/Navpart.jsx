import logo from '../../assets/logo.png'
const Navpart = () => {
  return (
    <>
      <div className="navpart bg-bcolor p-5">
        <div className="container mx-auto">
        <div className="nav_items flex justify-between">
          <div className="logo">
            <img src={logo} alt="logo" width={200} height={80} />
          </div>
          <div className="nav_item flex items-center"> 
            <ul className="flex gap-8">
                <li className="font-Nunito text-fcolor text-base font-medium">Dashboard</li>
                <li className="font-Nunito text-fcolor text-base font-medium">Upgrade</li>
                <li className="font-Nunito text-fcolor text-base font-medium">English</li>
                <li className="font-Nunito text-fcolor text-base font-medium">User name</li>
                <li className="font-Nunito text-fcolor text-base font-medium">User name</li>
                <li className="font-Nunito text-fcolor text-base font-medium">User name</li>
                <li className="font-Nunito text-fcolor text-base font-medium">User name</li>
            </ul>
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default Navpart;
