import React, { useMemo } from 'react'
import './tableEmployees.css'
import { useTable } from 'react-table'
import { COLUMNS } from './columns.js'
import { useSelector } from 'react-redux'

export default function TableEmployees () {
    // on import la liste des employees du store => ok
    // === TODO ======
    // mettre en place le filtre du tableau
    // mettre en place la pagination

    const employeesListStore = useSelector((state) => state.StoreState.employeesList)
   
     const columns = useMemo(()=> COLUMNS, [])
     const data = useMemo(()=> employeesListStore, [])


    const {
        getTableProps, 
        getTableBodyProps, 
        headerGroups,
        rows, 
        prepareRow
    } = useTable({
        columns,
        data
    })
  return (
    <table {...getTableProps()}>
        <thead >
            { headerGroups.map((headerGroup) => (
                <tr {
                    ...headerGroup.getFooterGroupProps()}>
                    {
                        headerGroup.headers.map((column)=>(
                            <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                        ))
                    }
                </tr>

            ))}

        </thead>
        <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
                prepareRow(row)
                return (
                    <tr {...row.getRowProps()}>
                        {row.cells.map((cell) => {
                            return  <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                        })} 
                    </tr>
                )
            })}
        </tbody>
        
    </table>
  )
}

