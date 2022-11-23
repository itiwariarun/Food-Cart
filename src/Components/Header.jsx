/* eslint-disable no-unused-vars */
import React, { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import Cast from "../Cast.png";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import PopoverDropdown from "./PopoverDropdown";
import NotificationPopup from "./NotificationPopup";
import { NavLink, Outlet } from "react-router-dom";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const imgdrop = [
  { id: 1, name: "Your Profiles", to: "/profile" },
  { id: 2, name: "Settings", to: "/account" },
  { id: 3, name: "Sign Out", to: "/" },
];
function Header() {
  return (
    <header className="headerx-outer">
      <Disclosure as="nav" className="headerx-sticky ">
        {({ open }) => (
          <>
            <div className="headerx-open">
              <div className="headerx-flex">
                <div className="headerx-center-flex">
                  <div className="headerx-o">
                    <img className=" headerx" src={Cast} alt="Your Company" />
                    <img className=" headerxr" src={Cast} alt="Your Company" />
                  </div>
                </div>{" "}
                <nav className=" headerx1">
                  <div className="headerx-center-flex">
                    <div className=" headerx1">
                      <div className="headerx-spacex">
                        {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                        <NavLink to={"/"} className="non-headerx-activetab">
                          HOME
                        </NavLink>

                        <LargeNav to="/dashboard" head="Dashboard" />
                        <LargeNav to="/ordersummary" head="Order Summary" />
                        <div href="#" className="non-headerx-activetab">
                          <div>
                            <PopoverDropdown />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="headerx-notification">
                      <span className="sr-only">View notifications</span>

                      <NotificationPopup />
                    </div>

                    {/* Profile dropdown */}
                    <Menu as="div" className="headerx-rel">
                      <div>
                        <Menu.Button className="headerx-menu-button">
                          <span className="sr-only">Open user menu</span>
                          <img
                            className="headerx-round"
                            src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt=""
                          />
                        </Menu.Button>
                      </div>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="headerx-itemx">
                          {imgdrop.map((drop) => (
                            <NavLink
                              key={drop.id}
                              to={drop.to}
                              className={"headerx-active-common"}
                            >
                              {drop.name}
                            </NavLink>
                          ))}
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </div>
                </nav>
                <div className="headerx2x headerx2">
                  {/* Mobile menu button */}
                  <div className="headerx-inline-div">
                    <div>
                      <PopoverDropdown />
                    </div>
                  </div>
                  <Disclosure.Button className="headerx-inline">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="headerx-block" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="headerx-block" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="headerx2">
              <nav className="headerx-last">
                {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                <Disclosure.Button as="div" className="">
                  {" "}
                  <NavLink to={"/"} className="non-headerx-activetabsmall">
                    HOME
                  </NavLink>
                </Disclosure.Button>
                <Disclosure.Button as="div" className="">
                  {" "}
                  <SmallNav to="/dashboard" head="Dashboard" />
                </Disclosure.Button>
                <Disclosure.Button as="div" className="">
                  <SmallNav to="/ordersummary" head="Order Summary" />
                </Disclosure.Button>
                <Disclosure.Button
                  as="a"
                  href="#"
                  className="non-headerx-activetabsmall"
                ></Disclosure.Button>
              </nav>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </header>
  );
}

export default Header;

function SmallNav(props) {
  return (
    <NavLink
      className={({ isActive }) =>
        isActive ? "headerx-activetabsmall" : "non-headerx-activetabsmall"
      }
      to={props.to}
    >
      {props.head}
    </NavLink>
  );
}

function LargeNav(props) {
  return (
    <NavLink
      className={({ isActive }) =>
        isActive ? "headerx-activetab" : "non-headerx-activetab"
      }
      to={props.to}
    >
      {props.head}
    </NavLink>
  );
}
