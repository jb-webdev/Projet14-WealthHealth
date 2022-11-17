import React from 'react'
import './filterTable.css'
import { FaSearch } from 'react-icons/fa'

export default function FilterTable() {
    return (
        <section className='filterTable-section'>

            <form className="filterTable-formSelectPage" action="/">
                <label className='filterTable-label' htmlFor="page">Nbr par page</label>
                <select className='filterTable-select' name="page" id="page" >
                    <option>10</option>
                    <option>25</option>
                    <option>50</option>
                    <option>100</option>
                </select>
            </form>
            
            <form className="filterTable-research" action="/">
                <input className="filterTable-research-input" type="text" placeholder="Search.." name="search" />
                <button className='filterTable-btn' type="submit"><FaSearch /></button>
            </form>

        </section>
    )
}
