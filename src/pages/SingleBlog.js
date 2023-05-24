import React from "react";
import BreadCrum from "../components/BreadCrum";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
import {HiOutlineArrowLeft} from "react-icons/hi"
import blog from "../images/blog-1.jpg"

const SingleBlog = () => {
  return (
    <>
      <Meta title={"Dynamic Blog Name"} />
      <BreadCrum title="Dynamic Blog Name" />
      <div className="blog-wrapper wish home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="single-blog-card">
              <Link to="/blogs" className="d-flex align-items-center gap-10">
              <HiOutlineArrowLeft className="fs-4" />
              Go Back to Blogs</Link>
                <h3 className="title">A Beatiful Sunday Morning Renaissance</h3>
                <img className="im-fluid w-100 my-4" src={blog} alt="blog" />
                <p>
                  computing, data is information that has been translated into a
                  form that is efficient for movement or processing. Relative to
                  today's computers and transmission media, data is information
                  converted into binary digital form. It is acceptable for data
                  to be used as a singular subject or a plural subject.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBlog;
