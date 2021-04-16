import React from 'react'

export const Footer = () => {
    let footerstyles = {
        // position: "absolute"
    }
    return (
        <footer className="bg-dark text-light py-2" style={footerstyles}>
            <p className="text-center">
            Copyright &copy; Priyanshi Khetwani 2021
            </p>
        </footer>
    );
}
