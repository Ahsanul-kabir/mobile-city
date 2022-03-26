import React from 'react';

const Footer = () => {
    return (
        <div className="card">
            <div className="card-header text-center fw-bold">
                <h1>My Questions</h1>
            </div>
            <div className="card-body">
                <h1 className="card-title">How React works?</h1>
                <p className="card-text">
                    <mark>Answer:</mark>
                    <p>We know that React is a JavaScript library. We can use it to help build SPA and mobile apps. Now I would like to describe how, Most commonly  React work for-</p>
                    <p>1. React makes it easier to create dynamic web applications because it requires less coding and offers more functionality and reliability.</p> <p>2. React uses Virtual DOM, thereby creating web applications faster. Virtual DOM compares the components  previous states and updates only <br /> the items in the Real DOM that were changed, instead of updating all of the components again.</p> <p>3.Components are the building blocks of any React application, and a single app usually consists of multiple components. These components can be reused. </p><p>4. React is easy to learn, as it mostly combines basic HTML and JavaScript concepts </p>
                </p>

                <h1 className="card-title">Difference Between Props and State?</h1>
                <p className="card-text">
                    <p><mark>Answer:</mark></p>
                    <p>Now I would like to describe the difference between props and state-</p>
                    <h3>Props: </h3> <p>1. Props are Read only</p>
                    <p>2. Props can not be changed.</p>
                    <p>3. props are used by a component to get data from another component.</p>
                    <p>4. Props can be used in both functional and className components</p>

                    <h3>State: </h3> <p>1. State changes can be asynchronous. </p>
                    <p>2. State can be changed</p>
                    <p>3. states are used to manage data changes inside the component</p>
                    <p>4. State can only be used in className components</p>
                </p>

            </div>
        </div>
    );
};

export default Footer;