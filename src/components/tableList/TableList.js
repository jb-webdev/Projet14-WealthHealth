import React from 'react'
import './tableList.css'
import FilterTable from './filterTable/FilterTable.js'
import Table from './table/Table.js'

export default function TableList() {
    return (
        <section className='sectionTable'>
            <FilterTable />
            <Table />
        </section>
    )
}
