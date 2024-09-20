import React from "react";
import cls from "./app.module.scss";
import Link from "next/link";
const MobileAppBanner = () => {
  return (
    <div className="welcome-container">
      <div className={cls.mobileAppBanner}>
        <div className={cls.left}>
          <div className={cls.linkBtn}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="39"
              height="39"
              viewBox="0 0 39 39"
              fill="none"
            >
              <path
                d="M26.2789 17.8748L17.5624 9.15832L19.8604 6.86023L32.5 19.4998L19.8604 32.1392L17.5624 29.8412L26.2789 21.1248H6.5V17.8748H26.2789Z"
                fill="#171717"
              />
            </svg>
          </div>
          <div className={cls.title}>Descarga la aplicación móvil</div>
        </div>
        <div className={cls.right}>
          <div className={cls.title}>
            Disfrute de contenido exclusivo en nuestra aplicación, incluido producto personalizado
          </div>
          <div className={cls.storeLinks}>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/images/app-store.png" alt="" />
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=paygood.saas.pos"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/images/google-play.svg" alt="" />
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=paygood.saas.pos"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/images/pos.png" alt="" />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/images/waiter.png" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileAppBanner;
