import ListProducts from "./components/Product/Products";

const productsDescription = [
    {id: 1, productName: 'Наушники', price: 15_000, photo: '', description: '', specifications: ''},
    {id: 2, productName: 'Телефон', price: 20_000, photo: '', description: '', specifications: ''},
    {id: 3, productName: 'Планшет', price: 25_000, photo: '', description: '', specifications: ''},
    {id: 4, productName: 'Телевизор', price: 50_000, photo: '', description: '', specifications: ''},
    {id: 5, productName: 'Колонки', price: 5_000, photo: '', description: '', specifications: ''},
    {id: 6, productName: 'Монитор', price: 10_000, photo: '', description: '', specifications: ''}, 
]


function App() {
    return (
        <div className="App">
            <ListProducts products={productsDescription}/>
        </div>
    );
}

export default App;
