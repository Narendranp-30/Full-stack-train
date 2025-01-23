import { useState } from "react"
import './Studentsearch.css'
function Studentsearch(props) {
    const rollser = (e) => {
        props.setSearch(e.target.value);
    }
    return (
    <>
            <div class="topnav">
                <div class="search-container">
                        <input type="text" placeholder="Search.." onChange={rollser} />
                </div>
            </div>
            </>
            )
}

export default Studentsearch