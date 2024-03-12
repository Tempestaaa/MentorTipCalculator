type Props = {
  image: string;
  label: string;
  errorText: boolean;
};

const CustomInput = ({ image, label, errorText }: Props) => {
  return (
    <div className="flex flex-col gap-1">
      <p className="text-Grayishcyan text-base flex items-center justify-between">
        {label}
        {errorText && (
          <span className="text-base text-red-500">Can't be zero</span>
        )}
      </p>

      <div className="relative">
        <img
          src={image}
          alt="dollar icon"
          className="absolute top-1/2 left-4 -translate-y-1/2"
        />
        <input
          type="text"
          placeholder="0"
          className="w-full text-right px-4 pl-11 py-1 bg-Lightgrayishcyan/30 text-Verydarkcyan rounded-md col-start-1 col-end-4 outline-Strongcyan"
        />
      </div>
    </div>
  );
};

export default CustomInput;
