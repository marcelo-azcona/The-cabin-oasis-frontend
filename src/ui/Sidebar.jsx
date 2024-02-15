import styles from './Sidebar.module.css';
import Logo from '../ui/Img/Logo';
import MainNav from './Nav/MainNav';

function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <Logo />
      <MainNav />
    </aside>
  );
}

export default Sidebar;
