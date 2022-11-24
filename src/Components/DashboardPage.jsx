/* eslint-disable jsx-a11y/anchor-is-valid */
import Dashboard from "./Dashboard";
import React from "react";
import { cards } from "./Objects/Dashboard";
import DashTable from "./subassets/DashTable";
import DashTableLarge from "./subassets/DashTableLarge";
import DashHeader from "./subassets/DashHeader";

import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";

function DashboardPage() {
  return (
    <Dashboard>
      <section className="px-4">
        <div className="min-h-full">
          {/* Static sidebar for desktop */}

          <div className="flex flex-col flex-1 ">
            <div className="flex flex-shrink-0 h-16 bg-white border-b border-gray-200 lg:border-none">
              {/* Search bar */}
              <div className="flex justify-between flex-1 px-4 sm:px-6 lg:mx-auto lg:max-w-6xl lg:px-8">
                <div className="flex flex-1">
                  <form className="flex w-full md:ml-0" action="#" method="GET">
                    <label htmlFor="search-field" className="sr-only">
                      Search
                    </label>
                    <div className="relative w-full text-gray-400 focus-within:text-gray-600">
                      <div
                        className="absolute inset-y-0 left-0 flex items-center pointer-events-none"
                        aria-hidden="true"
                      >
                        <MagnifyingGlassIcon
                          className="w-5 h-5"
                          aria-hidden="true"
                        />
                      </div>
                      <input
                        id="search-field"
                        name="search-field"
                        className="block w-full h-full py-2 pl-8 pr-3 text-gray-900 placeholder-gray-500 border-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                        placeholder="Search transactions"
                        type="search"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <main className="flex-1 pb-8">
              {/* Page header */}
              <DashHeader />
              <div className="mt-8 ">
                <div className="max-w-full px-4 mx-auto ">
                  <h2 className="text-lg font-medium leading-6 text-gray-100">
                    Overview
                  </h2>
                  <div className="grid gap-5 mx-auto mt-2 sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5">
                    {/* Card */}
                    {cards.map((card) => (
                      <div
                        key={card.name}
                        className="max-w-xs overflow-hidden bg-white rounded-lg shadow"
                      >
                        <div className="p-5 ">
                          <div className="flex items-center">
                            <div className="flex-shrink-0">
                              <card.icon
                                className="w-6 h-6 text-gray-400"
                                aria-hidden="true"
                              />
                            </div>
                            <div className="flex-1 w-0 ml-5">
                              <dl>
                                <dt className="text-sm font-medium text-gray-500 truncate">
                                  {card.name}
                                </dt>
                                <dd>
                                  <div className="text-lg font-medium text-gray-900">
                                    {card.amount}
                                  </div>
                                </dd>
                              </dl>
                            </div>
                          </div>
                        </div>
                        <div className="px-5 py-3 bg-gray-50">
                          <div className="text-sm">
                            <a
                              href={card.href}
                              className="font-medium text-cyan-700 hover:text-cyan-900"
                            >
                              View all
                            </a>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <h2 className="max-w-full px-4 mx-auto mt-8 text-lg font-medium leading-6 text-gray-100 sm:px-6 lg:px-8">
                  Recent activity
                </h2>

                {/* Activity list (smallest breakpoint only) */}
                <DashTableLarge />

                {/* Activity table (small breakpoint and up) */}
                <DashTable />
              </div>
            </main>
          </div>
        </div>
      </section>
    </Dashboard>
  );
}

export default DashboardPage;
