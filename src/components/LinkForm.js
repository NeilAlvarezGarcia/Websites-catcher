import React from 'react';
import {useContextApi} from '../customHooks/useContextApi';
import { toast } from 'react-toastify';
import {updateDataFirestore, saveDataFirestore } from '../firebase';


const LinkForm = () => {
    const {initForm, form, setForm, edit, setEdit} = useContextApi();

    const handleChange = e => {
        const {name, value} = e.target;
        setForm(form => (
            {
                ...form,
                [name]: value
            }
        ))
    }

    const handleSubmit = e => {
        e.preventDefault();

        if(validateForm(form)) {
            if(edit) {
                updateDataFirestore(form.id, form);
                setEdit(false);
            } else {
                saveDataFirestore(form);
            }

            setForm(initForm);

            toast(edit ? 'Data updated successfully' : 'Website added successfully', {
                type: 'success',
                autoClose: 2000
            });
        } else {
            toast('No field can be empty', {
                type: 'error',
                autoClose: 2000
            });
        }
    }

    const validateForm = obj => Object.values(obj).every(value => value !== '');

    return (
        <form className='card card-body' onSubmit={handleSubmit}>
            <div className="form-group my-2 input-group">
                <div className='group-text bg-light p-2'>
                    <i className="material-icons">insert_link</i>
                </div>
                <input type="text"  className='form-control' placeholder='http:/someurl.com' name='url' value={form.url} onChange={handleChange}/>
            </div>
            <div className="form-group my-2 input-group">
                <div className='group-text bg-light p-2'>
                    <i className="material-icons">create</i>
                </div>
                <input type="text"  className='form-control' placeholder='Web site name' name='name' value={form.name} onChange={handleChange}/>
            </div>
            <div className="form-group my-2">
                <textarea name="description" rows="3" className='form-control' placeholder='Write a description' value={form.description} onChange={handleChange} style={{resize: 'none'}}></textarea>
            </div>
            <button type='submit' className='btn btn-primary btn-block'>{edit ? 'Edit' : 'Save'}</button>
        </form>
    )
}

export default LinkForm
