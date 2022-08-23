import Layout from "./components/Layout/Layout";
import ProductItems from "./components/Shop/Products";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Layout>
        <ProductItems />
      </Layout>
    </div>
  );
}

export default App;
