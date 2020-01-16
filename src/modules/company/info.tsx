import React from 'react';

import { useObserver } from 'mobx-react-lite';
import { storeContext } from '../../default';

export const Info=()=>{
    const store = React.useContext(storeContext);
    if(!store) throw "error"

    return useObserver(()=>{
        return <button onClick={(e)=>{store.count++}}>companybutton</button>
    });

}

export default Info;