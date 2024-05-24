import React from 'react';

const Main = ({ children }) => {
    return (
        <main id="main" role="main" style={{ position: 'relative' }}>
            {children}
        </main>
    )
}

export default Main;