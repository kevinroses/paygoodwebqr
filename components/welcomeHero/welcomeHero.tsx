import React from "react";
import cls from "./welcomeHero.module.scss";
import { ILandingPageData, IStatistics } from "interfaces/page.interface";
import Link from "next/link";

type Props = {
  data?: ILandingPageData;
  stats?: IStatistics;
};

export default function WelcomeHero() {
  return (
    <>
      <div className={cls.container}>
        <div className="welcome-container">
          <div className={cls.wrapper}>
            <div className={cls.heroBgImage}>
              <img src="/images/welcome-hero-vector.png" />
            </div>
            <div className={cls.heroContent}>
              <div className={cls.title}>
                Servicio de <br /> QR Menu
              </div>
              <div className={cls.desc}>
                Crea un menú con código QR para tu restaurante, bar o cafetería, permitiendo a tus clientes disfrutar de una experiencia de pedido sin contacto.
              </div>
           
            </div>
            <div className={cls.heroMedia}>
              <img className={cls.heroMediaItem1} src="/images/scan-qr-1.png" />
              <img className={cls.heroMediaItem2} src="/images/scan-qr-2.png" />
              <img className={cls.heroMediaItem3} src="/images/scan-qr-3.png" />
              <div className={cls.scanQr}>
                <img src="/images/scan-qr.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
