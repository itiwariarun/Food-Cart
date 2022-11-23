import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import Profile from "../Profile";
import { Dialog, Switch, Transition } from "@headlessui/react";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}
function ProfileHome() {
    const [automaticTimezoneEnabled, setAutomaticTimezoneEnabled] =
        useState(true);
    const [autoUpdateApplicantDataEnabled, setAutoUpdateApplicantDataEnabled] =
        useState(true);
    return (
        <Profile>
            {" "}
            <div className="admin-acc1" action="#" method="#!">
                <div className="admin-acc2">
                    {/* Manage Things */}
                    <div className="admin-acc3">
                        <div className="admin-acc4">
                            <div>
                                <h3 className="admin-acc5">Manage</h3>
                            </div>
                            <div className="admin-acc6">
                                <a href="#!">
                                    {" "}
                                    <div as="p" className="admin-acc7">
                                        Manage Users
                                    </div>
                                </a>
                                <div className="admin-acc8">
                                    Integer amet, nunc hendrerit adipiscing nam.
                                    Elementum ame
                                </div>
                            </div>
                            <div className="admin-acc6">
                                <a href="#!">
                                    {" "}
                                    <div as="p" className="admin-acc7">
                                        Manage Sellers
                                    </div>
                                </a>
                                <div className="admin-acc8">
                                    Integer amet, nunc hendrerit adipiscing nam.
                                    Elementum ame
                                </div>
                            </div>
                            <div className="admin-acc6">
                                <a href="#!">
                                    {" "}
                                    <div as="p" className="admin-acc7">
                                        Blocklist
                                    </div>
                                </a>
                                <div className="admin-acc8">
                                    Integer amet, nunc hendrerit adipiscing nam.
                                    Elementum ame
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Manage Notifications */}
                    <form action="#" method="POST">
                        <div className="admin-acc3">
                            <div className="admin-acc4">
                                <div>
                                    <h3 className="admin-acc5">
                                        Notifications
                                    </h3>
                                </div>

                                <fieldset>
                                    <legend className="admin-acc9">
                                        By Email
                                    </legend>
                                    <div className="admin-acc10">
                                        <div className="admin-acc11">
                                            <div className="admin-acc12">
                                                <input
                                                    id="comments"
                                                    name="comments"
                                                    type="checkbox"
                                                    className="admin-acc13"
                                                />
                                            </div>
                                            <div className="admin-acc14">
                                                <label
                                                    htmlFor="comments"
                                                    className="admin-acc15"
                                                >
                                                    Issue
                                                </label>
                                                <p className="admin-acc-color">
                                                    Get notified when user raise
                                                    an issue.
                                                </p>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="admin-acc11">
                                                <div className="admin-acc12">
                                                    <input
                                                        id="candidates"
                                                        name="candidates"
                                                        type="checkbox"
                                                        className="admin-acc13"
                                                    />
                                                </div>
                                                <div className="admin-acc14">
                                                    <label
                                                        htmlFor="candidates"
                                                        className="admin-acc15"
                                                    >
                                                        Candidates
                                                    </label>
                                                    <p className="admin-acc-color">
                                                        Get notified when users
                                                        order
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div>
                                            <div className="admin-acc11">
                                                <div className="admin-acc12">
                                                    <input
                                                        id="offers"
                                                        name="offers"
                                                        type="checkbox"
                                                        className="admin-acc13"
                                                    />
                                                </div>
                                                <div className="admin-acc14">
                                                    <label
                                                        htmlFor="offers"
                                                        className="admin-acc15"
                                                    >
                                                        Offers
                                                    </label>
                                                    <p className="admin-acc-color">
                                                        Get notified when a
                                                        seller starts a offer
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </fieldset>
                                {/* Manage Push Notifications */}
                                <fieldset className="mt-6">
                                    <legend className="admin-acc9">
                                        Push Notifications
                                    </legend>
                                    <p className="admin-acc8">
                                        These are delivered via SMS to your
                                        mobile phone.
                                    </p>
                                    <div className="admin-acc10">
                                        <div className="admin-acc16">
                                            <input
                                                id="push-everything"
                                                name="push-notifications"
                                                type="radio"
                                                className="admin-acc17"
                                            />
                                            <label
                                                htmlFor="push-everything"
                                                className="ml-3"
                                            >
                                                <span className="admin-acc18 admin-acc15">
                                                    Everything
                                                </span>
                                            </label>
                                        </div>
                                        <div className="admin-acc16">
                                            <input
                                                id="push-email"
                                                name="push-notifications"
                                                type="radio"
                                                className="admin-acc17"
                                            />
                                            <label
                                                htmlFor="push-email"
                                                className="ml-3"
                                            >
                                                <span className="admin-acc18 admin-acc15">
                                                    Same as email
                                                </span>
                                            </label>
                                        </div>
                                        <div className="admin-acc16">
                                            <input
                                                id="push-nothing"
                                                name="push-notifications"
                                                type="radio"
                                                className="admin-acc17"
                                            />
                                            <label
                                                htmlFor="push-nothing"
                                                className="ml-3"
                                            >
                                                <span className="admin-acc18 admin-acc15">
                                                    No push notifications
                                                </span>
                                            </label>
                                        </div>
                                        <p className="admin-acc8">
                                            These are available on app or
                                            website
                                        </p>
                                        <div className="admin-acc16">
                                            <input
                                                id="push-delivery"
                                                name="push-notifications"
                                                type="checkbox"
                                                className="admin-acc17"
                                            />
                                            <label
                                                htmlFor="push-delivery"
                                                className="ml-3"
                                            >
                                                <span className="admin-acc18 admin-acc15">
                                                    Order Delivered
                                                </span>
                                            </label>
                                        </div>
                                        <div className="admin-acc16">
                                            <input
                                                id="push-order"
                                                name="push-notifications"
                                                type="checkbox"
                                                className="admin-acc17"
                                            />
                                            <label
                                                htmlFor="push-order"
                                                className="ml-3"
                                            >
                                                <span className="admin-acc18 admin-acc15">
                                                    New Order
                                                </span>
                                            </label>
                                        </div>
                                        <div className="admin-acc16">
                                            <input
                                                id="push-user"
                                                name="push-notifications"
                                                type="checkbox"
                                                className="admin-acc17"
                                            />
                                            <label
                                                htmlFor="push-user"
                                                className="ml-3"
                                            >
                                                <span className="admin-acc18 admin-acc15">
                                                    New User
                                                </span>
                                            </label>
                                        </div>
                                        <div className="admin-acc16">
                                            <input
                                                id="push-seller"
                                                name="push-notifications"
                                                type="checkbox"
                                                className="admin-acc17"
                                            />
                                            <label
                                                htmlFor="push-seller"
                                                className="ml-3"
                                            >
                                                <span className="admin-acc18 admin-acc15">
                                                    New Seller
                                                </span>
                                            </label>
                                        </div>
                                    </div>
                                </fieldset>
                            </div>
                            <div className="admin-acc19 ">
                                <div className="p-4 space-y-1">
                                    <h3 className="admin-acc5">Account</h3>
                                    <p className="max-w-2xl admin-acc8">
                                        Manage how information is displayed on
                                        your account.
                                    </p>
                                </div>
                                <div className="mt-6 ">
                                    <dl className="admin-acc20">
                                        <div className="admin-acc21">
                                            <dt className="admin-acc22">
                                                Language
                                            </dt>
                                            <dd className="admin-acc23">
                                                <span className="admin-acc24">
                                                    English
                                                </span>
                                                <span className="admin-acc25">
                                                    <button
                                                        type="button"
                                                        className="admin-acc26"
                                                    >
                                                        Update
                                                    </button>
                                                </span>
                                            </dd>
                                        </div>
                                        <div className="admin-acc21 sm:pt-5">
                                            <dt className="admin-acc22">
                                                Date format
                                            </dt>
                                            <dd className="admin-acc23">
                                                <span className="admin-acc24">
                                                    DD-MM-YYYY
                                                </span>
                                                <span className="space-x-4 admin-acc11 admin-acc25">
                                                    <button
                                                        type="button"
                                                        className="admin-acc26"
                                                    >
                                                        Update
                                                    </button>
                                                    <span
                                                        className="text-gray-300"
                                                        aria-hidden="true"
                                                    >
                                                        |
                                                    </span>
                                                    <button
                                                        type="button"
                                                        className="admin-acc26"
                                                    >
                                                        Remove
                                                    </button>
                                                </span>
                                            </dd>
                                        </div>
                                        <Switch.Group
                                            as="div"
                                            className="admin-acc21 sm:pt-5"
                                        >
                                            <Switch.Label
                                                as="dt"
                                                className="admin-acc22"
                                            >
                                                Automatic timezone
                                            </Switch.Label>
                                            <dd className="admin-acc23">
                                                <Switch
                                                    checked={
                                                        automaticTimezoneEnabled
                                                    }
                                                    onChange={
                                                        setAutomaticTimezoneEnabled
                                                    }
                                                    className={classNames(
                                                        automaticTimezoneEnabled
                                                            ? "switchon"
                                                            : "switchof",
                                                        "admin-switch1"
                                                    )}
                                                >
                                                    <span
                                                        aria-hidden="true"
                                                        className={classNames(
                                                            automaticTimezoneEnabled
                                                                ? "switchon1"
                                                                : "switchof1",
                                                            "admin-switch2"
                                                        )}
                                                    />
                                                </Switch>
                                            </dd>
                                        </Switch.Group>
                                        <Switch.Group
                                            as="div"
                                            className="admin-switch3"
                                        >
                                            <Switch.Label
                                                as="dt"
                                                className="admin-acc22"
                                            >
                                                Auto-update applicant data
                                            </Switch.Label>
                                            <dd className="admin-acc23">
                                                <Switch
                                                    checked={
                                                        autoUpdateApplicantDataEnabled
                                                    }
                                                    onChange={
                                                        setAutoUpdateApplicantDataEnabled
                                                    }
                                                    className={classNames(
                                                        autoUpdateApplicantDataEnabled
                                                            ? "switchon"
                                                            : "switchof",
                                                        "admin-switch4"
                                                    )}
                                                >
                                                    <span
                                                        aria-hidden="true"
                                                        className={classNames(
                                                            autoUpdateApplicantDataEnabled
                                                                ? "switchon1"
                                                                : "switchof1",
                                                            "admin-switch2"
                                                        )}
                                                    />
                                                </Switch>
                                            </dd>
                                        </Switch.Group>
                                    </dl>
                                </div>
                            </div>
                            <div className="admin-btn1">
                                <div className="admin-btn2">
                                    <button type="submit">Save</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                {/* Account section */}
            </div>
        </Profile>
    );
}

export default ProfileHome;
