import React from 'react'
import '../style/main.scss';

const Header = props => {
    return (
        <div className='header'>
            <div className='container'>
                <div className='textBlock'>
                    <h1>Test assignment for Frontend Developer position</h1>
                    <span>
                        We kindly remind you that your test assignment should be submitted
                        as a link to github/bitbucket repository. 
                    </span>
                    {/* next span will not be shown on small screens */}
                    <span>
                        Please be patient, we consider and respond to every application that meets 
                        minimum requirements. We look forward to your submission. Good luck! 
                        The photo has to scale in the banner area on the different screens
                    </span>
                </div>
                <a className='button' href='/signUpNow'>Sign up now</a>
            </div>
        </div>
    )
}
export default Header