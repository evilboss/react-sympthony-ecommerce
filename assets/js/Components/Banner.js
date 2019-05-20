import React from 'react';
import {Parallax, Background} from 'react-parallax';
import vegetableBanner from '../../images/fresh-vege-banner.jpg';


const Banner = () => (
    <Parallax
        style={{width: '100%'}}
        bgImage={vegetableBanner}
        bgImageAlt="the cat"
        strength={500}
    >
        <div style={{
            textAlign: "center", position: 'relative',
            left: '1em',
            top: '15em',
            background: '#0080804d',
            color: 'white'
        }} className="text-center"><h1>Vegetable Online shop</h1></div>

        <div style={{height: '500px', width: '100%'}}/>
    </Parallax>




);

export default Banner;
