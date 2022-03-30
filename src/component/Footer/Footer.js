import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
           <div>
           <h2>How React Works?</h2>
            <p>The response uses a declarative illustration that makes it easier to reason about the application and its goal can be both efficient and flexible. It designs a general view for each state of the application and will efficiently update and render efficiently when data changes.</p>
           </div>
           <div>
               <h2>props vs state difference?</h2>
               <p>React props are short for React Properties. They serve the purpose of transmitting data from one element to another. State is another React object that allows different components to manage and develop their own data. That is to say, Props pass data among components and State or setState helps them create data.
            </p>
           </div>
           <div>
               <h2>how usestate works?</h2>
               <p>useState is a hook that allows state variables to be placed on functional elements. The function passes the initial state and provides a variable with the current state value (not the initial state) and another function to update this value.</p>
           </div>
        </div>
    );
};

export default Footer;