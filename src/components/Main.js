import React, { useEffect, useRef } from 'react'
import CircleType from 'circletype'

const Main = () => {

    const circleBottom = useRef();

    useEffect(() => {
        new CircleType(circleBottom.current).radius(240).dir(-1)
    }, []);

    return (
        <div className="row flex-fill justify-content-center align-items-center">
            <div id="landing-wrapper" className="d-inline-block align-top">
                <img src="logo512.png" id="landing-logo" alt="" />
                <h3 ref={circleBottom} id="slogan">How well do you know your music?</h3>
            </div>
        </div>
    )
}

export default Main