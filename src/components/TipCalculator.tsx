import logo from "../assets/images/logo.svg";
import dollarIcon from "../assets/images/icon-dollar.svg";
import peopleIcon from "../assets/images/icon-person.svg";
import { useRef, useState } from "react";
import CustomTotal from "../utils/CustomTotal";

type discountType = number[];

const discountData: discountType = [5, 10, 15, 25, 50];

const TipCalculator = () => {
  const [inputs, setInputs] = useState({
    bill: "",
    custom: "",
    people: "",
  });
  const [discount, setDiscount] = useState(0);

  const handle = () => {
    if (!inputs.bill && !inputs.people) return;
    return Number(inputs?.bill) / Number(inputs?.people);
  };

  const handleTip = () => {
    if (!handle()) return;
    return Number(handle()) * Number(discount / 100);
  };

  const handleTotal = () => {
    if (!handleTotal && !handleTip) return;
    return Number(handle()) + Number(handleTip());
  };

  const handleReset = () => {
    setInputs({
      bill: "",
      custom: "",
      people: "",
    });
    setDiscount(0);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    return setInputs({ ...inputs, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <main className="min-w-[50%] flex flex-col">
      <img
        src={logo}
        alt="logo"
        className="mx-auto pt-10 md:pt-0 pb-8 md:pb-12"
      />

      <article className="bg-Verylightgrayishcyan p-4 md:p-6 rounded-tl-2xl rounded-tr-2xl md:rounded-2xl flex gap-8 flex-col md:flex-row">
        <form
          noValidate
          onSubmit={handleSubmit}
          className="w-full md:w-1/2 flex flex-col gap-8"
        >
          {/* BILL */}
          <div className="flex flex-col gap-1">
            <label
              htmlFor="bill"
              className="text-Grayishcyan text-base flex items-center justify-between"
            >
              Bill
            </label>

            <div className="relative">
              <img
                src={dollarIcon}
                alt="dollar icon"
                className="absolute top-1/2 left-4 -translate-y-1/2"
              />
              <input
                id="bill"
                type="number"
                placeholder="0"
                className="w-full text-right px-4 pl-11 py-1 bg-Lightgrayishcyan/30 text-Verydarkcyan rounded-md col-start-1 col-end-4 outline-Strongcyan"
                value={inputs.bill}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* DISCOUNT & CUSTOM DISCOUNT */}
          <div className="flex flex-col gap-2">
            <label htmlFor="custom" className="text-base text-Grayishcyan">
              Select Tip %
            </label>
            <div className="grid grid-cols-2 md:grid-cols-3 grid-rows-3 md:grid-rows-2 gap-4">
              {discountData.map((d, i) => (
                <button
                  key={i}
                  onClick={() => setDiscount(d)}
                  className="bg-Verydarkcyan rounded-md text-Verylightgrayishcyan py-1 hover:bg-Strongcyan/60 hover:text-Verydarkcyan"
                >
                  {d}%
                </button>
              ))}
              <input
                id="custom"
                type="number"
                placeholder="Custom"
                className="md:max-w-[150px] text-right placeholder:text-center placeholder:text-lg text-Verydarkcyan px-4 rounded-md outline-Strongcyan outline-2 bg-Lightgrayishcyan/30"
                value={inputs.custom}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* NUMBER OF PEOPLE */}
          <div className="flex flex-col gap-1">
            <label
              htmlFor="people"
              className="text-Grayishcyan text-base flex items-center justify-between"
            >
              Number of People
              {/* {isError && (
                <span className="text-base text-red-500">Can't be zero</span>
              )} */}
            </label>

            <div className="relative">
              <img
                src={peopleIcon}
                alt="dollar icon"
                className="absolute top-1/2 left-4 -translate-y-1/2"
              />
              <input
                id="people"
                type="number"
                placeholder="0"
                required
                className="w-full text-right px-4 pl-11 py-1 bg-Lightgrayishcyan/30 text-Verydarkcyan rounded-md col-start-1 col-end-4 outline-Strongcyan"
                value={inputs.people}
                onChange={handleChange}
              />
            </div>
          </div>
        </form>

        {/* TOTAL */}
        <section className="w-full md:w-1/2 bg-Verydarkcyan rounded-2xl text-Verylightgrayishcyan p-6 flex flex-col gap-10 md:gap-0 md:justify-between">
          <div className="flex flex-col gap-8">
            <CustomTotal label="Tip Amount" total={Number(handleTip())} />
            <CustomTotal label="Total" total={Number(handleTotal())} />
          </div>

          <button
            onClick={handleReset}
            className="uppercase bg-Strongcyan/30 py-1 md:py-2 rounded-md text-Verydarkcyan text-base md:text-xl hover:bg-Lightgrayishcyan"
          >
            reset
          </button>
        </section>
      </article>
    </main>
  );
};

export default TipCalculator;
