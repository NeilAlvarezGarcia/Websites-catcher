import React, { useEffect, useCallback } from 'react'
import { useContextApi } from '../customHooks/useContextApi';
import { showDataFirestore } from '../firebase';
import ListItem from './ListItem';

const Links = () => {
    const {data, setData} = useContextApi();
    
    const getData = useCallback(async () => {
        const dataResult = await  showDataFirestore();
  
        setData(dataResult);
    }, [setData]);
    
    useEffect(() => {

        getData();
    }, [data, getData]);
    

    if(!data.length) return null;

    return (
        <div className='my-4'>
            <h2>Web sites saved</h2>
            
            <ul className='list-unstyled'>
                {data.map(element => (
                    <ListItem key={element.id} element={element}/>
                ))}
            </ul>
        </div>
    )
}

export default Links
