import React, { useState, useEffect } from 'react';
import Card from './Card';

function App() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/productslist");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const answer = await response.json();
        setProducts(answer.products);
        let categorytype = {}
        categories.map(function (category) {
            categorytype[category.id] = category.desc
        })
        setCategories(categorytype);
        console.table(categories)
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          Hello
          {products.map((product) => (
            <Card
              key={product.id}
              id={product.id}
              name={product.name}
              category={categories[product.category]}
              desc={product.desc}
              price={product.price}
              img={`http://127.0.0.1:8000/${product.img}`}
            ></Card>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
