import React from "react";
import { Link } from "react-router-dom";

const Success = () => {
  return (
    <section className="bg-light p-10 rounded-3xl flex flex-col gap-8 sm:justify-normal text-Charcoal-Grey">
      <div className="pt-10 lg:pt-0 space-y-8 lg:space-y-4">
        {" "}
        <div className="w-14 h-14 bg-contain  lg:w-6 lg:h-6 bg-listIcon  bg-no-repeat" />
        <h1 className="font-roboto-bold text-5xl">
          {" "}
          Thanks for
          <br />
          subscribing!
        </h1>
        <p>
          A confirmation email has been sent to
          <br />
          <b>ash@loremcompany.com.</b> Please open it and click
          <br /> the button inside to confirm your subscription.
        </p>
      </div>
      <div className="w-full flex">
        <Link
          to={"/"}
          replace={true}
          className="w-full p-4 rounded-lg text-light bg-Charcoal-Grey text-center active:bg-tomato active:shadow-lg active:shadow-tomato "
        >
          Dismiss message
        </Link>
      </div>
    </section>
  );
};

export default Success;
