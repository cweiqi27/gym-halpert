import React, { useState } from "react";
import styles from "./Schedule.module.scss";
import Button from "../ui/Button";

type schedulesType = {
  id: number;
  title: string;
  text: string;
  color: "primary" | "secondary" | "tertiary";
}[];

const schedules: schedulesType = [
  {
    id: 0,
    title: "Monday",
    text: "this is a monday",
    color: "primary",
  },
  {
    id: 1,
    title: "Sunday",
    text: "this is sunday",
    color: "secondary",
  },
  {
    id: 2,
    title: "Urur",
    text: "this is sunday",
    color: "secondary",
  },
  {
    id: 3,
    title: "IDK",
    text: "this is sunday",
    color: "secondary",
  },
];

const Schedule = () => {
  const [testState, setTestState] = useState(0);
  return (
    <div className={styles.container}>
      {schedules.map((schedule) => (
        <Button
          key={schedule.id}
          title={schedule.title}
          text={schedule.text}
          color={schedule.color}
          action={() => setTestState(2)}
        />
      ))}
    </div>
  );
};

export default Schedule;
