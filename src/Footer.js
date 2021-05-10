import React, { useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'


const Footer = (props) => {

    return (
       <footer className="mt-auto navbar">
       <div className="container allfont">
       <a className="text-decoration-none text-light" href="https://github.com/cedar-waxwing">
       © Rachel Ehlers, 2021
       </a>
       </div>
       </footer>
        );
    }
    
    
    export default Footer;