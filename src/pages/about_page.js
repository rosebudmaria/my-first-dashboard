import React from 'react'

function AboutPage() {
    const developerName = 'Rosalinda P.'
    return (
        <div id="about_page" className="App-page">
            <h1>Our Project</h1>
            <p>
                We're creating a simple React application.
            </p>
            <h2>Team</h2>
            <p>
                Lead Developer: {developerName}
            </p>
        </div>
    )
}

export default AboutPage