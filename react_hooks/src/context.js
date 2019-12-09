import React, {useState} from 'react';

export const AuthContext = React.createContext({
    isAuth:false,
    login:() => {}
});

export const AuthContextProvider = (props) => {

    const [isAuth, setAuth] = useState(false);

    const login = () => {
        setAuth(true)
    }

    return (
        <AuthContext.Provider value={{isAuth, login}}>
            {props.children}
        </AuthContext.Provider>
    )
}