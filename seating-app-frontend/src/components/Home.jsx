import React, { useState, useEffect } from 'react';
import "../styles/Home.css";
import college1 from "../images/college1.jpg";
import college2 from "../images/college2.jpg";
import college3 from "../images/college3.jpg";

export default function Home() {
    const [currentImage, setCurrentImage] = useState(college1); // Initial image

    useEffect(() => {
        const images = [college1, college2, college3]; // Array of images

        const interval = setInterval(() => {
            // Get the index of the next image
            const nextIndex = (images.indexOf(currentImage) + 1) % images.length;
            setCurrentImage(images[nextIndex]); // Update current image
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, [currentImage]); // Depend on currentImage only

    return (
        <div className='Home'>
            <div className='Home-container'>
                <img src={currentImage} alt="" style={{ width: '90%', height: '80%', objectFit: 'cover' }} />
            </div>
        </div>
    );
}
