import React, {useState, useContext, createContext} from 'react';

const ContextApp = createContext();
const initForm = {
    url: '',
    name: '',
    description: ''
}

const ContextApi = ({children}) => {
    const [form, setForm] = useState(initForm);
    const [edit, setEdit] = useState(false);


    const state = {
        initForm,
        form, setForm, 
        edit, setEdit
    }

    return (
        <ContextApp.Provider value={state}>
            {children}
        </ContextApp.Provider>
    )
}

const useContextApi = () => {
    const context = useContext(ContextApp);
    return context;
}

export {ContextApi, useContextApi};
