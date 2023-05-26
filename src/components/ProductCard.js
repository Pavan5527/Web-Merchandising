import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";
import prodcompare from "../images/prodcompare.svg";
import wish from "../images/wish.svg";
import watch from "../images/watch.jpg";
import watch2 from "../images/watch2.avif";
import addcart from "../images/add-cart.svg";
import view from "../images/view.svg";

function ProductCard(props) {
  const { grid } = props;
  let location = useLocation(props);

  return (
    <>
      <div
        className={` ${location.pathname == "/product" ? `gr-${grid}` : "col-3"}`}
      >
        <Link to=":id" className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <button className="border-0 bg-transparent">
              <img src={wish} alt="wishlist" />
            </button>
          </div>
          <div className="product-image">
            <img
              src={watch}
              className="img-fluid"
              alt="product image"
            />
            <img
              src={watch2}
              className="img-fluid"
              alt="product image"
            />
          </div>
          <div className="product-details">
            <h6 className="brand">Havels</h6>
            <h5 className="product-title">
              Kids headphones bulk 10 pack multi colored for students
            </h5>
            <ReactStars
              count={5}
              size={24}
              value="4"
              edit={false}
              activeColor="#ffd700"
            />
            <p className={`description ${grid == 12 ? "d-block" : "d-none"}`}>
              VR gaming systems generate realistic sensations that simulate
              users' physical presence in a computer-generated environment. The
              goal of VR gaming systems is to let users believe they inhabit a
              virtual world.
            </p>
            <p className="price">$100.00</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column pag-15">
              <button className="border-0 bg-transparent">
                <img src={prodcompare} alt="addcart" />
              </button>
              <button className="border-0 bg-transparent">
                <img src={view} alt="addcart" />
              </button>
              <button className="border-0 bg-transparent">
                <img src={addcart} alt="addcart" />
              </button>
            </div>
          </div>
        </Link>
      </div>
      <div
        className={` ${location.pathname == "/product" ? `gr-${grid}` : "col-3"}`}
      >
        <Link className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <button className="border-0 bg-transparent">
              <img src={wish} alt="" />
            </button>
          </div>
          <div className="product-image">
            <img
              src={watch}
              className="img-fluid"
              alt="product image"
            />
            <img
              src={watch2}
              className="img-fluid"
              alt="product image"
            />
          </div>
          <div className="product-details">
            <h6 className="brand">Havels</h6>
            <h5 className="product-title">
              Kids headphones bulk 10 pack multi colored for students
            </h5>
            <ReactStars
              count={5}
              size={24}
              value="4"
              edit={false}
              activeColor="#ffd700"
            />
            <p className={`description ${grid == 12 ? "d-block" : "d-none"}`}>
              VR gaming systems generate realistic sensations that simulate
              users' physical presence in a computer-generated environment. The
              goal of VR gaming systems is to let users believe they inhabit a
              virtual world.
            </p>
            <p className="price">$100.00</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column pag-15">
              <button className="border-0 bg-transparent">
                <img src={prodcompare} alt="addcart" />
              </button>
              <button className="border-0 bg-transparent">
                <img src={view} alt="addcart" />
              </button>
              <button className="border-0 bg-transparent">
                <img src={addcart} alt="addcart" />
              </button>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}

export default ProductCard;
