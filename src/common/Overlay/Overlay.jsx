import React from "react";

const Overlay = () => {
    const styles = {
            width: '100%',
            height: '100vh',
            backgroundColor: '#00000065',
            position: 'fixed',
            top: 0,
            bottom: 0,
            zIndex: 99,
    }
	return <div style={styles} className="overlay"></div>;
};

export default Overlay;
