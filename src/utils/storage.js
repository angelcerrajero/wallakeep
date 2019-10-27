export const setUser = user =>{
    localStorage.setItem('userData', JSON.stringify(user));
}

export const getUser = () => {
    const user = localStorage.getItem('userData');
    return JSON.parse(user);
}