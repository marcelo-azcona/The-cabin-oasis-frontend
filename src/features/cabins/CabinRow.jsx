import CreateCabinForm from './CreateCabinForm';
import { useDeleteCabin } from './hooks/useDeleteCabin';
import { formatCurrency } from '../../utils/helpers';
import { HiPencil, HiSquare2Stack, HiTrash } from 'react-icons/hi2';
import { useCreateCabin } from './hooks/useCreateCabin';
import ConfirmDelete from '../../ui/ConfirmDelete';
import Modal from '../../ui/Modal/Modal';
import styles from './Cabin.module.css';
import Table from '../../ui/Table/Table';
import Menus from '../../ui/Menu/Menus.jsx';

function CabinRow({ cabin }) {
  const { isDeleting, deleteCabin } = useDeleteCabin();
  const { isCreating, createCabin } = useCreateCabin();

  const {
    id: cabinId,
    name,
    maxCapacity,
    price,
    discount,
    image,
    description,
  } = cabin;

  function handleDuplicate() {
    createCabin({
      name: `Copy of ${name}`,
      maxCapacity,
      price,
      discount,
      image,
      description,
    });
  }

  return (
    <>
      {/* <div className={styles.cabinRow} role="row">
       */}
      <Table.Row>
        <img className={styles.cabinImg} src={image} alt="An img of a Cabin" />
        <div className={styles.cabin}>{name}</div>
        <div>Fits up to {maxCapacity} guests</div>
        <div className={styles.price}>{formatCurrency(price)}</div>
        {discount ? (
          <div className={styles.discount}>{formatCurrency(discount)}</div>
        ) : (
          <span>&mdash;</span>
        )}
        <div>
          {/* <button disabled={isCreating} onClick={handleDuplicate}>
            <HiSquare2Stack />
          </button> */}

          <Modal>
            <Menus.Menu>
              <Menus.Toggle id={cabinId} />

              <Menus.List id={cabinId}>
                <Menus.Button
                  icon={<HiSquare2Stack />}
                  onClick={handleDuplicate}
                >
                  Duplicate
                </Menus.Button>

                <Modal.Open opens="edit">
                  <Menus.Button icon={<HiPencil />} onClick={handleDuplicate}>
                    Edit
                  </Menus.Button>
                </Modal.Open>

                <Modal.Open opens="delete">
                  <Menus.Button icon={<HiTrash />} onClick={handleDuplicate}>
                    Delete
                  </Menus.Button>
                </Modal.Open>
              </Menus.List>

              <Modal.Window name="edit">
                <CreateCabinForm cabinToEdit={cabin} />
              </Modal.Window>

              <Modal.Window name="delete">
                <ConfirmDelete
                  resource="cabins"
                  disabled={isDeleting}
                  onConfirm={() => deleteCabin(cabinId)}
                />
              </Modal.Window>
            </Menus.Menu>
          </Modal>
        </div>
      </Table.Row>
    </>
  );
}

export default CabinRow;
