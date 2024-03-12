import logo from "../assets/images/logo.svg";
import dollarIcon from "../assets/images/icon-dollar.svg";
import peopleIcon from "../assets/images/icon-person.svg";
import Left from "./Left";
import Right from "./Right";

const TipCalculator = () => {
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

      <form
        onSubmit={handleSubmit}
        className="bg-Verylightgrayishcyan p-4 md:p-6 rounded-tl-2xl rounded-tr-2xl md:rounded-2xl flex gap-8 flex-col md:flex-row"
      >
        <Left dollarIcon={dollarIcon} peopleIcon={peopleIcon} />
        <Right />
      </form>
    </main>
  );
};

export default TipCalculator;
