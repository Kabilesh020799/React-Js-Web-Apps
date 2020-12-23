import React, { useState } from "react";
import PriceCard from "../PriceCard/PriceCard";

import "./Pricing.css";

function Pricing() {
  const [items, setItems] = useState([
    {
      title: "Ultimate access to all course, exercises and assessments",
      checked: true,
    },
    {
      title: "Free acess for all kind of exercise corrections with downloads.",
      checked: true,
    },
    {
      title: "Total assessment corrections with free download access system",
      checked: true,
    },
    {
      title: "Unlimited download of courses on the mobile app contents",
      checked: false,
    },
    {
      title: "Download and print courses and exercises in PDF",
      checked: false,
    },
  ]);
  const [items1, setItems1] = useState([
    {
      title: "Ultimate access to all course, exercises and assessments",
      checked: true,
    },
    {
      title: "Free acess for all kind of exercise corrections with downloads.",
      checked: true,
    },
    {
      title: "Total assessment corrections with free download access system",
      checked: true,
    },
    {
      title: "Unlimited download of courses on the mobile app contents",
      checked: true,
    },
    {
      title: "Download and print courses and exercises in PDF",
      checked: true,
    },
  ]);
  return (
    <div className="pricing">
      <div className="pricing__head">pricing plan</div>
      <div className="pricing__head1">Choose your pricing policy</div>
      <div className="pricing__btn">
        <div className="pricing__btn1">Monthly Plan</div>
        <div className="pricing__btn1">Annual Plan</div>
      </div>
      <div className="pricing__card">
        <PriceCard
          title="Free Plan"
          subTitle="For Small teams or office"
          items={items}
          recommend={false}
        />
        <PriceCard
          title="Premium"
          subTitle="For startup enterprise"
          items={items1}
          recommend={true}
        />
      </div>
    </div>
  );
}

export default Pricing;
