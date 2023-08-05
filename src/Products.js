import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Products = ()=> {
    //url api
    const url = 'https://fakestoreapi.com/products';

    //buat wadah
    const [products, setProducts] = useState([]);

    //ambil data dari api
    const getDataProducts = async ()=> {

        const response = await fetch(url);
        const dataProducts = await response.json();
        //memasukkan api ke state
        setProducts(dataProducts);
    }

    //menggunakan api
    useEffect( ()=> {
        getDataProducts();
    } )

    return (
        <div className="container">
            <div className="row">
                <h1>Products</h1>
                { products.map( (product)=> {
                    return (
                        <div className="col-3">
                            <CardProducts 
                            key={product.id} 
                            title={product.title} 
                            price={product.price} 
                            category={product.category} 
                            desc={product.description} 
                            image={product.image}
                            />
                         </div> 
                      )
                    } 
                )}
            </div>
        </div>
    )
}

const CardProducts = (props)=> {
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>
            {props.desc}
            <p>$ {props.price}</p>
          </Card.Text>
          <Button variant="primary">Buy</Button>
        </Card.Body>
      </Card>
    );
  }

export default Products;