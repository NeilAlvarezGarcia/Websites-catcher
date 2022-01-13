import React from 'react';
import { deleteDataFirestore } from '../firebase';
import {toast} from 'react-toastify';
import { useContextApi } from '../customHooks/useContextApi';

const ListItem = ({element}) => {
    const {setEdit, setForm} = useContextApi();

    const deleteItem = async () => {
        toast(`${element.name} was deleted`, {
            type: 'error', 
            autoClose: 2000
        });
        await deleteDataFirestore(element.id);
    }
    const handleEdit = () => {
        setEdit(true);
        setForm(element);
    } 
    
    return (
        <li className='col-md-8 card mb-2'>
            <div className='card-header d-flex justify-content-between align-items-center'>
                <h4>{element.name}</h4>
                <div className='d-flex justify-content-between'>
                    <button type='button' className='btn btn-secundary d-flex align-items-center' onClick={handleEdit}>
                        <i className='material-icons fs-4'>create</i>
                    </button>
                    <button type='button' className='btn btn-danger d-flex align-items-center ms-2' onClick={deleteItem}>
                        <i className='material-icons fs-6'>close</i>
                    </button>
                </div>
            </div>
            <div className="card-body text-muted">
                <p>{element.description}</p>
                <a href={element.url} target='_blank' rel='noreferrer' className='btn btn-info d-inline-flex flex-row justify-content-center'>Go to website<i className='material-icons ms-2'>arrow_forward</i></a>
            </div>
        </li>
    )
}

export default ListItem
