import { createContext, useContext } from 'react';
import styles from './Table.module.css';

const TableContext = createContext();

function Table({ columns, children }) {
  return (
    <TableContext.Provider value={columns}>
      <div className={styles.tableContainer} role="table">
        {children}
      </div>
    </TableContext.Provider>
  );
}

function Header({ children }) {
  const { columns } = useContext(TableContext);

  return (
    <header
      className={styles.tableHeader}
      role="row"
      style={{ gridTemplateColumns: `${columns}` }}
    >
      {children}
    </header>
  );
}

function Row({ children }) {
  const { columns } = useContext(TableContext);

  return (
    <div
      className={styles.tableRow}
      role="row"
      style={{ gridTemplateColumns: `${columns}` }}
    >
      {children}
    </div>
  );
}

function Body({ children }) {}

function Footer() {
  return <div className={styles.tableFooter} />;
}

Table.Header = Header;
Table.Body = Body;
Table.Row = Row;
Table.Footer = Footer;

export default Table;
