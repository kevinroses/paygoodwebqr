import React, { useState } from "react";
import cls from "./subscription.module.scss";
import OptionItem from "./optionItem";
import useModal from "hooks/useModal";
import { useQuery } from "react-query";
import subscriptionService from "services/subscription";
import HandleSubscriptionModal from "components/pricing-event-organizer/buy-subscription";
import Link from "next/link";
const SubscriptionPlan = ({ isMore, count }: any) => {
  const [openWaitingModal, handleOpenWaitingModal, handleCloseWaitingModal] =
    useModal();
  const [id, setId] = useState(0);

  const { data } = useQuery("subscriptions", () =>
    subscriptionService.getAll()
  );

  return (
    <div className="welcome-container">
      <div className={cls.subscriptionBox}>
        <div className={cls.flex}>
          <div className={cls.title}>Elige tu plan</div>
          {isMore && (
            <Link href="/subscription-plans">
              <div className={cls.moreBtn}>Ver más</div>
            </Link>
          )}
        </div>
        <div className={cls.desc}>
          Comienza gratis y enamórate de nuestras funciones profesionales.
        </div>
<div className={cls.optionItems}>
  {data?.data && Array.isArray(data.data) && data.data.length > 0 ? (
    data.data.slice(0, count).map((item, key) => (
      <OptionItem
        key={key}
        item={item}
        setId={setId}
        handleOpenWaitingModal={handleOpenWaitingModal}
      />
    ))
  ) : (
    <p>No hay elementos disponibles</p>
  )}
</div>



      </div>
      <HandleSubscriptionModal
        id={id}
        open={openWaitingModal}
        handleClose={handleCloseWaitingModal}
      />
    </div>
  );
};

export default SubscriptionPlan;
