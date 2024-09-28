
import NavItem from "./NavItem";

const BottomBar = () => {
  return (
    <div className="fixed bottom-0 py-5  bg-black w-full">
      <div className="flex justify-around gap-4">
        <NavItem />
      </div>
    </div>
  );
};

export default BottomBar;
