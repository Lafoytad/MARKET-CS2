import styles from "./notification.module.scss";
import React, { useMemo, useEffect, useCallback } from "react";
import { notification } from "antd";

import { useSelector, useDispatch } from "react-redux";

import { vis } from "@/app/store/slice/slice";

const Context = React.createContext({
  name: "fgh",
  typee: "111",
});

const MyNotification = () => {
  const count = useSelector((state) => state.counter.value);
  const updatedIndex = useSelector((state) => state.counter.numb);
  const visible = useSelector((state) => state.counter.visible);

  const dispatch = useDispatch();

  const [api, contextHolder] = notification.useNotification();

  const openNotification = useCallback(
    (placement) => {
      const item = count[updatedIndex];
      api.info({
        message: `Предмет в корзине за ${item.price}$`,
        description: item.name ? `${item.type} | ${item.name}` : `${item.type}`,
        placement,
      });
    },
    [api, count, updatedIndex]
  );

  const contextValue = useMemo(
    () => ({
      name: "Ant Design",
    }),
    []
  );

  useEffect(() => {
    if (count[updatedIndex] && visible) {
      openNotification("bottomLeft");
      dispatch(vis());
    }
  }, [count, updatedIndex, visible, openNotification, dispatch]);

  return (
    <Context.Provider value={contextValue}>{contextHolder}</Context.Provider>
  );
};
export default MyNotification;
