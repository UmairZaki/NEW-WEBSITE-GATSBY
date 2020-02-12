import React from 'react';
import config from '../../config';
export default function SideFooter() {
  return (
    <footer>
      <ul className="items">
        {config.emailId && (
          <li>
            <h3>Email</h3>
            <p>umairzakicnbc@gmail.com</p>
          </li>
        )}
        {config.phone && (
          <li>
            <h3>Phone</h3>
            <p>03132873668</p>
          </li>
        )}
        {config.address && (
          <li>
            <h3>Address</h3>
        <dd>Plot # 1/29, 4th Floor, Flat # A7,
Block 5b, Nazimabad,
Karachi, Pakistan.</dd>
          </li>
        )}

        <li>
          <h3>Elsewhere</h3>
          <ul className="icons">
            
                <li>
                <a href="https://www.facebook.com/umair.zaki.12" target="_blank" className="icon alt fa-facebook"><span className="label">Facebook</span></a>
                </li>
                <li>
                <a href="https://stackoverflow.com/users/12326848/umairzaki" target="_blank" className="icon alt fa-stack-overflow"><span className="label">Stack Overflow</span></a>
                </li>
                <li>
                <a href="https://github.com/UmairZaki" target="_blank" className="icon alt fa-github"><span className="label">GitHub</span></a>
                </li>
                <li>
                <a href="https://www.linkedin.com/in/umair-zaki-8353a918b/" target="_blank" className="icon alt fa-linkedin"><span className="label">LinkedIn</span></a>
                </li>
                
            
          </ul>
        </li>
      </ul>
    </footer>
  );
}
