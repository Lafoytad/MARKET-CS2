import styles from "./notification.module.scss";
import React, { useMemo, useEffect, useState } from "react";
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

  const openNotification = (placement) => {
    api.info({
      message: `Купили предмет за ${count[updatedIndex].price}$`,
      description: (
        <Context.Consumer>
          {!count[updatedIndex].name
            ? () => `${count[updatedIndex].type}`
            : () => `${count[updatedIndex].type} | ${count[updatedIndex].name}`}
        </Context.Consumer>
      ),
      placement,
    });
  };
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
  }, [count]);

  return (
    <Context.Provider value={contextValue}>{contextHolder}</Context.Provider>
  );
};
export default MyNotification;
