import React, {useState, useEffect} from "react";
import { AgGridColumn, AgGridReact } from "ag-grid-react";

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';



export function CarsGrid() {

    const [rowData, setRowData] = useState();
 
    useEffect(() => {
        fetch('https://www.ag-grid.com/example-assets/row-data.json')
        .then(result => result.json())
        .then(rowData => setRowData(rowData))
    }, [])
    return (   
        <div className="ag-theme-alpine" style={{height:400, width:600}}>
            <AgGridReact
                defaultColDef={{sortable:true, filter:true}}
                pagination={true}
                rowData={rowData}
            >
                <AgGridColumn field="make" sortable={true}></AgGridColumn>
                <AgGridColumn field="model" filter={true}></AgGridColumn>
                <AgGridColumn field="price" editable={true}></AgGridColumn>
            </AgGridReact>
        </div>
    )
       
 }