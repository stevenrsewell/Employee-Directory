import React, { useState } from 'react'
import { Table } from 'react-bootstrap'

const EmployeeTable = ({employeeData, handleAgeSort, search}) => {

  const generateTableBody = () => {
    return employeeData.map( data => {
      return data.name.includes(search)
      ? (
        <tr key={data.name}>
          <td>{data.name}</td>
          <td>{data.position}</td>
          <td>{data.age}</td>
        </tr>
      )
      : null
    })
  }



  return  (
    <Table>
      <thead>
        <tr>
          <th>Name</th>
          <th>position</th>
          <th onClick={handleAgeSort}>Age</th>
        </tr>
      </thead>
      <tbody>
        { generateTableBody() }
      </tbody>
    </Table>
  )
}

export default EmployeeTable
