import React, {useContext} from 'react';
import {AuthContext} from './context';

const auth = React.memo((props) => {

    const authContext = useContext(AuthContext);

    return <button onClick={authContext.login}>Login</button>
})

export default auth;