import React from 'react'
import '../style/main.scss';

const Acquaintion = props => {
    return (
        <div className='container'>
            <div className='acquaintion'>
                <h1>Let's get acquainted</h1>
                <img src={require('../assets/man-laptop-v1.svg')} alt='man with laptop'></img>
                <div className='textBlock'>
                    <h2>I am cool frontend developer</h2>
                    <p>
                        We will evaluate how clean your approach to writing CSS and Javascript code is.
                        You can use any CSS and Javascript 3rd party libraries without any restriction.
                    </p>
                    <p>
                        If 3rd party css/javascript libraries are added to the project via bower/npm/yarn you
                        will get bonus points. If you use any task runner (gulp/webpack) you will get bonus points
                        as well. Slice service directory page P​SD mockup​ into HTML5/CSS3.
                    </p>
                    <a className='flatButton' href='/flatBtn'>Sign up now</a>
                </div>
            </div>
        </div>
    )
}
export default Acquaintion