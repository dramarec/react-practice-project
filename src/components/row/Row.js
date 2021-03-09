import React from 'react';
import RowStyled from './RowStyled';

const Row = ({ left, right }) => {
    return (
        <RowStyled>
            <div className="rowLeft">{left}</div>
            <div>{right}</div>
        </RowStyled>
    );
};

export default Row;

// {/* <RowStyled className="row mb2">
//     <div className="col-md-6">{left}</div>
//     <div className="col-md-6">{right}</div>
// </RowStyled> */}
