import React from 'react';
import AddModal from "../modal/Modal";
import { useState } from 'react';

const AddButton = () => {

    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    return (
        <div>
            <button className="add-task" onClick={openModal}>Add new task</button>
            <AddModal
                isOpen={isOpen}
                closeModal={closeModal}

            />
        </div>
    );
};

export default AddButton;