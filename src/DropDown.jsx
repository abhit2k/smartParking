import React from 'react';

function DropDown(props){


    const dropStyle = {
        marginRight:'10px',
        fontSize:18,
        fontWeight:500,
        marginTop:'8px',
        width:'250px'
    }

    const [items] = React.useState(props.options);
      return (
        <select style={dropStyle}>
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