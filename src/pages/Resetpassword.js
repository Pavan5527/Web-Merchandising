import React from "react";
import BreadCrum from "../components/BreadCrum";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import Custominput from "../components/Custominput";

const Resetpassword = () => {
  return (
    <>
      <Meta title={"Reset Password"} />
      <BreadCrum title="Reset Password" />
      <Container class1="login-wrapper wish py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="auth-card">
                <h3 className="text-center mb-3">Reset Password</h3>
                <form action="" className="d-flex flex-column gap-15">
                  <Custominput
                    type="password"
                    name="password"
                    placeholder="Password"
                  />
                  <Custominput
                    type="password"
                    name="confpassword"
                    placeholder="Confirm Password"
                  />

                  <div>
                    <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                      <button className="button border-0">Submit</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Resetpassword;
