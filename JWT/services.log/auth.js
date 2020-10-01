import React, { useEffect } from 'react';
import AuthService from "./auth.service"

const Auth = () => {

    useEffect(() => {
        const user = AuthService.getCurrentUser();
    }
    return (
        <div>
            
        </div>
    );
};

export default Auth;