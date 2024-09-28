
import BottomBar from "./BottomBar";


export const MorePage = () => {
  return (
    <div className="h-screen font-bold bg-bgColor">
      <BottomBar />
      <form className="px-4 mx-auto py-5">
        <div>
          <label className="text-white">Enter amount</label>
          <input type="text" className="rounded focus:outline-none p-2 m-2" />
        </div>
        <div className="my-4">
          <select name="pets" id="pet-select" className="rounded-md">
            <option value="">Choose the stall you want to taskarinch</option>
            <option value="Rolls on Wheels">Rolls on Wheels</option>
            <option value="Fuzan">Fuzan</option>
            <option value="Wings on Fire">Wings on Fire</option>
            <option value="Kerala Food Hub">Kerala Food Hub</option>
            <option value="Little Town Waffles">Little Town Waffles</option>
            <option value="2k Foodies Hut">2k Foodies Hut</option>
            <option value="Senthor Bhavan">Senthor Bhavan</option>
            <option value="Anjappar">Anjappar</option>
            <option value="2k Foodies Hut">Delhi Malai Chaap</option>
            <option value="Bamboo Garden">Bamboo Garden</option>
            <option value="GB Foods">GB Foods</option>
            <option value="Kamartaj Momos">Kamartaj Momos</option>
          </select>
        </div>

        <button className="bg-greenColor text-lg px-2 py-3 rounded ">
          Taskarinchu
        </button>
      </form>
    </div>
  );
};
