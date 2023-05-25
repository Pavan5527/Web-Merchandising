import React from "react";
import BreadCrum from "../components/BreadCrum";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
import Container from "../components/Container";

const TermAndConditions = () => {
  return (
    <>
      <Meta title={"Terms And Conditions"} />
      <BreadCrum title="Terms And Conditions" />
      <Container class1="policy-wrapper wish py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="policy"></div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default TermAndConditions;
