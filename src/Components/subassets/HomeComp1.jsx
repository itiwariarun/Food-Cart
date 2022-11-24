/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
const HomeComp1 = () => {
  return (
    <div>
      <div className="pt-10 bg-[#373737] pb-5  sm:pt-16 lg:overflow-hidden lg:pt-8 lg:pb-14">
        <div className="mx-auto max-w-7xl lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8">
            <div className="max-w-md px-4 mx-auto sm:max-w-2xl sm:px-6 sm:text-center lg:flex lg:items-center lg:px-0 lg:text-left">
              <div className="lg:py-24">
                <a
                  href="#"
                  className="inline-flex items-center p-1 pr-2 text-white bg-black rounded-full hover:text-gray-200 sm:text-base lg:text-sm xl:text-base"
                >
                  <span className="rounded-full bg-gradient-to-r from-teal-500 to-cyan-600 px-3 py-0.5 text-sm font-semibold leading-5 text-white">
                    We're delievring
                  </span>
                  <span className="ml-4 text-sm">Delicious Taste</span>
                  <ChevronRightIcon
                    className="w-5 h-5 ml-2 text-gray-500"
                    aria-hidden="true"
                  />
                </a>
                <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                  <span className="block">A better way to</span>
                  <span className="block pb-3 text-transparent bg-gradient-to-r from-teal-200 to-cyan-400 bg-clip-text sm:pb-5">
                    Order Food
                  </span>
                </h1>
                <p className="text-base text-gray-300 sm:text-xl lg:text-lg xl:text-xl">
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
                  qui Lorem cupidatat commodo. Elit sunt amet fugiat veniam
                  occaecat fugiat.
                </p>
                <div className="mt-10 sm:mt-12">
                  <form action="#" className="sm:mx-auto sm:max-w-xl lg:mx-0">
                    <div className="sm:flex">
                      <div className="flex-1 min-w-0">
                        <label htmlFor="email" className="sr-only">
                          Email address
                        </label>
                        <input
                          id="email"
                          type="email"
                          placeholder="Enter your email"
                          className="block w-full px-4 py-3 text-base text-gray-900 placeholder-gray-500 border-0 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-gray-900"
                        />
                      </div>
                      <div className="mt-3 sm:mt-0 sm:ml-3">
                        <button
                          type="submit"
                          className="block w-full px-4 py-3 font-medium text-white rounded-md shadow bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-gray-900"
                        >
                          Connect With Us
                        </button>
                      </div>
                    </div>
                    <p className="mt-3 text-sm text-gray-300 sm:mt-4">
                      Start your free 14-day premium for free delievry, no
                      credit card necessary. By providing your email, you agree
                      to our{" "}
                      <a href="#" className="font-medium text-white">
                        terms of service
                      </a>
                      .
                    </p>
                  </form>
                </div>
              </div>
            </div>
            <div className="mt-12 lg:relative lg:m-0">
              <div className="max-w-md px-4 mx-auto sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
                {/* Illustration taken from Lucid Illustrations: https://lucid.pixsellz.io/ */}
                <img
                  className="w-full md:my-auto lg:absolute lg:inset-y-0 lg:left-0 lg:h-4/5 lg:w-auto lg:max-w-3xl"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5Pq7NX9VHvrZEAwz5mz66rLcV1eA1V0VWkA&usqp=CAU"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeComp1;
