"use client";
// Sidebar.tsx

import React, { useState } from "react";
import Link from "next/link";
import styles from "./sidebar.module.css";

interface SidebarProps {
  // Define your props here if needed
}

const Sidebar: React.FC<SidebarProps> = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const openSidebar = () => {
    setIsSidebarOpen(true);
    if (isSidebarOpen) {
      setIsSidebarOpen(false);
    }
  };

  return (
    <div className={styles["sidebar-container"]}>
      {isSidebarOpen && (
        <>
          <button className={styles["open-button"]} onClick={openSidebar}>
            ☰
          </button>
          <div
            className={`${styles["icons-bar"]} ${
              isSidebarOpen ? styles.open : ""
            }`}
          >
            <div>Icon</div>
          </div>
        </>
      )}
      <div className={`${styles.sidebar} ${isSidebarOpen ? styles.open : ""}`}>
        <button className={styles["open-button"]} onClick={openSidebar}>
          ☰
        </button>
        <div className={styles["sidebar-header"]}>
          <h3>Sidebar Header</h3>
        </div>
        <div className={styles["sidebar-content"]}>
          <ul>
            <li>
              <Link href="/demo">Demo</Link>
            </li>
          </ul>
        </div>
        <button className={styles["toggle-button"]} onClick={toggleSidebar}>
          Toggle Sidebar
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
