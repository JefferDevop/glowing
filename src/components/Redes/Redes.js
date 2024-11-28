import React, { useState, useEffect } from "react";
import styles from "./Redes.module.scss";
import Link from "next/link";

import { IoLogoWhatsapp } from "react-icons/io";
import { GiRotaryPhone } from "react-icons/gi";
import { AiFillInstagram } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";

export function Redes() {
  const [isVisible, setIsVisible] = useState(false);
  const scrollThreshold = 50;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= scrollThreshold) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className={styles.redes}>
    
        <p>Centro comercial punto 14 - Local B1-30 Primer piso</p>
        <p>San Andresito Sur piso 1 local 1-105</p>

        <p>Ubicados en Cali-Colombia</p>
          <p>Contacto: 3107640196 - 3136900832 - 3203269697</p>

        <Link href="https://distribuidoraglowing.bio.link/">
        <p>Redes: distribuidoraglowing.bio.link</p>
        </Link>      

        
      </div>
      {/* 
      <div
        className={`${styles.sticky_div} ${isVisible ? styles.visible : ""}`}
        style={{
          transform: isVisible ? "scale(1)" : "scale(0.5)", // Cambia la escala para crecer/desvanecer
          opacity: isVisible ? 1 : 0, // Cambia la opacidad para desvanecer
          transition: "transform 0.3s, opacity 0.3s", // Aplica una transición
        }}
      >
        <h1>CRISTALERIA LA 10A</h1>
      </div> */}
    </>
  );
}
