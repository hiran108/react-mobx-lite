import React from 'react';
import userDTO from '../../types/userDTO';
import { rootData} from '../../hook';

//export const storeContext = React.createContext<TStore|null>(null);
//const storeContext = React.createContext<TStore | null | userDTO[]>(users);


export const UserView : React.FC<userDTO> = (user) => {
    let {name, count} = rootData(store => ({name: store.company, count:store.count}));
    //const store = React.useContext(storeContext);
    
    return <div>name is {user.name}. test is {name} and count {count} <button onClick={e=>{count++}}>change</button></div>;

}



 export default UserView;