import React from "react";
import cls from "./style.module.scss";
import ServiceItem from "./serviceItem";
import Link from "next/link";
export default function HowDoesItWork() {
  const cardList = [
  {
  title: "Colocas los productos",
  link: "/",
  desc: "¿Qué se debe colocar en el establecimiento?",
  img: "/images/service1.png",
},
{
  title: "Escaneo de QR",
  link: "/",
  desc: "O acerca el teléfono a un chip NFC",
  img: "/images/service2.png",
},
{
  title: "Abrir el menú",
  link: "/",
  desc: "No requiere instalación",
  img: "/images/service3.png",
},

  ];
  return (
    <div className="welcome-container">
      <div className={cls.container}>
        <div className={cls.title}>¿Cómo funciona?</div>
        <div className={cls.serviceItems}>
          {cardList.map((item, key) => (
            <ServiceItem key={key} item={item} />
          ))}
        </div>
        <div className={cls.bottomContent}>
          <div className={cls.left}>
            <div className={cls.text}>
             Guiado fácilmente, el cliente selecciona los platos adecuados y elabora una
              orden.
            </div>
            <Link href="/about">
              <div className={cls.seeAllBtn}>Ver todo</div>
            </Link>
          </div>
          <div className={cls.right}>
           Todo lo que tus clientes necesitan en un solo servicio
          </div>
        </div>
      </div>
    </div>
  );
}
