import React from 'react'
import Image from 'next/image'
import Title from '../common/Title'
import Button from '../common/Button'

const About = () => {
    return (
        <section className='w-full flex items-center justify-center'>
            <div className='flex items-center justify-center max-w-screen-lg'>
                <div>
                    <Image src="/about.webp" alt="About Image" height={ 560 } width={ 560 } className='rounded-2xl' />
                </div>
                <div className='ml-16 w-2/3'>
                    <Title>about me.</Title>
                    <h3
                        className='text-tertiary-dark dark:text-secondary-dark text-3xl font-medium mb-6 transition-all duration-300'
                    >
                        I am a FrontEnd developer with over than 2 year of experience.
                    </h3>
                    <p className='text-tertiary-dark/70 dark:text-secondary-dark/70 leading-7'>
                        I am a FrontEnd developer with over than 2 year of experience, but the products I have made are carefully invested. I am also an active person at work, constantly learning new skills.
                    </p>
                    <div className='mt-10'>
                        <Button
                            className="mr-5"
                        >
                            Contact Me
                        </Button>
                        <Button
                            href='https://drive.google.com/file/d/1bBnNy7w2ODbYM0ufuTT66MwikX6RFh0b/view'
                            newTab
                        >
                            Download CV
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About