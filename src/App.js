import AddProduct from './components/AddProduct';
import ProductList from './components/ProductList';

function App() {
  return (
    <div className="App">
      <h1>Каталог продуктов</h1>
      <AddProduct />
      <ProductList />
    </div>
  );
}

export default App;
