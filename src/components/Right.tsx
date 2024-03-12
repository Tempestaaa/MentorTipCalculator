import CustomTotal from "../utils/CustomTotal";

const Right = () => {
  return (
    <section className="w-full md:w-1/2 bg-Verydarkcyan rounded-2xl text-Verylightgrayishcyan p-6 flex flex-col gap-10 md:gap-0 md:justify-between">
      <div className="flex flex-col gap-8">
        <CustomTotal label="Tip Amount" />
        <CustomTotal label="Total" />
      </div>

      <button className="uppercase bg-Strongcyan/30 py-1 md:py-2 rounded-md text-Verydarkcyan text-base md:text-xl hover:bg-Lightgrayishcyan">
        reset
      </button>
    </section>
  );
};

export default Right;
