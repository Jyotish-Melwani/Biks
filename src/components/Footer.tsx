import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-200 text-gray-600 p-4">
      <div className="container mx-auto text-center">
        <p>&copy; 2023 Jyotish Melwani. All rights reserved.</p>
        <ul className="flex justify-center mt-2">
          <li className="mr-4">
            <a href="https://www.linkedin.com/in/jyotishmelwani" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin fa-lg" />
            </a>
          </li>
          <li className="mr-4">
            <a href="https://github.com/jyotishmelwani" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github fa-lg" />
            </a>
          </li>
          <li>
            <a href="mailto:jyotishmelwani@email.com">
              <i className="fas fa-envelope fa-lg" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;