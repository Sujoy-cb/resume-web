const Navpart = () => {
  return (
    <>
      <div className="navpart h-[100px] bg-bcolor">
        <div className="container mx-auto">
        <div className="nav_items flex justify-between">
          <div className="logo">logo</div>
          <div className="nav_item"> 
            <ul className="flex gap-8">
                <li className="font-Nunito text-fcolor text-sm font-medium">Dashboard</li>
                <li className="font-Nunito text-fcolor text-sm font-medium">Upgrade</li>
                <li className="font-Nunito text-fcolor text-sm font-medium">English</li>
                <li className="font-Nunito text-fcolor text-sm font-medium">User name</li>
                <li className="font-Nunito text-fcolor text-sm font-medium">User name</li>
                <li className="font-Nunito text-fcolor text-sm font-medium">User name</li>
                <li className="font-Nunito text-fcolor text-sm font-medium">User name</li>
            </ul>
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default Navpart;
