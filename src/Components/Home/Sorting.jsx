import React from "react";
import Form from "react-bootstrap/Form";

const Sorting = ({ setSort }) => {
  return (
    <div className='sorts'>
      <Form.Select
        style={{ width: "105px" }}
        onChange={(e) => setSort(e.target.value)}
      >
        <option disabled value=''>
          SEÇİNİZ
        </option>
        <option value='inc'>Artan</option>
        <option value='dec'>Azalan</option>
      </Form.Select>
    </div>
  );
};

export default Sorting;
