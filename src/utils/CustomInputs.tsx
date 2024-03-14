type Props = {
  image: string;
  input: number;
};

const CustomInputs = ({ image, input }: Props) => {
  return (
    <div className="flex flex-col gap-1">
      <label
        htmlFor={input.toString()}
        className="text-Grayishcyan text-base flex items-center justify-between"
      >
        {input}
      </label>

      <div className="relative">
        <img
          src={image}
          alt="dollar icon"
          className="absolute top-1/2 left-4 -translate-y-1/2"
        />
        <input
          id="bill"
          type="number"
          placeholder="0"
          className="w-full text-right px-4 pl-11 py-1 bg-Lightgrayishcyan/30 text-Verydarkcyan rounded-md col-start-1 col-end-4 outline-Strongcyan"
        />
      </div>
    </div>
  );
};

export default CustomInputs;
