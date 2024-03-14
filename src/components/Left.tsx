// import { useState } from "react";
// import dollarIcon from "../assets/images/icon-dollar.svg";
// import peopleIcon from "../assets/images/icon-person.svg";
// import CustomInputs from "../utils/CustomInputs";

// type discountType = number[];

// const discount: discountType = [5, 10, 15, 25, 50];

// const Left = () => {
//   const [inputs, setInputs] = useState({
//     bill: 0,
//     discount: discount,
//     custom: 0,
//     people: 0,
//   });

//   const inputData = [
//     {
//       id: 1,
//       name: "bill",
//       placeholder: "0",
//     },
//   ];

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//   };
//   return (
//     <form
//       noValidate
//       onSubmit={handleSubmit}
//       className="w-full md:w-1/2 flex flex-col gap-8"
//     >
//       <CustomInputs image={dollarIcon} input={inputs.bill} />

//       <div className="flex flex-col gap-2">
//         <label htmlFor="custom" className="text-base text-Grayishcyan">
//           Select Tip %
//         </label>
//         <div className="grid grid-cols-2 md:grid-cols-3 grid-rows-3 md:grid-rows-2 gap-4">
//           {discount.map((d, i) => (
//             <button
//               key={i}
//               // onClick={() => (selectDiscount.current = d)}
//               className="bg-Verydarkcyan rounded-md text-Verylightgrayishcyan py-1 hover:bg-Strongcyan/60 hover:text-Verydarkcyan"
//             >
//               {d}%
//             </button>
//           ))}
//           <input
//             id="custom"
//             type="number"
//             placeholder="Custom"
//             className="md:max-w-[150px] text-right placeholder:text-center placeholder:text-lg text-Verydarkcyan px-4 rounded-md outline-Strongcyan outline-2 bg-Lightgrayishcyan/30"
//             // value={inputs.custom}
//             // onChange={handleChange}
//           />
//         </div>
//       </div>

//       <CustomInputs image={peopleIcon} />
//     </form>
//   );
// };

// export default Left;
