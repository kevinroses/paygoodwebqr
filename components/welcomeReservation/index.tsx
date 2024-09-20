import React from "react";
import cls from "./reservation.module.scss";
import Link from "next/link";
const WelcomeReservation = () => {
  return (
    <div className="welcome-container">
      <div className={cls.container}>
        <div className={cls.left}>
          <img src="/images/reservation.png" alt="" />
        </div>
        <div className={cls.right}>
          <div className={cls.top}>
            <div className={cls.label}>Ventajas</div>
            <div className={cls.title}>
             reserva de mesa <br />
              En línea
              
            </div>
            <div className={cls.icon}>
              <img src="/images/logo.svg" alt="" />
            </div>
          </div>
          <div className={cls.bottom}>
            <div className={cls.bottomTitle}>
             Encuentra tu mesa para cualquier ocasión
            </div>
            <Link className={cls.bottomBtn} href="/reservations">
           Explora más
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeReservation;
