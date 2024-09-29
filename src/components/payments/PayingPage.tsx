import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { WarningIcon, WrongIcon } from "../ui/Icons";
import { useNavigate } from "react-router-dom";

const PayingPage = () => {
  const { id } = useParams();
  console.log(id);
  const [amount, setAmount] = useState("");
  const navigate = useNavigate();

  const now = new Date();
  let hours = now.getHours();
  let minutes: string | number = now.getMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";

  // Convert hours to 12-hour format
  hours = hours % 12;
  hours = hours ? hours : 12; // If hour is 0, make it 12

  // Add leading zero to minutes if needed
  minutes = minutes < 10 ? "0" + minutes : minutes;

  const timeString = `${hours}:${minutes} ${ampm}`;

  const payHanlder = () => {
    console.log(amount);

    navigate(`/payment/?shop=${id}&amount=${amount}&timeText=${timeString}`);
  };

  return (
    <div className="h-screen py-5 text-white bg-bgColor">
      <h4 className="mx-auto w-fit  text-2xl tracking-wider mb-5">Paying</h4>
      <h2 className="text-4xl  py-3.5  rounded-xl px-5 mb-32 w-fit mx-auto bg-slate-800">
        {id}
      </h2>

      <p className="text-xl mb-4 w-5/6 text-center mx-auto font-light">
        Enter the amount you want to pay
      </p>
      <div className="my-3.5  rounded-lg">
        <div className="grid grid-cols-12 text-center  mx-auto w-4/6 py-4">
          <p className="px-2.5 py-2.5 text-xl col-span-3 border bg-slate-700 rounded-tl-lg rounded-bl-lg ">
            &#8377;
          </p>
          <div className="col-span-6 border px-2 bg-slate-700 h-full ">
            <input
              type="text"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setAmount(e.currentTarget.value)
              }
              className="focus:outline-none bg-slate-700 h-full"
            ></input>
          </div>
          <p className="px-2.5 py-2.5 col-span-3 border rounded-tr-lg rounded-br-lg bg-slate-700 ">
            <WrongIcon />
          </p>
        </div>
      </div>
      <div className="mx-auto my-10 flex gap-2 rounded-2xl px-4 text-black font-semibold py-3 bg-orange-300 w-fit">
        <p className="p-2">
          <WarningIcon />
        </p>
        <h3 className="text-2xl flex items-center">Pay near the stall</h3>
      </div>
      <div className="bg-greenColor py-3 px-10 my-32 w-fit mx-auto text-black text-3xl font-bold rounded-xl">
        <h2 onClick={payHanlder}>PAY NOW</h2>
      </div>
    </div>
  );
};

export default PayingPage;
