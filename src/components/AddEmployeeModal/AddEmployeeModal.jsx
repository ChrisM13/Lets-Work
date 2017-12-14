import React from 'react';
import {Modal, Button} from 'react-materialize';
import AddNewEmployeeForm from '../../components/AddNewEmployeeForm/AddNewEmployeeForm';


const AddEmployeeModal = (props) => {
    console.log("ADDEMPLOYEEMODAL",props)
    return(
        <Modal
            header='Add New Employee'
            fixedFooter
            trigger={<Button>Add Employee</Button>}>
            <AddNewEmployeeForm
                handleAddEmployee={props.handleAddEmployee}
            />
        </Modal>
    )
}

export default AddEmployeeModal