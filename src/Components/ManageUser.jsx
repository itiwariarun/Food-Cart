import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { PaperClipIcon } from "@heroicons/react/20/solid";
import { Disclosure, Menu, Switch, Transition } from "@headlessui/react";

import Dashboard from "./Dashboard";
function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}
function ManageUser() {
    const [manageSeller, setmanageSeller] = useState(true);
    const [allowCommenting, setAllowCommenting] = useState(true);
    const [offer, setoffer] = useState(true);
    return (
        <Dashboard>
            <section className="profile-a">
                {/* Profile section */}

                <section className="manage-overflow">
                    <Link to={"/user"}>
                        <ArrowLeftIcon className="profile-a3" />
                    </Link>
                    <div className="manage-u1">
                        <h3 className="manage-head">User Information</h3>
                        <p className="manage-subhead">Personal details.</p>
                    </div>
                    <div className="manage-dl1">
                        <dl>
                            <div className="manage-dl-div">
                                <dt className="manage-dt">Full name</dt>
                                <dd className="manage-dd">Margot Foster</dd>
                            </div>
                            <div className="manage-dl-div1">
                                <dt className="manage-dt">Address</dt>
                                <dd className="manage-dd">
                                    Full Address of person if profile is for
                                    seller then restaurent address
                                </dd>
                            </div>
                            <div className="manage-dl-div">
                                <dt className="manage-dt">Email address</dt>
                                <dd className="manage-dd">
                                    margotfoster@example.com
                                </dd>
                            </div>
                            <div className="manage-dl-div1">
                                <dt className="manage-dt">Joining Date</dt>
                                <dd className="manage-dd">11-oct-2022</dd>
                            </div>
                            <div className="manage-dl-div">
                                <dt className="manage-dt">About User</dt>
                                <dd className="manage-dd">
                                    Fugiat ipsum ipsum deserunt culpa aute sint
                                    do nostrud anim incididunt cillum culpa
                                    consequat. Excepteur qui ipsum aliquip
                                    consequat sint. Sit id mollit nulla mollit
                                    nostrud in ea officia proident. Irure
                                    nostrud pariatur mollit ad adipisicing
                                    reprehenderit deserunt qui eu.
                                </dd>
                            </div>
                            <div className="manage-dl-div1">
                                <dt className="manage-dt">
                                    Documents For Verification
                                </dt>
                                <dd className="manage-dd">
                                    <ul role="list" className="manage-divide">
                                        <li className="manage-li">
                                            <div className="manage-li-div">
                                                <PaperClipIcon
                                                    className="manage-papericon"
                                                    aria-hidden="true"
                                                />
                                                <span className="manage-li-span">
                                                    Personal_Information.pdf
                                                </span>
                                            </div>
                                            <div className="manage-li-div3">
                                                <a
                                                    href="#"
                                                    className="manage-li-a"
                                                >
                                                    Download
                                                </a>
                                            </div>
                                        </li>
                                        <p className="flex-1 py-3 font-semibold text-center text-gray-600 ">
                                            Only For Seller
                                        </p>
                                        <li className="manage-li">
                                            <div className="manage-li-div">
                                                <PaperClipIcon
                                                    className="manage-papericon"
                                                    aria-hidden="true"
                                                />
                                                <span className="manage-li-span">
                                                    Restaurent_Information.pdf
                                                </span>
                                            </div>
                                            <div className="manage-li-div3">
                                                <a
                                                    href="#"
                                                    className="manage-li-a"
                                                >
                                                    Download
                                                </a>
                                            </div>
                                        </li>
                                        <li className="manage-li">
                                            <div className="manage-li-div">
                                                <PaperClipIcon
                                                    className="manage-papericon"
                                                    aria-hidden="true"
                                                />
                                                <span className="manage-li-span">
                                                    Menu.pdf
                                                </span>
                                            </div>
                                            <div className="manage-li-div3">
                                                <a
                                                    href="#"
                                                    className="manage-li-a"
                                                >
                                                    Download
                                                </a>
                                            </div>
                                        </li>
                                    </ul>
                                </dd>
                            </div>
                        </dl>
                    </div>
                </section>
                <section className="profile-a20">
                    <div className="px-4 sm:px-6">
                        <ul role="list" className="profile-a22">
                            <div>
                                <a href="#!">
                                    <h2 className="manage-a-head">
                                        For Seller
                                    </h2>
                                </a>
                            </div>
                            <Switch.Group as="li" className="profile-a23">
                                <div className="seller-comm2">
                                    <Switch.Label
                                        as="p"
                                        className=" profile-a21"
                                        passive
                                    >
                                        Verify as Seller
                                    </Switch.Label>
                                    <Switch.Description className="manage-desc">
                                        Nulla amet tempus sit accumsan. Aliquet
                                        turpis sed sit lacinia.
                                    </Switch.Description>
                                </div>
                                <Switch
                                    checked={manageSeller}
                                    onChange={setmanageSeller}
                                    className={classNames(
                                        manageSeller ? "switchon" : "switchof",
                                        "switch-a1 "
                                    )}
                                >
                                    <span
                                        aria-hidden="true"
                                        className={classNames(
                                            manageSeller
                                                ? "switchon1"
                                                : "switchof1",
                                            "switch-a2"
                                        )}
                                    />
                                </Switch>
                            </Switch.Group>
                            <Switch.Group as="li" className="profile-a23">
                                <div className="seller-comm2">
                                    <Switch.Label
                                        as="p"
                                        className=" profile-a21"
                                        passive
                                    >
                                        Seller Menu Verify
                                    </Switch.Label>
                                    <Switch.Description className="manage-desc">
                                        Nulla amet tempus sit accumsan. Aliquet
                                        turpis sed sit lacinia.
                                    </Switch.Description>
                                </div>
                                <Switch
                                    checked={manageSeller}
                                    onChange={setmanageSeller}
                                    className={classNames(
                                        manageSeller ? "switchon" : "switchof",
                                        "switch-a1 "
                                    )}
                                >
                                    <span
                                        aria-hidden="true"
                                        className={classNames(
                                            manageSeller
                                                ? "switchon1"
                                                : "switchof1",
                                            "switch-a2"
                                        )}
                                    />
                                </Switch>
                            </Switch.Group>
                            <Switch.Group as="li" className="profile-a23">
                                <div className="seller-comm2">
                                    <Switch.Label
                                        as="p"
                                        className=" profile-a21"
                                        passive
                                    >
                                        Enable to upload menu
                                    </Switch.Label>
                                    <Switch.Description className="manage-desc">
                                        Integer amet, nunc hendrerit adipiscing
                                        nam. Elementum ame
                                    </Switch.Description>
                                </div>
                                <Switch
                                    checked={allowCommenting}
                                    onChange={setAllowCommenting}
                                    className={classNames(
                                        allowCommenting
                                            ? "switchon"
                                            : "switchof",
                                        "switch-a1 "
                                    )}
                                >
                                    <span
                                        aria-hidden="true"
                                        className={classNames(
                                            allowCommenting
                                                ? "switchon1"
                                                : "switchof1",
                                            "switch-a2"
                                        )}
                                    />
                                </Switch>
                            </Switch.Group>
                            <div>
                                <a href="#!">
                                    <h2 className="manage-a-head">For User</h2>
                                </a>
                            </div>
                            <Switch.Group as="li" className="profile-a23">
                                <div className="seller-comm2">
                                    <Switch.Label
                                        as="p"
                                        className=" profile-a21"
                                        passive
                                    >
                                        Verify as User
                                    </Switch.Label>
                                    <Switch.Description className="manage-desc">
                                        Adipiscing est venenatis enim molestie
                                        commodo eu gravid
                                    </Switch.Description>
                                </div>
                                <Switch
                                    checked={allowCommenting}
                                    onChange={setAllowCommenting}
                                    className={classNames(
                                        allowCommenting
                                            ? "switchon"
                                            : "switchof",
                                        "switch-a1 "
                                    )}
                                >
                                    <span
                                        aria-hidden="true"
                                        className={classNames(
                                            allowCommenting
                                                ? "switchon1"
                                                : "switchof1",
                                            "switch-a2"
                                        )}
                                    />
                                </Switch>
                            </Switch.Group>
                        </ul>
                    </div>
                    <div className="px-4 pt-5">
                        <div className="seller-comm3">
                            <div className="btn-a2">
                                <button type="button">Block</button>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </Dashboard>
    );
}

export default ManageUser;
