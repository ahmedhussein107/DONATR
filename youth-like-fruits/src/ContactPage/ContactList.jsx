import React from 'react';

function LinkList() {
  return (
    <ul>
      <li>
        <a href="/home">Home</a>
      </li>
      <li>
        {/* Modified the "About" link to download a PDF */}
        <a href="/dummy.pdf" download="Most_Common_Questions.pdf">
          Most Common Questions PDF
        </a>
      </li>
      <li>
        <a href="/services">Services</a>
      </li>
      <li>
        <a href="/contact">Contact</a>
      </li>
    </ul>
  );
}

export default LinkList;
