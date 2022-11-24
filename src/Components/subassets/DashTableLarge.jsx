import React from "react";
import { transactions } from "../Objects/Dashboard";

import { BanknotesIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
const DashTableLarge = () => {
  return (
    <div>
      <div className="shadow sm:hidden">
        <ul className="mt-2 overflow-hidden divide-y divide-gray-200 shadow sm:hidden">
          {transactions.map((transaction) => (
            <li key={transaction.id}>
              <a
                href={transaction.href}
                className="block px-4 py-4 bg-white hover:bg-gray-50"
              >
                <span className="flex items-center space-x-4">
                  <span className="flex flex-1 space-x-2 truncate">
                    <BanknotesIcon
                      className="flex-shrink-0 w-5 h-5 text-gray-400"
                      aria-hidden="true"
                    />
                    <span className="flex flex-col text-sm text-gray-500 truncate">
                      <span className="truncate">{transaction.name}</span>
                      <span>
                        <span className="font-medium text-gray-900">
                          {transaction.amount}
                        </span>{" "}
                        {transaction.currency}
                      </span>
                      <time dateTime={transaction.datetime}>
                        {transaction.date}
                      </time>
                    </span>
                  </span>
                  <ChevronRightIcon
                    className="flex-shrink-0 w-5 h-5 text-gray-400"
                    aria-hidden="true"
                  />
                </span>
              </a>
            </li>
          ))}
        </ul>

        <nav
          className="flex items-center justify-between px-4 py-3 bg-white border-t border-gray-200"
          aria-label="Pagination"
        >
          <div className="flex justify-between flex-1">
            <a
              href="!#"
              className="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:text-gray-500"
            >
              Previous
            </a>
            <a
              href="!#"
              className="relative inline-flex items-center px-4 py-2 ml-3 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:text-gray-500"
            >
              Next
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default DashTableLarge;
