/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Animation from "./Animation";
import { Link } from "react-router-dom";

import Button from "./subassets/components/Button";
import Background from "./subassets/Background";
import Footer from "./Footer";

import Heading from "./subassets/components/Heading";
import Input from "./subassets/components/Input";
import Radio from "./subassets/components/Radio";
import SocialButton from "./subassets/components/SocialButton";
import Socialbutton1 from "./subassets/components/Socialbutton1";
import SOcialButton2 from "./subassets/components/SOcialButton2";
function Register() {
  return (
    <>
      <Animation>
        <Background>
          <main className=" a c1">
            <section>
              <Heading
                href="#!"
                head="Create Your Free Account"
                support=" And Start"
                subhead="Enjoying Delicious Tastes"
              />
            </section>
            <section className="register-common a1">
              <div className="a2">
                <div className="a3 c1">
                  <span className="a4">Continue Sign up with</span>
                </div>
                <div>
                  <div className="b8">
                    <div>
                      <SOcialButton2 />
                    </div>

                    <div>
                      <Socialbutton1 />
                    </div>

                    <div>
                      <SocialButton />
                    </div>
                  </div>

                  <div className="relative">
                    <div className="a7">
                      <div className="a8" />
                    </div>
                  </div>
                </div>
                <div className="b9 c1">
                  <span className="a4">Or sign up with credentials</span>
                </div>
                <form className="register-common1" action="#" /*method="POST"*/>
                  <div>
                    <label htmlFor="email" className="label">
                      Your Name
                    </label>
                    <div className="mt-1">
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        autoComplete="name"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="label">
                      Email address
                    </label>
                    <div className="mt-1">
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="label">
                      Phone Number
                    </label>
                    <div className="mt-1">
                      <Input
                        id="tel"
                        name="tel"
                        type="tel"
                        autoComplete="tel"
                      />
                    </div>
                  </div>

                  <div className="register-common2">
                    <div>
                      <label htmlFor="password" className="label">
                        Password
                      </label>
                      <div className="mt-1">
                        <Input
                          id="password"
                          name="password"
                          type="password"
                          autoComplete="current-password"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="password" className="label">
                        Confirm Password
                      </label>
                      <div className="mt-1">
                        <Input
                          id="confirmpassword"
                          name="confirmpassword"
                          type="password"
                          autoComplete="Confirm-password"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="a10">
                    <div className="b1">
                      <Radio
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                      />
                      <label htmlFor="remember-me" className="b2">
                        I agree with the privacy policy
                      </label>
                    </div>
                  </div>
                  <Link to={"/login"}>
                    <Button name="Sign Up" />
                  </Link>

                  <div></div>
                </form>
              </div>
              <div className="text-right">
                <span className="b5 ">
                  <span className="b6">Already registered</span>
                  <Link to={"/login"} className="b7">
                    {" "}
                    Sign in ?
                  </Link>
                </span>
              </div>
            </section>
          </main>
        </Background>
      </Animation>
      <Footer />
    </>
  );
}

export default Register;
