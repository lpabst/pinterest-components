import React, { Component } from 'react';
import './Pin.css';

class Pin extends Component {
    render() {
        return (
            <section className='pin_container'>

                <div className='pin_image_wrapper'>
                    <img className='pin_image' src={this.props.src} alt='pin pic' />
                    <div className='pin_upload'></div>
                    <div className='pin_save'></div>
                    <p className='pin_img_source'>{this.props.imageSource}</p>
                </div>

                <p className='pin_caption'>
                    {this.props.caption}
                </p>

            </section>
        );
    }
}


export default Pin;