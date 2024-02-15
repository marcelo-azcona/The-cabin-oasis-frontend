import { Outlet } from 'react-router-dom';
import Sidebar from '../ui/Sidebar';
import Header from '../ui/Head/Header';
import styles from './AppLayout.module.css';

function AppLayout() {
  return (
    <div className={styles.appLayout}>
      <Header />
      <Sidebar />
      <main className={styles.main}>
        <div className={styles.container}>
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default AppLayout;
