const baseUrl = 'https://localhost:33333/api/Account/';
export default class AccountController{
    static async login(email, password){
        const response = await fetch(baseUrl + 'login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password })
        });
        return response.json();
    }
    static async register(email, password,firstName,lastName){
        const response = await fetch(baseUrl+'register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password,firstName,lastName }),
        });
        return await response.json();
    }
    static async logout(){
        localStorage.removeItem('token');
    }
    static async googleLogin(googleToken){
        console.log(googleToken);
        const response = await fetch(baseUrl+'login/google', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({googleToken}),
            withCredentials: true,
        });
        return await response.json();
    }
}