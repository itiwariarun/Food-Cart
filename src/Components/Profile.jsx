import React, { Fragment, useState } from "react";
import Dashboard from "./Dashboard";
import { NavLink } from "react-router-dom";
import { Disclosure, Menu, Switch, Transition } from "@headlessui/react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import {
    Bars3Icon,
    BellIcon,
    CogIcon,
    CreditCardIcon,
    KeyIcon,
    SquaresPlusIcon,
    UserCircleIcon,
    XMarkIcon,
} from "@heroicons/react/24/outline";
const subNavigation = [
    { name: "Profile", to: "/profile", icon: UserCircleIcon },
    { name: "Account", to: "/account", icon: CogIcon },
    { name: "Password", to: "/password", icon: KeyIcon },
    { name: "Notifications", to: "/notification", icon: BellIcon },
];
function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

function Profile({ children }) {
const[open,setopen]=useState(false);

    return (
        <Dashboard>
            <section className="py-10 user">
                {/* Replace with your content */}
                <div className="admin-side-a">
                    <div className="rounded-lg ">
                        <div>
                            <Disclosure as="div" className="admin-side-a1">
                                {" "}
                                <section>
                                    <div
                                        aria-hidden="true"
                                        className={classNames(
                                            open ? "bottom-0" : "inset-y-0",
                                            "admin-side-a2"
                                        )}
                                    >
                                        <div className="absolute inset-0 flex">
                                            <div
                                                className="w-1/2 h-full"
                                                style={{
                                                    backgroundColor: "#0a527b",
                                                }}
                                            />

                                            <div
                                                className="w-1/2 h-full"
                                                style={{
                                                    backgroundColor: "#065d8c",
                                                }}
                                            />
                                        </div>
                                    </div>
                                </section>
                                <header className="admin-side-a5">
                                    <div className="admin-sdie-a4 ">
                                        <h1 className="admin-side-a3">
                                            Admin Name
                                        </h1>
                                    </div>
                                </header>
                            </Disclosure>

                            <main className="relative -mt-32">
                                <div>
                                    {" "}
                                    <div className="admin-side-a6 max-w-screen-3xl">
                                        <div className="admin-side-a7">
                                            <div className="admin-side-a8">
                                                <aside className="admin-side-a9">
                                                    <nav className="space-y-1">
                                                        {subNavigation.map(
                                                            (item) => (
                                                                <NavLink
                                                                    key={
                                                                        item.name
                                                                    }
                                                                    to={item.to}
                                                                    className={({
                                                                        isActive,
                                                                    }) =>
                                                                        isActive
                                                                            ? "admin-side-a10 group"
                                                                            : "admin-side-a11 group"
                                                                    }
                                                                >
                                                                    <item.icon
                                                                        className={classNames(
                                                                            item.current
                                                                                ? "admin-side-a12"
                                                                                : "admin-side-a13",
                                                                            "admin-side-a14"
                                                                        )}
                                                                        aria-hidden="true"
                                                                    />
                                                                    {item.name}
                                                                </NavLink>
                                                            )
                                                        )}
                                                    </nav>
                                                </aside>
                                                {children}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </main>
                        </div>
                    </div>
                </div>
                {/* /End replace */}
            </section>
        </Dashboard>
    );
}

export default Profile;
