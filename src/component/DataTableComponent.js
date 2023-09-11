// DataTable.js
import React, { useRef } from 'react';

import { useTable } from 'react-table';
import { Document, Page,Text, pdfjs } from 'react-pdf';
import '../style/DataTable.css';


pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const DataTableComponent = ({ data, columns }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  });

  const pdfRef = useRef();
  
  return (
    <div>
      <div>
      <button
          onClick={() => {
           
            pdfRef.current.toBlob((blob) => {
              const url = URL.createObjectURL(blob);
              window.open(url);
            });
          }}
        >
          Download PDF
        </button>
      </div>
    <table {...getTableProps()} className="table">
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return (
                  <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
    <div style={{ display: 'none' }}>
    <Document
  file=""
  onLoadSuccess={() => {
    // Ensure that the PDF is loaded with the correct data before rendering
    pdfRef.current.updateContainer();
  }}
  ref={pdfRef}
>
  <Page size="A4">
    {/* Your PDF content */}
    <Text>Hello, this is a PDF!</Text>
  </Page>
</Document>
      </div>
    </div>
  );
};

export default DataTableComponent;
