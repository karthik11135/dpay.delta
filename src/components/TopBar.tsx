

const TopBar = () => {
  return (
    <div className="py-4 flex">
      <div className="text-3xl w-full text-wrap py-2.5">
        <div className="px-3 leading-10 text-white">
          Hello , <br></br>
          <span className="text-greenColor">J. Tharsath Babu</span>
        </div>
      </div>
      <div className="ms-auto bg-blue-200 border-none">
        <img src={"/festlogo.jpg"} className="w-28  border-none h-28 object-fill" />
      </div>
    </div>
  );
};

export default TopBar;
