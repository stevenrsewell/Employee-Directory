import React, { useState } from 'react';
import { Navbar, Container, Row, Col, Table } from 'react-bootstrap'

import  {employeeData}  from "./resources/data.js"
import EmployeeTable from './components/EmployeeTable'

function App() {

  const [ tableData, setTableData ] = useState(employeeData)

  const handleAgeSort = () => {
    console.log('start sorting');
    function compare( a, b ) {
      console.log('comparing');
      if ( a.age < b.age ){
        return -1;
      }
      if ( a.age > b.age ){
        return 1;
      }
      return 0;
    }
    const newState = tableData
    console.log(newState);
    newState.sort( compare )
    console.log('state after sort', newState);
    setTableData(newState)
  }

  const funstuff = () => {
    return tableData.map((data) => {
      return (
        <div>
          { data.age }
        </div>
      )
    })
  }

  return (
    <>
      <Navbar>
        <Navbar.Brand >Company</Navbar.Brand>
      </Navbar>
      <Container>
        < EmployeeTable employeeData={tableData} handleAgeSort={handleAgeSort}/>
        { funstuff() }
      </Container>
    </>
  );
}

export default App;
