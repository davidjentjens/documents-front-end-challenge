/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-lone-blocks */
/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';

import { noop } from '@babel/types';
import PropTypes from 'prop-types';
import { Button, Table as ReactstrapTable } from 'reactstrap';
import './index.css';

// Example of use

{
  /* <Table
    header={[
        {
            title: "A",
            column: "a",
        }
    ]}
    rows={[
        {
            a: "Example1"
        }, {
            a: "Example2"
        }, {
            a: "Example3"
        }, {
            a: "Example4"
        }, {
            a: "Example5"
            onClick: () => alert(`item ${5} clicked!`)
        }, {
            a: "Example6"
        },
    ]}
    itemsPerPage={3}
/> */
}

interface TableProps {
  header: any[];
  rows: any[];
  itemsPerPage: number;
}

const Table: React.FC<TableProps> = ({ header, rows, itemsPerPage }) => {
  const [page, setPage] = useState(1);

  const totalItems = rows.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handleNextPageButton = (): void => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  const handlePreviousPageButton = (): void => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  let rowsToRender;
  if (itemsPerPage) {
    rowsToRender = rows.slice(
      (page - 1) * itemsPerPage,
      (page - 1) * itemsPerPage + itemsPerPage,
    );
  } else {
    rowsToRender = rows;
  }

  return (
    <div>
      <ReactstrapTable hover>
        <thead>
          <tr>
            {header.map((h, index) => (
              <th key={`header-${index}`}>{h.title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rowsToRender.map((row, rowIndex) => (
            <tr key={`row-${rowIndex}`} onClick={row.onClick || noop}>
              {header.map((h, headerIndex) => (
                <td key={`data-${headerIndex}`}>{row[h.column]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </ReactstrapTable>
      {itemsPerPage && (
        <div className="table-pagination">
          <Button onClick={handlePreviousPageButton} disabled={page === 1}>
            Anterior
          </Button>
          <div className="table-pagination--page-display">
            {page} / {totalPages}
          </div>
          <Button onClick={handleNextPageButton} disabled={page >= totalPages}>
            Próxima
          </Button>
        </div>
      )}
    </div>
  );
};

Table.propTypes = {
  rows: PropTypes.array.isRequired,
  header: PropTypes.array.isRequired,
};

export default Table;
