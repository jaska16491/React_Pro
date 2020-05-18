/* eslint-disable linebreak-style */
import React from "react";
import PropTypes from "prop-types";

function TableHeader({ columnsNames, setSelectedHeader, sortUser }) {
  return (
    <thead>
      <tr>
        {columnsNames.map((c) => (
          <th onClick={() => sortUser(c)} key={c}>
            {c}
          </th>
        ))}
      </tr>
    </thead>
  );
}

export default TableHeader;

TableHeader.propTypes = {
  columnsNames: PropTypes.arrayOf(PropTypes.object).isRequired,
  setSelectedHeader: PropTypes.func.isRequired,
  sortUser: PropTypes.func.isRequired,
};
