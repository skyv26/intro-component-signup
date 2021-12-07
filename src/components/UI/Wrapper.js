import React from 'react';

const Wrapper = (props) => {
    return (
        <div className={props.Style}>
            {props.children}
        </div>
    );
}

export default Wrapper;