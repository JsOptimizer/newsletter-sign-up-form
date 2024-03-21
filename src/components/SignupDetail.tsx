import React from "react";
import { lists } from "../constant";
import { useSignup } from "../hook";
const SignupDetail = () => {
    const {errors,handleSubmit,onSubmit,register}=useSignup()
  return (
    <div className="w-ful p-10 flex sm:flex-col  justify-between ">
      <h1 className="text-7xl font-roboto-bold">Stay updated!</h1>
      <p className="text-xl font-roboto-regular">Join 60,000+ product managers receiving monthly updates on:</p>
      <ul className="space-y-2 ">
        {lists.map((label, idx) => (
          <li className="flex items-center gap-4" key={idx}>
            <div className="w-5 h-5 bg-listIcon bg-cover bg-no-repeat bg-center" />
            <span>{label}</span>
          </li>
        ))}
      </ul>
      <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-sm font-roboto-bold">Email address</span>
            <span className=" text-tomato">{errors.email?.message}</span>
          </div>
          <input
          {...register("email")}
            className={`${errors.email?.message&&"border-2 border-tomato"} w-full  p-4 border rounded-md outn`}
            placeholder="email@company.com"
            type="text"
          />
        </div>
        <button  type="submit" className="w-full items-center bg-Charcoal-Grey text-light p-4 rounded-md active:bg-tomato">
          Subscribe to monthly newsletter
        </button>
      </form>
    </div>
  );
};

export default SignupDetail;
