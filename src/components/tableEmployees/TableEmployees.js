import React, { useMemo } from 'react'
import { WrapperFilter, SelectPages, Table, Tr, Th, Td, WrapperPaginateBottom, BtnGoToEnd, BtnGoToStart, BtnPreviousPage, BtnNextPage, WrapperSpanPaginate, TextPaginate, SpanTextPaginate, InputPaginate, LabelPaginate, ErrorResearch } from './tableEmployeesStyles.js'
import { RiArrowUpSFill, RiArrowDownSFill } from 'react-icons/ri'
import { useSelector } from 'react-redux'

import { useTable, useGlobalFilter, usePagination, useSortBy } from 'react-table'
import { COLUMNS } from './utilsTable/columns.js'
import { GlobalFilter } from './utilsTable/GlobalFilter.js'


export default function TableEmployees() {

    const employeesListStore = useSelector((state) => state.StoreState.employeesList)

    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => employeesListStore, [employeesListStore])

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
            initialState: { pageIndex: 0 }
        },
        useGlobalFilter,
        useSortBy,
        usePagination
    )

    const { globalFilter, pageIndex, pageSize } = state

    return (
        <>
            <WrapperFilter>
                <SelectPages value={pageSize} onChange={e => setPageSize(Number(e.target.value))}>
                    {
                        [10, 25, 50, 100].map(pageSize => (
                            <option key={pageSize} value={pageSize}>
                                Show {pageSize}
                            </option>
                        ))
                    }
                </SelectPages>
                <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
            </WrapperFilter>
            <Table {...getTableProps()}>
                <thead >
                    {headerGroups.map((headerGroup) => (
                        <Tr {...headerGroup.getFooterGroupProps()}>
                            {headerGroup.headers.map((column) => (
                                <Th {...column.getHeaderProps(column.getSortByToggleProps())}>{column.render('Header')}
                                    <span>
                                        {column.isSorted ? (column.isSortedDesc ? <RiArrowDownSFill /> : <RiArrowUpSFill />) : ''}
                                    </span>
                                </Th>
                            ))}
                        </Tr>
                    ))}

                </thead>
                <tbody {...getTableBodyProps()}>
                    {page.map((row) => {
                        prepareRow(row)
                        return (
                            <Tr {...row.getRowProps()}>
                                {row.cells.map((cell) => {
                                    return <Td {...cell.getCellProps()}>{cell.render('Cell')}</Td>
                                })}
                            </Tr>
                        )
                    })}
                </tbody>
            </Table>
            {!page.length ? <ErrorResearch>Oups ! je n'ai trouvé personne !</ErrorResearch> : ""}
            <WrapperPaginateBottom>
                <BtnGoToEnd onClick={() => gotoPage(0)} disabled={!canPreviousPage} >{'<<'}</BtnGoToEnd>
                <BtnPreviousPage onClick={() => previousPage()} disabled={!canPreviousPage} >Previous</BtnPreviousPage>
                <WrapperSpanPaginate>
                    <TextPaginate>
                        Page :
                        <SpanTextPaginate>
                            {pageIndex + 1} of {pageOptions.length}
                        </SpanTextPaginate>
                    </TextPaginate>
                    <span>
                        <LabelPaginate> Go to page: </LabelPaginate>
                        <InputPaginate
                            type='number'
                            defaultValue={pageIndex + 1}
                            onChange={e => {
                                const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0
                                gotoPage(pageNumber)
                            }}
                            style={{ width: '50px' }}
                        />
                    </span>
                </WrapperSpanPaginate>
                <BtnNextPage onClick={() => nextPage()} disabled={!canNextPage} >Next</BtnNextPage>
                <BtnGoToStart onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage} >{'>>'}</BtnGoToStart>
            </WrapperPaginateBottom>
        </>
    )
}