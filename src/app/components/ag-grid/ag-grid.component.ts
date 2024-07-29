import { Component } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import productsData from '../../../../public/assest/data/product-data.json';

@Component({
  selector: 'app-ag-grid',
  template: `
    <ag-grid-angular
      style="height: 100%; width: 100%"
      class="ag-theme-alpine-dark ag-theme-ix"
      [columnDefs]="columnDefs"
      [rowData]="rowData"
      rowSelection="multiple"
      suppressCellFocus
      checkboxSelection
    ></ag-grid-angular>
  `,
})
export class AgGridComponent {
  columnDefs: ColDef[] = [
    { field: 'name', headerName: 'Product Name', resizable: true, sortable: true, filter: true },
    { field: 'category', headerName: 'Category', resizable: true, sortable: true, filter: true },
    { field: 'price', headerName: 'Price', resizable: true, sortable: true, filter: true },
    { field: 'rating', headerName: 'Rating', resizable: true, sortable: true, filter: true },
    { field: 'reviews', headerName: 'Reviews', resizable: true, sortable: true, filter: true },
    { field: 'in_stock', headerName: 'In Stock', resizable: true, sortable: true, filter: true },
  ];

  rowData = productsData;
}
