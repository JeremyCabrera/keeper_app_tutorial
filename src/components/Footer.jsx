import React from "react";

function Footer() {

    const currentYear = new Date().getFullYear();

    return <footer>

   <p>
    Copyright ©Keeper App Tutorial {currentYear}
    </p>
    </footer>
    
}




export default Footer;