import React, { useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'


const Footer = (props) => {

    return (
       <footer className="footer mt-auto navbar align-text-bottom footer py-3">
       <div className="container allfont mt-auto navbar align-text-bottom footer py-3">
       <a className="text-decoration-none text-light mt-auto navbar align-text-bottom footer py-3" href="https://github.com/cedar-waxwing">
       © Rachel Ehlers, 2021
       </a>
       </div>
       </footer>
        );
    }
    
    
    export default Footer;