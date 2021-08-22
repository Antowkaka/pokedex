import React from "react";

const Select = ({ options, onClick }) => (
    <select style={{ width: '50%', margin: '10px 0', alignSelf: 'center' }} onChange={onClick}>
        <option value=''>All</option>
        {options.map((opt, i) => <option key={i} value={opt}>{opt}</option>)}
    </select>
)

export default Select;