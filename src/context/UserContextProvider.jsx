import UserContext from "./UserContext";
import React from 'react'

const UserContaxtProvider=({children})=>{
    const [user,setUser]=React.useState(null)
    return(
        <UserContext.Provider value={{user,setUser}}>
        {children}
        
        </ UserContext.Provider>
    )

}

export default UserContaxtProvider;