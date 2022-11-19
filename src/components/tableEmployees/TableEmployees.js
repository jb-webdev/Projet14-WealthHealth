import React, { useMemo } from 'react'
import './tableEmployees.css'
import { useSelector } from 'react-redux'

import { useTable, useGlobalFilter, usePagination } from 'react-table'
import { COLUMNS } from './utilsTable/columns.js'
import { GlobalFilter } from './utilsTable/GlobalFilter.js'


export default function TableEmployees() {
    // on import la liste des employees du store => ok
    // mettre en place le filtre du tableau
    // mettre en place la pagination
    // === TODO ======
    // bug format enregistrement date

    const employeesListStore = useSelector((state) => state.StoreState.employeesList)

    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => employeesListStore, [])


    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        nextPage,
        previousPage,
        canNextPage, 
        canPreviousPage,
        pageOptions,
        gotoPage, 
        pageCount,
        setPageSize,
        state,
        prepareRow,
        setGlobalFilter,
    } = useTable(
        {
            columns,
            data,
            initialState: { pageIndex : 0 }
        }, 
        useGlobalFilter, 
        usePagination
    )

    const { globalFilter, pageIndex, pageSize } = state


    return (
        <>
            <div className='wrapper-research-options'>
                <select className='selectNbrPage' value={pageSize} onChange={e => setPageSize(Number(e.target.value))}>
                    {
                        [10, 25, 50, 100].map(pageSize => (
                            <option key={pageSize} value={pageSize}>
                                Show {pageSize}
                            </option>
                        ))
                    }
                </select>

                <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
            </div>
            <table {...getTableProps()}>
                <thead >
                    {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getFooterGroupProps()}>
                            {headerGroup.headers.map((column) => (
                                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                            ))}
                        </tr>

                    ))}

                </thead>
                <tbody {...getTableBodyProps()}>

                {page.map((row) => {
                    prepareRow(row)

                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map((cell) => {
                                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                            })}
                        </tr>
                    )
                })}
            </tbody>
                

            </table>
            <div className='wrapperPaginateBottom'>
                <button className='btn-nextFullPage' onClick={() => gotoPage(0)} disabled={!canPreviousPage} >{'<<'}</button>
                <button
                    className='btn-previoustPage'
                    onClick={() => previousPage()}
                    disabled={!canPreviousPage}
                >
                    Previous
                </button>
                <div className='wrapperSpanPaginate'>
                    <p>
                        Page 
                        <strong>
                            {pageIndex + 1} of {pageOptions.length}
                        </strong> 
                    </p>
                    
                    <span>
                        <label> Go to page: </label> 
                        <input
                            type='number'
                            defaultValue={pageIndex + 1}
                            onChange={e => {
                                const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0
                                gotoPage(pageNumber)
                            }}
                            style={{ width: '50px'}}
                        />
                    </span>

                </div>
                <button
                    className='btn-nextPage'
                    onClick={() => nextPage()}
                    disabled={!canNextPage}
                >
                    Next
                </button>
                <button className='btn-PreviousFullPage ' onClick={() => gotoPage(pageCount -1)} disabled={!canNextPage} >{'>>'}</button>
            </div>
        </>
    )
}

