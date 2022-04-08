import React, {useState, useEffect, useMemo} from "react";
import { AgGridColumn, AgGridReact } from "ag-grid-react";

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';



export function CarsGrid() {

   const [rowData, setRowData] = useState();

   const colDefs = useMemo(()=> [
        {field: 'make'},
        {field: 'model'},
        {field: 'price', editable: 'true'},
    ],[]);

   useEffect(() => {
       fetch('https://www.ag-grid.com/example-assets/row-data.json')
       .then(result => result.json())
       .then(rowData => setRowData(rowData))
   },[])

   return (  
       <div className="ag-theme-alpine" style={{height:400, width:600, margin:100}}>
          <AgGridReact
               defaultColDef = {{sortable: true, filter: true }}
               pagination = {true}
               rowData = {rowData}
               columnDefs = {colDefs}>
          </AgGridReact>       
       </div>
   )
     
}