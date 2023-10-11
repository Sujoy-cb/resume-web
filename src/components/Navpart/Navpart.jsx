const Navpart = () => {
  return (
    <>
      <div className="navpart h-[100px] bg-bcolor">
        <div className="container mx-auto">
        <div className="nav_items flex justify-between">
          <div className="logo">logo</div>
          <div className="nav_item"> 
            <ul className="flex gap-8">
                <li>Dashboard</li>
                <li>Upgrade</li>
                <li>English</li>
                <li>User name</li>
            </ul>
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default Navpart;
