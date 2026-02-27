import { useEffect, useRef } from 'react'
function Hero() {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    useEffect(() => {
        if(videoRef.current) videoRef.current.playbackRate = 2;
    }, [])
  return (
    <section id='hero'>
        <div>
            <h1>MacBook Pro</h1>
            <img src='/title.png' alt='MacBook image'></img>
        </div>
        <video ref={videoRef} src='/videos/hero.mp4' autoPlay muted playsInline/>
        <button>Buy Now</button>
        <p>From $1599 or $133/mo for 12 months</p>
    </section>
  )
}

export default Hero