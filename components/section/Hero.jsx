import React from 'react'
import Image from 'next/image'
import Button from '../common/Button'

const Hero = () => {
    return (
        <section className="relative w-full min-h-screen flex items-center justify-center after:z-0 after:content-[''] after:bg-secondary-dark dark:after:bg-tertiary-dark after:absolute after:-right-[20vh] after:-top-[20vh] after:w-[100vh] after:h-screen after:rounded-full after:transition-all after:duration-300">
            <div className='flex items-center justify-center max-w-screen-lg z-10'>
                <div className='w-1/2'>
                    <h6 className='text-tertiary-dark dark:text-secondary-dark text-2xl font-medium mb-5 transition-all duration-300'>Hello, I am</h6>
                    <h1 className='text-primary text-6xl font-bold mb-5'>Đào Xuân Quý</h1>
                    <p className='text-tertiary-dark dark:text-secondary-dark text-xl font-medium mb-6 transition-all duration-300'>I Am Passionate ...</p>
                    <p className='text-tertiary dark:text-secondary text-lg mb-8 transition-all duration-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae deleniti labore consequuntur dolorem unde nemo enim pariatur placeat rem, tempora inventore.</p>
                    <Button href='https://drive.google.com/file/d/1bBnNy7w2ODbYM0ufuTT66MwikX6RFh0b/view' newTab>
                        Download CV
                    </Button>
                </div>
                <div className='w-1/2'>
                    <div className='bg-primary rounded-full overflow-hidden border-8 border-secondary-dark'>
                        <Image src="/transparent.webp" alt='Avatar' width={ 540 } height={ 540 } className='scale-105 align-top' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero