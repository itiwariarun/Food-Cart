import React, { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { NavLink, Outlet } from "react-router-dom";
import { menu, submenu } from "./Objects/Dropdown";
function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

function PopoverDropdown() {
    return (
        <Popover className="relative px-3 ">
            {({ open }) => (
                <>
                    <Popover.Button
                        className={classNames(
                            open ? "popover-open" : "popover-not-open",
                            "group popover-group"
                        )}
                    >
                        <span>Things</span>
                        <ChevronDownIcon
                            className={classNames(
                                open ? "popover-open" : "popover-not-open",
                                " popover-arrow"
                            )}
                            aria-hidden="true"
                        />
                    </Popover.Button>

                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                    >
                        <Popover.Panel className="popover-pop max-w-screen">
                            <div className="popover-overflow">
                                <div className="popover-relative">
                                    <div className="popover-block">
                                        <p className="popover-main">
                                            MainPages
                                        </p>
                                    </div>

                                    {menu.map((item) => (
                                        <div
                                            key={item.id}
                                            className="popover-nav"
                                        >
                                            <NavLink
                                                className={({ isActive }) =>
                                                    isActive
                                                        ? "activetab1"
                                                        : "popover-non-active"
                                                }
                                                to={item.to}
                                            >
                                                {item.name}
                                            </NavLink>
                                        </div>
                                    ))}

                                    <div className="sub">
                                        <p className="sub2">SubPages</p>
                                    </div>

                                    {submenu.map((item) => (
                                        <div
                                            key={item.id}
                                            className="popover-nav"
                                        >
                                            <NavLink
                                                className={({ isActive }) =>
                                                    isActive
                                                        ? "activetab1"
                                                        : "popover-non-active"
                                                }
                                                to={item.to}
                                            >
                                                {item.name}
                                            </NavLink>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </Popover.Panel>
                    </Transition>
                </>
            )}
        </Popover>
    );
}
export default PopoverDropdown;
