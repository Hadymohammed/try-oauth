export default class OrderController{
    static async getOrders(userId)
    {
        // const response = await fetch(`/api/orders/${userId}`);
        // const data = await response.json();
        //add temp data
        const data = [
            {
                id: 1,
                date: '2021-01-01',
                total: 100,
            },
            {
                id: 2,
                date: '2021-01-02',
                total: 200,
            },
            {
                id: 3,
                date: '2021-01-03',
                total: 300,
            },
        ];
        return data;
    };
}