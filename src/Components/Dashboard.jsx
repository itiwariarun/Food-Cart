import React, { Fragment, useState } from "react";
import { Outlet, NavLink } from "react-router-dom";
import { Dialog, Transition } from "@headlessui/react";
import Cast from "../Cast.png";

import {
  Bars3Icon,
  CalendarIcon,
  ChartBarIcon,
  HomeIcon,
  UsersIcon,
  XMarkIcon,
  ReceiptPercentIcon,
} from "@heroicons/react/24/outline";
import Animation from "./Animation";
import NotificationPopup from "./NotificationPopup";
import ViewProfile from "./ViewProfile";
const navigation = [
  { name: "Dashboard", to: "/dashboard", icon: HomeIcon },
  { name: "Seller", to: "/seller", icon: UsersIcon },
  { name: "Users", to: "/user", icon: UsersIcon },
  {
    name: "Promotion",
    to: "/promotion",
    icon: CalendarIcon,
  },
  { name: "Reports", to: "/report", icon: ChartBarIcon },
  { name: "Order Summary", to: "/ordersummary", icon: ReceiptPercentIcon },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Dashboard({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <aside>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-100">
        <body class="h-full">
        ```
      */}

      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog as="div" className="Ds1" onClose={setSidebarOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="Ds2" />
          </Transition.Child>

          <div className="Ds3 ">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className=" Ds4">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="Ds5">
                    <button
                      type="button"
                      className="Ds6"
                      onClick={() => setSidebarOpen(false)}
                    >
                      <span className="sr-only">Close sidebar</span>
                      <XMarkIcon
                        className="w-6 h-6 text-white"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </Transition.Child>
                <div className="Ds7">
                  <div className="Ds8">
                    <img className="w-auto h-8" src={Cast} alt="Your Company" />
                  </div>
                  {/* For Small Display */}
                  <nav className="Ds9 ">
                    {navigation.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.to}
                        className={({ isActive }) =>
                          isActive
                            ? "Ds12 Ds10 group text-base"
                            : "Ds12 Ds11 group text-base"
                        }
                      >
                        <item.icon
                          className={classNames(
                            item.current ? "text-gray-300" : "Ds13",
                            "Ds14"
                          )}
                          aria-hidden="true"
                        />
                        {item.name}
                      </NavLink>
                    ))}
                  </nav>
                </div>
                <div>
                  <ViewProfile />
                </div>{" "}
                {/* end small */}
              </Dialog.Panel>
            </Transition.Child>
            <div className="flex-shrink-0 w-14">
              {/* Force sidebar to shrink to fit close icon */}
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      {/* Static sidebar for desktop */}
      <div className="Ds20">
        {/* Sidebar component, swap this element with another sidebar if you like */}
        <div className="Ds21">
          <div className="Ds22">
            <div className="md:invisible Ds8">
              <img className="w-auto h-8" src={Cast} alt="Your Company" />
            </div>
            {/* for large display */}
            <nav className=" Ds23">
              {navigation.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.to}
                  className={({ isActive }) =>
                    isActive
                      ? "Ds10 Ds12 group text-sm"
                      : "Ds11 Ds12 group text-sm"
                  }
                >
                  <item.icon
                    className={classNames(
                      item.current
                        ? "text-gray-300"
                        : "Ds13 group-hover:text-gray-300",
                      "Ds14"
                    )}
                    aria-hidden="true"
                  />
                  {item.name}
                </NavLink>
              ))}
            </nav>
          </div>
          <div>
            <ViewProfile />
          </div>
        </div>
      </div>
      {/* end large */}
      {/* togling sidebar */}
      <div className="Ds24">
        <div className="Ds25">
          <div className="flex justify-between">
            {" "}
            <button
              type="button"
              className="Ds26"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <Bars3Icon className="w-6 h-6" aria-hidden="true" />
            </button>
            <div className="block p-2 sm:hidden">
              <NotificationPopup />
            </div>
          </div>
        </div>
        <main className="flex-1 ">
          <div className="py-12">
            {" "}
            <Animation> {children}</Animation>
          </div>
        </main>
      </div>

      <Outlet />
    </aside>
  );
}

export default Dashboard;
