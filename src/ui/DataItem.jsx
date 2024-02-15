import styles from './DataItem.module.css';

function DataItem({ icon, label, children }) {
  return (
    <div className={styles.dataItemContainer}>
      <span className={styles.dataItemLabel}>
        {icon}
        <span>{label}</span>
      </span>
      {children}
    </div>
  );
}

export default DataItem;
