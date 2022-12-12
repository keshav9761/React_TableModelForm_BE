import axios from "axios";
import React, { useState, useEffect } from "react";
import { Modal, Button, ModalHeader, ModalFooter, ModalBody, Input } from 'reactstrap'

export function Model(props) {
  const [modal, setModal] = useState(false);
  const [modalData, setModalData] = useState(null); //why null

  useEffect(() => {
    if (!props?.openModel) return;
    setModalData(props?.openModel)
    setModal(true); 
    // toggle();
  }, [props?.openModel])

  const modalInputHandle = (e) => {
    e.preventDefault();
    setModalData((pre) => ({ ...pre, [e.target.name]: e.target.value }))
  }

  const Save = async () => {
    const edit = await axios.patch(`http://localhost:5000/editbecholer`, modalData)
    toggle();
    props?.refresh()
    console.log(edit?.data)
  }
  const toggle = () => setModal(!modal);
  return (
    <div>
      <Modal isOpen={modal} toggle={toggle} >
        <ModalHeader toggle={toggle}>Kunddli Detail</ModalHeader>
        <ModalBody>
          <Input type="text" placeholder="M-name"
            name="Mname"
            value={modalData?.Mname}
            onChange={modalInputHandle} /> <br />
          <Input type="text" placeholder="M-Age"
            name="Mage"
            value={modalData?.Mage}
            onChange={modalInputHandle} /> <br />
          <Input type="text" placeholder="M-qualification"
            name="Mqualifiction"
            value={modalData?.Mqualifiction}
            onChange={modalInputHandle} /> <br />
          <Input type="text" placeholder="M-fatherName"
            name="Mfathername"
            value={modalData?.Mfathername}
            onChange={modalInputHandle} /> <br />
          <Input type="text" placeholder="F-name"
            name="Fname"
            value={modalData?.Fname}
            onChange={modalInputHandle} /> <br />
          <Input type="text" placeholder="F-age"
            name="Fage"
            value={modalData?.Fage}
            onChange={modalInputHandle} /> <br />
          <Input type="text" placeholder="F-qualification"
            name="Fqualificaton"
            value={modalData?.Fqualificaton}
            onChange={modalInputHandle} /> <br />
          <Input type="text" placeholder="F-fatherName"
            name="Ffathername"
            value={modalData?.Ffathername}
            onChange={modalInputHandle} /> <br />
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={Save}>
            Save
          </Button>
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}


