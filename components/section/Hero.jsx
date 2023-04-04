import React from 'react'
import Image from 'next/image'
import ReactTypingEffect from 'react-typing-effect';
import { Button } from '..';

const info = {
    name: 'Đào Xuân Quý',
    job: [
        'Front End Web Developer',
        'Software Engineer',
        'Billiard Player'
    ],
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae deleniti labore consequuntur dolorem unde nemo enim pariatur placeat rem, tempora inventore.',
    avatar: '/transparent.webp'
}

const Hero = ({ id, className }) => {
    return (
        <section id={ id } className={ `relative w-full min-h-screen flex items-center justify-center after:z-0 after:content-[''] after:bg-secondary-dark dark:after:bg-tertiary-dark after:absolute after:-right-[20vh] after:-top-[20vh] after:w-[100vh] after:h-screen after:rounded-full after:transition-all after:duration-300 ${className}` }>
            <div className='flex items-center justify-center max-w-screen-lg z-10'>
                <div className='w-1/2'>
                    <h6 className='text-tertiary-dark dark:text-secondary-dark text-2xl font-medium mb-5 transition-all duration-300'>Hello, I am</h6>
                    <h1 className='text-primary text-6xl font-bold mb-5 transition-all duration-300'>{ info.name }</h1>
                    <span className='text-tertiary-dark dark:text-secondary-dark text-xl font-medium mb-6 flex transition-all duration-300'>
                        <p className='mr-1'>I Am Passionate</p> <ReactTypingEffect speed={ 100 } eraseSpeed={ 50 } eraseDelay={ 3000 } typingDelay={ 1000 } text={ info.job } />
                    </span>
                    <p className='text-tertiary dark:text-secondary text-lg mb-8 transition-all duration-300'>{ info.description }</p>
                    <Button
                        to="about"
                        spy={ true }
                        smooth={ true }
                        offset={ -100 }
                        duration={ 500 }
                    >
                        about me
                    </Button>
                </div>
                <div className='w-1/2'>
                    <div className='bg-primary rounded-full overflow-hidden border-8 border-secondary-dark'>
                        <Image src={ info.avatar } alt='Avatar' width={ 540 } height={ 540 } className='scale-105 align-top drop-shadow-xl' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero