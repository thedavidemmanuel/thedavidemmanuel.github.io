import React, { useEffect, useRef } from 'react'
import david from '../images/david.png'
import '../styles/home.css'

const Home = () => {
  const typingTextRef = useRef(null);

  useEffect(() => {
    const texts = ["Software Engineer.", "Full Stack Developer.", "Machine Learning Enthusiast.", "Data Scientist."];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    const type = () => {
      const currentText = texts[textIndex];
      if (isDeleting) {
        typingTextRef.current.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
      } else {
        typingTextRef.current.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
      }

      if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true;
        setTimeout(type, 1500); // Wait before starting to delete
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        setTimeout(type, 500); // Wait before typing next text
      } else {
        setTimeout(type, isDeleting ? 50 : 100); // Typing speed
      }
    };

    type();
  }, []);

  return (
    <div className='home-main'>
      <div className="home-text">
        <p>Hello, it's me (Not Adele)</p>
        <h1>David Emmanuel</h1>
        <p>I am a <span ref={typingTextRef} className="typing-text"></span><span className="cursor">|</span></p>
      </div>

      <div className="home-image">
        <img src={david} alt="david-picture" />
      </div>
    </div>
  )
}

export default Home