import CreateCabinForm from './CreateCabinForm';
import { useDeleteCabin } from './hooks/useDeleteCabin';
import { formatCurrency } from '../../utils/helpers';
import { HiPencil, HiSquare2Stack, HiTrash } from 'react-icons/hi2';
import { useCreateCabin } from './hooks/useCreateCabin';
import ConfirmDelete from '../../ui/ConfirmDelete';
import Modal from '../../ui/Modal/Modal';
import styles from './Cabin.module.css';

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
      <div className={styles.cabinRow} role="row">
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
          <button disabled={isCreating} onClick={handleDuplicate}>
            <HiSquare2Stack />
          </button>

          <Modal>
            <Modal.Open opens="edit">
              <button>
                <HiPencil />
              </button>
            </Modal.Open>
            <Modal.Window name="edit">
              <CreateCabinForm cabinToEdit={cabin} />
            </Modal.Window>

            <Modal.Open opens="delete">
              <button>
                <HiTrash />
              </button>
            </Modal.Open>
            <Modal.Window name="delete">
              <ConfirmDelete
                resource="cabins"
                disabled={isDeleting}
                onConfirm={() => deleteCabin(cabinId)}
              />
            </Modal.Window>
          </Modal>
        </div>
      </div>
    </>
  );
}

export default CabinRow;
