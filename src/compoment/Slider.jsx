import React from 'react'

export default function Slider() {
    return (
        <div className="carousel h-72 w-full ">
            <div id="slide1"   className="  carousel-item relative   w-full">
                <img   src="https://i.ibb.co.com/VYx2vhn8/online-marketing-branding-concept-laptop-screen.jpg" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="  carousel-item relative w-full">
                <img  src="https://i.ibb.co.com/352h2FHq/online-marketing.jpg" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="  carousel-item relative w-full">
                <img  src="https://i.ibb.co.com/pvKzgZyR/hand-arrange-white-letters-brand.jpg" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className=" carousel-item relative w-full">
                <img src="https://i.ibb.co.com/sdQS3mXd/brand-branding-advertising-commercial-marketing-concept.jpg" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    )
}
