import React, { Component } from 'react';

import imagesLoaded from 'imagesloaded';
import Slideshow from './slider.js';

import './base.css';

class Slider extends Component {

  componentDidMount() {
    new Slideshow(document.querySelector('.slideshow'));
    imagesLoaded('.slide__img', { background: true }, () => document.body.classList.remove('loading'));
  }

  render() {
    const { slides } = this.props;

    return (
      <div className="demo-6 loading">
        <div className="slideshow">
          <div className="slides slides--images">
          { slides.map( slide => 
            <div key={slide.id} className={`slide ${slides[0].id === slide.id && ' slide--current'} `}>
              <div className="slide__img" style={{ backgroundImage: `url(${slide.image})` }}></div>
            </div>)}

          </div>
          <div className="slides slides--titles">
            { slides.map( slide => 
            <div key={slide.id} className={`slide ${slides[0].id === slide.id && ' slide--current'} `}>
              <h2 className="slide__title">{ slide.title }</h2>
            </div> )}
          </div>
          <nav className="slidenav">
            <button className="slidenav__item slidenav__item--prev">Previous</button>
            <span>/</span>
            <button className="slidenav__item slidenav__item--next">Next</button>
          </nav>
        </div>
      </div>
    );
  }
}

export default Slider;
