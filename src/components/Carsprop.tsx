import React from "react";
import Image from "next/image";
interface prop{


  title:string,
  img:string,

}
const servicescars = (props:prop) => {
  return (
    <main className="text-white font-medium bg-black">
      <div className="py-10 ">
        <div className="flex flex-col justify-center text-center items-center gap-5 ">
          <h6 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold">
            Why Choose Us For
          </h6>
          <h2 className="text-primary text-3xl md:text-4xl lg:text-5xl font-bold ">
            {props.title}

          </h2>
          <p className="max-w-200 mx-auto">
            At Polk Roadside Assistance, we prioritize customer satisfaction
            above all else.
          </p>
        </div>
        <div className="flex justify-center">
          <Image
            src={props.img}
            alt="cars"
            width={3000}
            height={10}
            className=" h-auto lg:w-400 md:w-300 w-300  bg-center object-contain z-1 "
          />
        </div>
      </div>
    </main>
  );
};

export default servicescars;
