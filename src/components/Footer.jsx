import React from "react";

const currentDate = new Date();
const currentTime = currentDate.getFullYear();
function Footer() {
  return (
    <footer>
      <p>Copyright © {currentTime}</p>
    </footer>
  );
}

export default Footer;
