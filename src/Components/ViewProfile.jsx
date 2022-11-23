import React, { Fragment, useState } from "react";
import { Dialog, Transition, Menu } from "@headlessui/react";
import { ChevronUpDownIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

function ViewProfile() {
    return (
        <main className="viewdrop-viewx">
            <Menu as="div" className="viewdrop-viewx">
                <section>
                    <Menu.Button className="viewdrop-buttonx group">
                        <span className="viewdrop-spanx">
                            <Link to={"/profile"}>
                                {" "}
                                <span className="viewdrop-span2x ">
                                    <img
                                        className="viewdrop-imgx"
                                        src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                        alt=""
                                    />
                                    <span className="viewdrop-xadmin ">
                                        <span className="viewdrop-xnameadmin ">
                                            Jessy Schwarz
                                        </span>
                                        <span className="viewdrop-xsubnameadmin">
                                            @jessyschwarz
                                        </span>
                                    </span>
                                </span>
                            </Link>
                            <ChevronUpDownIcon
                                className="viewdrop-arrowx"
                                aria-hidden="true"
                            />
                        </span>
                    </Menu.Button>
                </section>
                <section>
                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Menu.Items className="viewdrop-xitem">
                            <div className="viewdrop-py">
                                <Link to={"/profile"}>
                                    {" "}
                                    <Navitem field={"View Profile"} />
                                </Link>
                                <Link to={"/notification"}>
                                    {" "}
                                    <Navitem field={"Notification"} />{" "}
                                </Link>
                                <Link to={"/account"}>
                                    {" "}
                                    <Navitem field={"Settings"} />{" "}
                                </Link>
                            </div>
                            <div className="viewdrop-py">
                                <Navitem field={"Get Desktop app"} />

                                <Link to={"/editadmin"}>
                                    {" "}
                                    <Navitem field={"Edit Profile"} />{" "}
                                </Link>
                            </div>
                            <div className="viewdrop-py">
                                <Link to={"/"}>
                                    {" "}
                                    <Navitem field={"Log Out"} />{" "}
                                </Link>
                            </div>
                        </Menu.Items>
                    </Transition>
                </section>
            </Menu>
        </main>
    );
}

export default ViewProfile;
function Navitem(props) {
    return (
        <Menu.Item>
            {({ active }) => (
                <span
                    className={classNames(
                        active ? "viewdrop-tabactive" : "viewdrop-tabnonactive",
                        "viewdrop-tabcom"
                    )}
                >
                    {props.field}
                </span>
            )}
        </Menu.Item>
    );
}
