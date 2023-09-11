// DataTable.js
import React, { useRef } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import { CSVLink } from 'react-csv';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
// import '../style/DataTable.css';

const DataTableComponent = ({ data, columns }) => {
  const pdfRef = useRef();

  const handleDownloadPDF = () => {
    const doc = new jsPDF();
    doc.autoTable({
      head: [columns.map((column) => column.Header)],
      body: data.map((item) => columns.map((column) => item[column.accessor])),
    });
    doc.save('data.pdf');
  };

  return (
    <div>
      <button>
        <CSVLink
          data={data}
          headers={columns.map((column) => ({ label: column.Header, key: column.accessor }))}
          filename="data.csv"
        >
          Download as CSV
        </CSVLink>
      </button>
      <button onClick={handleDownloadPDF}>Download as PDF</button>
      <ReactTable
        data={data}
        columns={columns}
        filterable
        sortable
        defaultSorted={[{ id: '', desc: false }]}
        className="-striped -highlight" // Add custom CSS classes
        style={{ border: '4px solid black', borderRadius: '5px' }} // Add inline styles
    />
    </div>
  );
};

export default DataTableComponent;
