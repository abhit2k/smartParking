import React from 'react';
import './DropDown.scss'

function DropDown(props){

    const [items] = React.useState(props.options);
      return (
        <select>
          {items.map(item => (
            <option
              key={item.value}
              value={item.value}
            >
              {item.label}
            </option>
          ))}
        </select>
      );
}

export default DropDown;