import React from "react";
import Profile from "./Profile";
function Password() {
    return (
        <Profile>
            <section className="admin-pass1 ">
                <section className="">
                    <div className="admin-pass2">
                        <div className="admin-pass3">Change Your Password</div>
                        <div className="admin-pass4 ">
                            Create Your New Password to get access account
                        </div>

                        <div className="mt-10">
                            <form action="#">
                                <div className="admin-pass5">
                                    <label
                                        htmlFor="current-password"
                                        className="admin-pass6"
                                    >
                                        Current Password:
                                    </label>
                                    <div className="relative">
                                        <div className="admin-pass7 ">
                                            <i className="admin-pass8 fas fa-lock"></i>
                                        </div>

                                        <input
                                            id="current-password"
                                            type="password"
                                            name="current-password"
                                            className="admin-pass9"
                                            placeholder="Enter your current password"
                                        />
                                    </div>
                                </div>
                                <div className="pass-comm1">
                                    <label
                                        htmlFor="new-password"
                                        className="admin-pass6 sm:text-sm"
                                    >
                                        New Password:
                                    </label>
                                    <div className="relative">
                                        <div className="admin-pass7 ">
                                            <span>
                                                <i className="admin-pass8 fas fa-lock"></i>
                                            </span>
                                        </div>

                                        <input
                                            id="new-password"
                                            type="new-password"
                                            name="password"
                                            className="admin-pass9"
                                            placeholder="Enter your new password"
                                        />
                                    </div>
                                </div>
                                <div className="pass-comm">
                                    <label
                                        htmlFor="confirm-password"
                                        className="admin-pass6"
                                    >
                                        Confirm New Password:
                                    </label>
                                    <div className="relative">
                                        <div className="admin-pass7 ">
                                            <i className="admin-pass8 fas fa-lock"></i>
                                        </div>

                                        <input
                                            id="confirm-password"
                                            type="password"
                                            name="confirm-password"
                                            className="admin-pass9"
                                            placeholder="Enter your name"
                                        />
                                    </div>
                                </div>
                                <div className="pass-comm2">
                                    <button
                                        type="submit"
                                        className="admin-pass10"
                                    >
                                        <span className="mr-2 uppercase">
                                            Change Your Password
                                        </span>
                                        <span>
                                            <svg
                                                className="w-6 h-6"
                                                fill="none"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </span>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
                <section className="">
                    <p href="#" target="_blank" className="admin-pass11 ">
                        <span className="ml-2">
                            Changed Password?
                            <a href="#" className="admin-pass12">
                                Login here
                            </a>
                            <span className="px-2">again</span>
                        </span>
                        <span>Or</span>
                        <a href="#" className="pt-2 admin-pass12">
                            Forget Password
                        </a>
                    </p>
                </section>
            </section>
        </Profile>
    );
}

export default Password;
