
import { useNavigate, useSearchParams } from "react-router-dom";


const Payment = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const balance = searchParams.get("amount");
  const shopName = searchParams.get("shop");
  const timeText = searchParams.get("timeText");

  return (
    <div className="h-screen bg-bgColor overflow-scroll">

      <div className="px-3 py-2 pt-4 mb">
        <img src="/paymenttick.jpg"></img>
        <div className="text-center">
          <h1 className="text-white mb-5 font-medium text-center text-4xl">
            Payment Successful
          </h1>
          <p className="text-greenColor mb-4 font-bold text-6xl">
            &#8377; {balance}
          </p>
          <p className=" text-slate-500 tracking-wide text-xl">Paid To:</p>
          <h2 className="text-white mb-5 font-semibold text-4xl tracking-wide">
            {shopName}
          </h2>
          <p className="text-greenColor mb-2 text-2xl">
            {timeText} Sep 29, 2024
          </p>
          <p className="text-slate-500 mb-1 tracking-wide text-xl">
            Payment Ref Id:
          </p>
          <p className="text-slate-200 font-light text-xl tracking-wider">
            0c54de55-bh01 <br></br>-4cf3-bfe3-...
          </p>

          <p
            onClick={() => navigate("/")}
            className="px-10 py-2 text-white text-2xl font-light my-3 mx-auto rounded-md bg-slate-800 w-fit"
          >
            Back
          </p>
        </div>
      </div>
    </div>
  );
};

export default Payment;
