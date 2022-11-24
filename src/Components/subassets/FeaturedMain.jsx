import React from "react";

const FeaturedMain = () => {
  return (
    <div>
      <div className="relative pt-16 bg-gray-50 sm:pt-24 lg:pt-32">
        <div className="max-w-md px-4 mx-auto text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
          <div>
            <h2 className="text-lg font-semibold text-cyan-600">
              Fresh to eat
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Don't want to go out? No problem.
            </p>
            <p className="mx-auto mt-5 text-xl text-gray-500 max-w-prose">
              Phasellus lorem quam molestie id quisque diam aenean nulla in.
              Accumsan in quis quis nunc, ullamcorper malesuada. Eleifend
              condimentum id viverra nulla.
            </p>
          </div>
          <div className="mt-12 -mb-10 sm:-mb-24 lg:-mb-80">
            <img
              className="rounded-lg shadow-xl md:h-[60rem] h-[30rem] w-screen md:w-[80rem] ring-1 ring-black ring-opacity-5"
              src="https://www.wbcsd.org/var/site/storage/images/media/images/fresh_pa/80809-2-eng-GB/FRESH_PA_i1140.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedMain;
