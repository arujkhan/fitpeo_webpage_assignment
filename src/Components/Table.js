import React from 'react';
import '../CSS/Table.css';
import product1 from '../Images/product1.png';
import product2 from '../Images/product2.png';

 function Table() {
  return (
    <div className='table-container'>
        <header class='title'>Product Sale</header>
       
    <table>
      <thead>
        <tr>
            <th></th>
        <th width={50} ></th>
          <th></th>
          <th></th>
          <th></th>
        </tr>
        <tr>
            
            <th colSpan={7}>
                Product Name
            </th><th></th>
        <th>Stock</th>
          <th>Price</th>
          <th>Total Sales</th>
        </tr>
      </thead>
      <tbody>
        <tr>
            <td><img src={product1}></img></td>
          <td colSpan={7}><b>Abstract 3D</b><br/>Good design is good business.</td>
          <td>32 in stock</td>
          <td>$ 45.99</td>
          <td>30</td>
        </tr>
     
        <tr>
            <td><img src={product2}></img></td>
          <td colSpan={7}><b>Sarphens Illustrations</b><br/>Good design is good business.</td>
          <td>32 in stock</td>
          <td>$ 45.99</td>
          <td>30</td>
        </tr>
     
        {/* Add more rows as needed */}
      </tbody>
    </table>
    </div>
  );
}

export default Table;
