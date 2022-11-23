import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import Profile from "../Profile";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
const user = {
    name: "Debbie Lewis",
    handle: "deblewis",
    email: "debbielewis@example.com",
    imageUrl:
        "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};
function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}
function ProfileHome() {
    return (
        <Profile>
            {" "}
            <div className="edit-admin1" action="#" method="#!">
                {" "}
                <div className="edit-admin2">
                    <Link to={"/profile"}>
                        <ArrowLeftIcon className="edit-admin3" />
                    </Link>
                    <form action="#" method="POST">
                        {/* Various Details and Uploads */}
                        <div className="edit-admin4">
                            <div className="edit-admin5">
                                <div>
                                    <h3 className="edit-admin6">Profile</h3>
                                    <p className="edit-admin7">
                                        This information will be displayed
                                        publicly so be careful what you share.
                                    </p>
                                </div>

                                <div className="edit-admin8">
                                    <div className="edit-admin9">
                                        <label
                                            htmlFor="company-website"
                                            className="edit-admin10"
                                        >
                                            Username
                                        </label>
                                        <div className="edit-admin11">
                                            <span className="edit-admin12">
                                                gmail.com/
                                            </span>
                                            <input
                                                type="text"
                                                name="username"
                                                id="username"
                                                autoComplete="username"
                                                className="edit-admin13"
                                            />
                                        </div>
                                    </div>

                                    <div className="col-span-3">
                                        <label
                                            htmlFor="about"
                                            className="edit-admin10"
                                        >
                                            About
                                        </label>
                                        <div className="mt-1">
                                            <textarea
                                                id="about"
                                                name="about"
                                                rows={3}
                                                className="edit-admin14"
                                                placeholder="you@example.com"
                                                defaultValue={""}
                                            />
                                        </div>
                                        <p className="mt-2 text-sm text-gray-500">
                                            Brief description for your profile.
                                            URLs are hyperlinked.
                                        </p>
                                    </div>

                                    <div className="col-span-3">
                                        <label className="edit-admin10">
                                            Photo
                                        </label>
                                        <div className="edit-admin15">
                                            <span className="edit-admin16">
                                                <svg
                                                    className="edit-admin17"
                                                    fill="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                                                </svg>
                                            </span>
                                            <button
                                                type="button"
                                                className="edit-admin18"
                                            >
                                                Change
                                            </button>
                                        </div>
                                    </div>

                                    <div className="col-span-3">
                                        <label className="edit-admin10">
                                            Cover photo
                                        </label>
                                        <div className="edit-admin19">
                                            <div className="edit-admin20">
                                                <svg
                                                    className="edit-admin21"
                                                    stroke="currentColor"
                                                    fill="none"
                                                    viewBox="0 0 48 48"
                                                    aria-hidden="true"
                                                >
                                                    <path
                                                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                                        strokeWidth={2}
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                                <div className="edit-admin22">
                                                    <label
                                                        htmlFor="file-upload"
                                                        className="edit-admin23"
                                                    >
                                                        <span>
                                                            Upload a file
                                                        </span>
                                                        <input
                                                            id="file-upload"
                                                            name="file-upload"
                                                            type="file"
                                                            className="sr-only"
                                                        />
                                                    </label>
                                                    <p className="pl-1">
                                                        or drag and drop
                                                    </p>
                                                </div>
                                                <p className="text-xs text-gray-500">
                                                    PNG, JPG, GIF up to 10MB
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="edit-admin-btn1">
                                <button
                                    type="submit"
                                    className="edit-admin-btn3"
                                >
                                    Save
                                </button>
                            </div>
                        </div>
                    </form>
                    {/* personal information */}
                    <form action="#" method="POST">
                        <div className="edit-admin4">
                            <div className="edit-admin5">
                                <div>
                                    <h3 className="edit-admin6">
                                        Personal Information
                                    </h3>
                                    <p className="edit-admin7">
                                        Use a permanent address where you can
                                        recieve mail.
                                    </p>
                                </div>

                                <div className="edit-admin-info1">
                                    <div className="edit-admin-info2">
                                        <label
                                            htmlFor="first-name"
                                            className="edit-admin10"
                                        >
                                            First name
                                        </label>
                                        <input
                                            type="text"
                                            name="first-name"
                                            id="first-name"
                                            autoComplete="given-name"
                                            className="edit-admin-info3"
                                        />
                                    </div>

                                    <div className="edit-admin-info2">
                                        <label
                                            htmlFor="last-name"
                                            className="edit-admin10"
                                        >
                                            Last name
                                        </label>
                                        <input
                                            type="text"
                                            name="last-name"
                                            id="last-name"
                                            autoComplete="family-name"
                                            className="edit-admin-info3"
                                        />
                                    </div>

                                    <div className="col-span-6 sm:col-span-4">
                                        <label
                                            htmlFor="email-address"
                                            className="edit-admin10"
                                        >
                                            Email address
                                        </label>
                                        <input
                                            type="text"
                                            name="email-address"
                                            id="email-address"
                                            autoComplete="email"
                                            className="edit-admin-info3"
                                        />
                                    </div>

                                    <div className="edit-admin-info2">
                                        <label
                                            htmlFor="country"
                                            className="edit-admin10"
                                        >
                                            Country
                                        </label>
                                        <select
                                            id="country"
                                            name="country"
                                            autoComplete="country-name"
                                            className="edit-admin-info4"
                                        >
                                            <option>United States</option>
                                            <option>Canada</option>
                                            <option>Mexico</option>
                                        </select>
                                    </div>

                                    <div className="col-span-6">
                                        <label
                                            htmlFor="street-address"
                                            className="edit-admin10"
                                        >
                                            Street address
                                        </label>
                                        <input
                                            type="text"
                                            name="street-address"
                                            id="street-address"
                                            autoComplete="street-address"
                                            className="edit-admin-info3"
                                        />
                                    </div>

                                    <div className="edit-admin-info5">
                                        <label
                                            htmlFor="city"
                                            className="edit-admin10"
                                        >
                                            City
                                        </label>
                                        <input
                                            type="text"
                                            name="city"
                                            id="city"
                                            autoComplete="address-level2"
                                            className="edit-admin-info3"
                                        />
                                    </div>

                                    <div className="edit-admin-info2 admin-lg">
                                        <label
                                            htmlFor="region"
                                            className="edit-admin10"
                                        >
                                            State / Province
                                        </label>
                                        <input
                                            type="text"
                                            name="region"
                                            id="region"
                                            autoComplete="address-level1"
                                            className="edit-admin-info3"
                                        />
                                    </div>

                                    <div className="edit-admin-info2 admin-lg">
                                        <label
                                            htmlFor="postal-code"
                                            className="edit-admin10"
                                        >
                                            ZIP / Postal code
                                        </label>
                                        <input
                                            type="text"
                                            name="postal-code"
                                            id="postal-code"
                                            autoComplete="postal-code"
                                            className="edit-admin-info3"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="edit-admin-btn1">
                                <div className="edit-admin-btn3">
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
