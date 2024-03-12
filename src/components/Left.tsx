import CustomInput from "../utils/CustomInput";

type leftProps = {
  dollarIcon: string;
  peopleIcon: string;
};

type discountType = number[];

const discount: discountType = [5, 10, 15, 25, 50];

const Left = ({ dollarIcon, peopleIcon }: leftProps) => {
  return (
    <section className="w-full md:w-1/2 flex flex-col gap-8">
      <CustomInput image={dollarIcon} label="Bill" errorText={false} />

      <div className=" grid grid-cols-2 md:grid-cols-3 grid-rows-3 md:grid-rows-2 gap-4">
        {discount.map((d, i) => (
          <button
            key={i}
            className="bg-Verydarkcyan rounded-md text-Verylightgrayishcyan py-1 hover:bg-Strongcyan/60 hover:text-Verydarkcyan"
          >
            {d}%
          </button>
        ))}
        <input
          type="text"
          placeholder="Custom"
          className="md:max-w-[150px] text-right placeholder:text-center placeholder:text-lg text-Verydarkcyan px-4 rounded-md outline-Strongcyan outline-2 bg-Lightgrayishcyan/30"
        />
      </div>

      <CustomInput
        image={peopleIcon}
        label="Number of People"
        errorText={true}
      />
    </section>
  );
};

export default Left;
