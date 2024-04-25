// import React from 'react'
// import { Chart } from 'react-google-charts'
// import Dashboard from './Dashboard';

// export const data = [
//     ["Year", "Sales", "Expenses"],
//     ["2013", 1000, 400],
//     ["2014", 1170, 460],
//     ["2015", 660, 1120],
//     ["2016", 1030, 540],
// ];

// export const options = {
//     title: "Company Performance",
//     hAxis: { title: "Year", titleTextStyle: { color: "#333" } },
//     vAxis: { minValue: 0 },
//     chartArea: { width: "50%", height: "50%" },
// };
// function Hom() {

//     return (
//         <>
//             <Dashboard >
//             <div className='row fixed-top' style={{ marginLeft: '300px', marginTop: '100px' }}>
//                 <div className='' style={{ width: '250px' }}>
//                     <div class="card text-white mb-3" style={{backgroundColor:'#F29F67'}}>
//                         <div class="card-header"><h4>Total Employee</h4></div>
//                         <div class="card-body">
//                             <h4 class="cart-title"><i class="bi bi-person-standing">1000</i></h4>
//                         </div>
//                     </div>
//                 </div>

//                 <div className='' style={{ width: '250px' }}>
//                     <div class="card text-white mb-3" style={{backgroundColor:'#34b1AA'}}>
//                         <div class="card-header"><h4>Total Revenue</h4></div>
//                         <div class="card-body">
//                             <h4 class="cart-title"><i class="bi bi-currency-dollar">50000</i></h4>
//                         </div>
//                     </div>
//                 </div>

//                 <div className='' style={{ width: '250px' }}>
//                     <div class="card text-white mb-3" style={{backgroundColor:'#9E58FF'}}>
//                         <div class="card-header"><h4>Total Sales</h4></div>
//                         <div class="card-body">
//                             <h4 class="cart-title"><i class="bi bi-database-fill-slash"> 4000</i></h4>
//                         </div>
//                     </div>
//                 </div>

//                 <div className='' style={{ width: '250px' }}>
//                     <div class="card text-white mb-3" style={{backgroundColor:'#AF1763'}}>
//                         <div class="card-header"><h4>Total Ammount</h4></div>
//                         <div class="card-body">
//                             <h4 class="cart-title"><i class="bi bi-currency-rupee">880000</i></h4>
//                         </div>
//                     </div>
//                 </div>

//                 <div className='row fixed-top'>
//                     <div className='col-8'>
//                         <div className='d-flex' style={{ marginTop: '240px', marginLeft: '210px', display: 'flex', width:'700px'}}>
//                             <Chart
//                                 chartType="AreaChart"
//                                 width="100%"
//                                 height="400px"
//                                 data={data}
//                                 options={options}
//                             />
//                         </div>
//                     </div>

//                     <div className='col-3'>
//                         <table class="table" style={{ marginTop: '290px', height:'230px' }}>
//                             <thead>
//                                 <tr>
//                                     <th scope='col'>#</th>
//                                     <th scope='col'>First</th>
//                                     <th scope='col'>Last</th>
//                                     <th scope='col'>Handle</th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 <tr>
//                                     <th scope='row'>1</th>
//                                     <td>Mark</td>
//                                     <td>Otto</td>
//                                     <td>@mdo</td>
//                                 </tr>
//                                 <tr>
//                                     <th scope='row'>2</th>
//                                     <td>Jacob</td>
//                                     <td>Thornton</td>
//                                     <td>@fat</td>
//                                 </tr>
//                                 <tr>
//                                     <th scope='row'>3</th>
//                                     <td>jonson</td>
//                                     <td>Thornton</td>
//                                     <td>@mat</td>
//                                 </tr>
//                             </tbody>
//                         </table>
//                     </div>

//                 </div>

//             </div>
//             </Dashboard>
//         </>
//     )
// }

// export default Hom


import React from 'react';
import Table from 'react-bootstrap/Table';
import { Chart } from "react-google-charts";
import Card from 'react-bootstrap/Card';
import Dashboard from './Dashboard';
//import './Home.css'


export const data = [
  ["Year", "Sales", "Expenses"],
  ["2013", 1000, 400],
  ["2014", 1170, 460],
  ["2015", 660, 1120],
  ["2016", 1030, 540]
];

export const options = {
  isStacked: "relative",
  height: 300,
  legend: { position: "top", maxLines: 3 },
  vAxis: {
    minValue: 0,
    ticks: [0, 0.3, 0.6, 0.9, 1],
  },
};

function Hom() {
  return (
    <>
    <Dashboard>
    <div style={{width:'1100px'}}>
     
      <div style={{display:'flex', marginTop:'70px', marginRight:'0px'}}>

      <Card style={{ width: '250px', marginLeft:'50px', height:'130px', backgroundColor:'#FE9496', color:'white'}}>
        <Card.Header><h4>Total Employee</h4></Card.Header>
        <Card.Body>
          <Card.Title><i class="bi bi-person-standing">1000</i></Card.Title>
          <Card.Text>
          
          </Card.Text>
        </Card.Body>
      </Card>
      <br />

     
      <Card style={{ width: '250px', marginLeft:'40px', height:'130px', backgroundColor:'#1BCFB4', color:'white'}}>
        <Card.Header><h4>Total Revenue</h4></Card.Header>
        <Card.Body>
          <Card.Title><i class="bi bi-currency-dollar">4500</i></Card.Title>
        </Card.Body>
      </Card>
      <br />
      <Card style={{ width: '250px', marginLeft:'40px', height:'130px', backgroundColor:'#4BCBEB', color:'white'}}>
        <Card.Header><h4>Total Sales</h4></Card.Header>
        <Card.Body>
          <Card.Title><i class="bi bi-bag-fill"> 900</i></Card.Title>
        </Card.Body>
      </Card>

      <Card style={{ width: '250px', marginLeft:'40px', height:'130px', backgroundColor:'#A05AFF', color:'white'}}>
        <Card.Header><h4>Total Ammount</h4></Card.Header>
        <Card.Body>
          <Card.Title><i class="bi bi-currency-rupee">980000</i></Card.Title>
        </Card.Body>
      </Card>
      <br /> 
      </div>

      <div style={{display:'flex'}}>  
    <div style={{width:'600px', marginTop:'50px'}}>
    <Chart
      chartType="AreaChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
    </div>

    <div style={{marginTop:'110px', width:'500px'}}>
    <Table >
      <thead >
        <tr>
          <th style={{backgroundColor:'black', color:'white'}}>Id</th>
          <th style={{backgroundColor:'black', color:'white'}}>Full Name</th>
          <th style={{backgroundColor:'black', color:'white'}}>Email</th>
          <th style={{backgroundColor:'black', color:'white'}}>Mobile No</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Romel Verma</td>
          <td>romel@gmail.com</td>
          <td>7382739273</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Manish Kumar</td>
          <td>manish@gmail.com</td>
          <td>8783623423</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Rahul Mali</td>
          <td>rahul@gmail.com</td>
          <td>8783646721</td>
        </tr>
      </tbody>
    </Table>

    </div>

      </div> 
    </div>
    </Dashboard>
    </>
  )
}

export default Hom







