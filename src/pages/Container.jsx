import React from 'react';

const Container = ({children}) => {
    return (
        <div className="max-w-screen-xl mx-6 md:mx-14  ">
            {children}
        </div>
    );
};

export default Container;