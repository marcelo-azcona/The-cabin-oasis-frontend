import styles from './Dashboard.module.css';

function DashboardBox({ children }) {
  return <div className={styles.dashboardBox}>{children}</div>;
}

export default DashboardBox;
