import React from "react";
import styles from "./TaskClear.module.scss";

const TaskClear = () => {
  return (
    <div className={styles.container}>
      <div>
        <h3>5 items left</h3>
        <button>Clear Completed</button>
      </div>
    </div>
  );
};

export default TaskClear;

