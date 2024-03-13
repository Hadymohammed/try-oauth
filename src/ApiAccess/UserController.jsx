export default class UserController {
    static async getUsers() {
        // const response = await fetch(`http://localhost:3001/users/${userId}`);
        // const data = await response.json();
        //add temp data
        const data = [
            {
                id: 1,
                username: 'user1',
            },
            {
                id: 2,
                username: 'user2',
            },
            {
                id: 3,
                username: 'user3',
            },
        ];
        return data;
    }
}