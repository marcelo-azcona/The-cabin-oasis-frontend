import { useState } from 'react';
import Button from '../../ui/Button/Button';
import Modal from '../../ui/Modal/Modal';
import CreateCabinForm from './CreateCabinForm';

function AddCabin() {
  // const [isOpenModal, setIsOpenModal] = useState(false);
  // return (
  //   <div>
  //     <Button onClick={() => setIsOpenModal((show) => !show)}>
  //       Add new cabin
  //     </Button>
  //     {isOpenModal && (
  //       <Modal onClose={() => setIsOpenModal(false)}>
  //         <CreateCabinForm onCloseModal={() => setIsOpenModal(false)} />
  //       </Modal>
  //     )}
  //   </div>
  // );

  return (
    <Modal>
      <Modal.Open opens="cabin-form">
        <Button>Add new cabin</Button>
      </Modal.Open>
      <Modal.Window name="cabin-form">
        <CreateCabinForm />
      </Modal.Window>
    </Modal>
  );
}

export default AddCabin;
