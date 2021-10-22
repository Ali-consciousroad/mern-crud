// save login response (user's name and token) to session storage.s
// Everything related to the browser is in window. 
// So we need to make sure that window is not undefined 
export const authenticate = (response, next) => {
    if(window !== 'undefined') {
        //console.log('authenticate', response)
        sessionStorage.setItem('token', JSON.stringify(response.data.token));
        sessionStorage.setItem('user', JSON.stringify(response.data.name));
    }
    next();
};

// Access token name from session storage
export const getToken = (response, next) => {
    if(window !== 'undefined') {
        if(sessionStorage.getItem('token')) {
            // Transform it in a JS object so our JS app can use this data
            return JSON.parse(sessionStorage.getItem('token'));
        } else {
            return false; 
        }
    }
};

// Access user from session storage
export const getUser = () => {
    if(window !== 'undefined') {
        if(sessionStorage.getItem('user')) {
            // Transform it in a JS object so our JS app can use this data
            return JSON.parse(sessionStorage.getItem('user'));
        } else {
            return false; 
        }
    }
};

// Remove token from session storage 
export const logout = next => {
    if(window !== 'undefined') {
        //console.log('authenticate', response)
        sessionStorage.removeItem('token');
        sessionStorage.setItem('user');
    }
    next();
};

