import React from "react";
import Datatable from "../components/datatable/datatable";
import Navbar from "../components/navbar/navbar";
import Sidebar from "../components/sidebar/sidebar";
import "./List.scss";

const List = () => {
    return (
        <div className="list">
            <Sidebar/>

            <div className="listContainer">
                <Navbar/>
                <Datatable/>
            </div>

        </div>
    )
}

export default List;