import React, { useContext } from "react";
import styles from "./TaskClear.module.scss";
import { ThemeContext } from "../context/theme-context";

const TaskClear = () => {
  const themeContext = useContext(ThemeContext);

  return (
    <section className={styles[`${themeContext.theme}`]}>
      <div>
        <h3>5 items left</h3>
        <button>Clear Completed</button>
      </div>
    </section>
  );
};

export default TaskClear;

