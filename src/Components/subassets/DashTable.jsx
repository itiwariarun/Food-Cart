import React from "react";
import { statusStyles, transactions } from "../Objects/Dashboard";

import { BanknotesIcon } from "@heroicons/react/20/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const DashTable = () => {
  return (
    <div>
      <div className="hidden sm:block">
        <div className="max-w-full px-4 mx-auto sm:px-6 lg:px-8">
          <div className="flex flex-col mt-2">
            <div className="min-w-full overflow-hidden overflow-x-auto align-middle shadow sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th
                      className="px-6 py-3 text-sm font-semibold text-left text-gray-900 bg-gray-50"
                      scope="col"
                    >
                      Transaction
                    </th>
                    <th
                      className="px-6 py-3 text-sm font-semibold text-right text-gray-900 bg-gray-50"
                      scope="col"
                    >
                      Amount
                    </th>
                    <th
                      className="hidden px-6 py-3 text-sm font-semibold text-left text-gray-900 bg-gray-50 md:block"
                      scope="col"
                    >
                      Status
                    </th>
                    <th
                      className="px-6 py-3 text-sm font-semibold text-right text-gray-900 bg-gray-50"
                      scope="col"
                    >
                      Date
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {transactions.map((transaction) => (
                    <tr key={transaction.id} className="bg-white">
                      <td className="w-full px-6 py-4 text-sm text-gray-900 max-w-0 whitespace-nowrap">
                        <div className="flex">
                          <a
                            href={transaction.href}
                            className="inline-flex space-x-2 text-sm truncate group"
                          >
                            <BanknotesIcon
                              className="flex-shrink-0 w-5 h-5 text-gray-400 group-hover:text-gray-500"
                              aria-hidden="true"
                            />
                            <p className="text-gray-500 truncate group-hover:text-gray-900">
                              {transaction.name}
                            </p>
                          </a>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-right text-gray-500 whitespace-nowrap">
                        <span className="font-medium text-gray-900">
                          {transaction.amount}
                        </span>
                        {transaction.currency}
                      </td>
                      <td className="hidden px-6 py-4 text-sm text-gray-500 whitespace-nowrap md:block">
                        <span
                          className={classNames(
                            statusStyles[transaction.status],
                            "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize"
                          )}
                        >
                          {transaction.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-right text-gray-500 whitespace-nowrap">
                        <time dateTime={transaction.datetime}>
                          {transaction.date}
                        </time>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {/* Pagination */}
              <nav
                className="flex items-center justify-between px-4 py-3 bg-white border-t border-gray-200 sm:px-6"
                aria-label="Pagination"
              >
                <div className="hidden sm:block">
                  <p className="text-sm text-gray-700">
                    Showing <span className="font-medium">1</span> to{" "}
                    <span className="font-medium">10</span> of{" "}
                    <span className="font-medium">20</span> results
                  </p>
                </div>
                <div className="flex justify-between flex-1 sm:justify-end">
                  <a
                    href="!#"
                    className="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
                  >
                    Previous
                  </a>
                  <a
                    href="!#"
                    className="relative inline-flex items-center px-4 py-2 ml-3 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
                  >
                    Next
                  </a>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashTable;
