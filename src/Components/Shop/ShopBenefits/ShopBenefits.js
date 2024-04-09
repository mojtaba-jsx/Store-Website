import React from "react";
import "./ShopBenefits.css";
import { TfiCup } from "react-icons/tfi";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { LiaShippingFastSolid } from "react-icons/lia";
import { MdSupportAgent } from "react-icons/md";
function ShopBenefits() {
  return (
    <div className="shop-benefits">
      <div className="shop-benefits__wrapper">
        <div className="shop-benefits__box">
          <div className="shop-benefits__box__left">
            <TfiCup className="shop-benefits__box__left-icon" />
          </div>
          <div className="shop-benefits__box__right">
            <span className="shop-benefits__box__right-title">
              High Quality
            </span>
            <span className="shop-benefits__box__right-text">
              crafted from top materials
            </span>
          </div>
        </div>

        <div className="shop-benefits__box">
          <div className="shop-benefits__box__left">
            <VscWorkspaceTrusted  className="shop-benefits__box__left-icon"/>
          </div>
          <div className="shop-benefits__box__right">
            <span className="shop-benefits__box__right-title">
              Warranty Protection
            </span>
            <span className="shop-benefits__box__right-text">Over 2 years</span>
          </div>
        </div>

        <div className="shop-benefits__box">
          <div className="shop-benefits__box__left">
            <LiaShippingFastSolid className="shop-benefits__box__left-icon" />
          </div>
          <div className="shop-benefits__box__right">
            <span className="shop-benefits__box__right-title">
              Free Shipping
            </span>
            <span className="shop-benefits__box__right-text">
              Order over 150 $
            </span>
          </div>
        </div>

        <div className="shop-benefits__box">
          <div className="shop-benefits__box__left">
            <MdSupportAgent className="shop-benefits__box__left-icon" />
          </div>

          <div className="shop-benefits__box__right">
            <span className="shop-benefits__box__right-title">
              24 / 7 Support
            </span>

            <span className="shop-benefits__box__right-text">
              Dedicated support
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopBenefits;
