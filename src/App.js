import React, { useState } from 'react';
import { Navbar, Container, Row, Col, Table } from 'react-bootstrap'

import  {employeeData}  from "./resources/data.js"
import EmployeeTable from './components/EmployeeTable'

function App() {

  const [ tableData, setTableData ] = useState(employeeData)
  const [ sortDesc, setSortDesc ] = useState(false)
  const [ search, setSearch ] = useState("")

  const handleAgeSort = () => {
    const newState = [...tableData]

    if (sortDesc) {
      function compareA( a, b ) {
        console.log('comparing');
        if ( a.age < b.age ){
          return -1;
        }
        if ( a.age > b.age ){
          return 1;
        }
        return 0;
      }
      newState.sort( compareA )
      setSortDesc(!sortDesc)

    } else {
      function compareB( a, b ) {
        console.log('comparing');
        if ( a.age > b.age ){
          return -1;
        }
        if ( a.age < b.age ){
          return 1;
        }
        return 0;
      }
      newState.sort( compareB )
      setSortDesc(!sortDesc)
    }




    setTableData(newState)
  }

  const handleSearch = event => {
    setSearch(event.target.value)
  }

  return (
    <>
      <Navbar>
        <Navbar.Brand >Company</Navbar.Brand>
      </Navbar>
      <Container>
        < input type="text" value={search} onChange={handleSearch} />
        < EmployeeTable search={search} employeeData={tableData} handleAgeSort={handleAgeSort}/>
      </Container>
    </>
  );
}

export default App;
