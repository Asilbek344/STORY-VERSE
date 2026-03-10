import React from 'react'
import "./Footer.css"
import Logo from "../Header/Imeges/Logo.jpg"
import { FaTelegram, FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="container foter-cn">

        <div className="footer-logo">
          <img src={Logo} alt="logo" />
          <p>
            Bu sayt orqali siz eng zo'r va zamonaviy filmlarni topishingiz mumkin.
            Biz sizga sifatli va qiziqarli kino olamini taqdim etamiz.
            Eng yaxshi filmlar faqat shu yerda!
          </p>
        </div>

        <div className="footer-social">
          <h3>Biz bilan bog'laning</h3>
          <div className="icons">
            <a href="https://t.me/Aslbek00_01" target="_blank">
              <FaTelegram />
            </a>

            <a href="https://instagram.com/__shex_777_" target="_blank">
              <FaInstagram />
            </a>

            <a href="https://github.com/" target="_blank">
              <FaGithub />
            </a>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer