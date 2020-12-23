import React, { useState } from "react";

import "./Questions.css";

import Plus from "../../assets/icons/plus.svg";
import CurveLeft from "../../assets/icons/curveleft.svg";
import CurveRight from "../../assets/icons/curveright.svg";

function Questions() {
  const [items, setItems] = useState([
    {
      title: "How to contact with riders emergency ?",
      content:
        "An FAQ is a list of frequently asked questions (FAQs) and answers on a particular topic (also known as Questions and Answers [Q&A] or Frequently Asked Questions). The format is often used in articles, websites, email lists, and online forums where common questions tend to recur, for example through posts or queries by new users related to common knowledge gaps. The purpose of an FAQ is generally provide information.",
    },
    {
      title: "App installation failed, how to update system information?",
      content:
        "An FAQ is a list of frequently asked questions (FAQs) and answers on a particular topic (also known as Questions and Answers [Q&A] or Frequently Asked Questions). The format is often used in articles, websites, email lists, and online forums where common questions tend to recur, for example through posts or queries by new users related to common knowledge gaps. The purpose of an FAQ is generally provide information.",
    },
    {
      title: "Website reponse taking time, how to improve?",
      content:
        "An FAQ is a list of frequently asked questions (FAQs) and answers on a particular topic (also known as Questions and Answers [Q&A] or Frequently Asked Questions). The format is often used in articles, websites, email lists, and online forums where common questions tend to recur, for example through posts or queries by new users related to common knowledge gaps. The purpose of an FAQ is generally provide information.",
    },
    {
      title: "New update fixed all bug and issues",
      content:
        "An FAQ is a list of frequently asked questions (FAQs) and answers on a particular topic (also known as Questions and Answers [Q&A] or Frequently Asked Questions). The format is often used in articles, websites, email lists, and online forums where common questions tend to recur, for example through posts or queries by new users related to common knowledge gaps. The purpose of an FAQ is generally provide information.",
    },
  ]);
  const [nav1, setNav1] = useState([
    "Support Center",
    "Customer Support",
    "About Us",
    "Copyright",
    "Popular Campaign",
  ]);
  const [nav2, setNav2] = useState([
    "Return Policy",
    "Privacy Policy",
    "Terms & Conditons",
    "Site Map",
    "Store Hours",
  ]);
  const [nav3, setNav3] = useState([
    "Press inquiries",
    "Social Media",
    "directoris",
    "Images & B-roll",
    "Permissions",
  ]);
  const [nav4, setNav4] = useState([
    "Application security",
    "Software Principles",
    "Unwanted software policy",
    "Responsible supply chain",
  ]);

  return (
    <div className="question">
      <div className="question__head">Frequent questions</div>
      <div className="question__subhead">Do you have any question</div>
      <div className="question__content">
        {items.map((item, ind) => (
          <div className="content__body">
            <img src={Plus} alt="plus" />{" "}
            <div className="content__question">{item.title}</div>
          </div>
        ))}
      </div>
      <div className="question__footer">
        <img src={CurveLeft} alt="curveleft" />
        <span>Ready to learn design with Nia Matos</span>
        <img src={CurveRight} alt="curveright" />
      </div>
      <div className="question__btn">Enroll Now</div>
      <div className="tiles">
        <div className="tile">
          <div className="tiles__head">About Us</div>
          {nav1.map((nv) => (
            <div className="tiles__content">{nv}</div>
          ))}
        </div>
        <div className="tile">
          <div className="tiles__head">Our Information</div>
          {nav2.map((nv) => (
            <div className="tiles__content">{nv}</div>
          ))}
        </div>
        <div className="tile">
          <div className="tiles__head">My Account</div>
          {nav3.map((nv) => (
            <div className="tiles__content">{nv}</div>
          ))}
        </div>
        <div className="tile">
          <div className="tiles__head">Policy</div>
          {nav4.map((nv) => (
            <div className="tiles__content">{nv}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Questions;
