import React from 'react'

export const Cards = () => {
    return (
        <div id='about-us' className='div-with-pictures'>
            <h1 className='card-header'>Who are we?</h1>
            <div className='all-card-container'>
                <div className='card-container'>
                    <img src='https://imgv3.fotor.com/images/blog-richtext-image/indigo-color.png' alt=' girl' className='card-img' />
                    <div className='card-text'>
                        <h1 className='card-text-header'>Eleni Mickovska</h1>
                        <div>
                            Founder & CEO. Having worked in multiple companies around Europe, she decides to open her company to rule the world :)
                        </div>
                    </div>
                </div>
                <div className='card-container'>
                    <img src='https://imgv3.fotor.com/images/blog-richtext-image/indigo-color.png' alt=' girl' className='card-img' />
                    <div className='card-text'>
                        <h1>ime i prezime</h1>
                        <div>
                            Founder & CEO. Having worked in some of New York's biggest agencies, Daniel's radical vision required a newfound venture.
                        </div>
                    </div>
                </div>
                <div className='card-container'>
                    <img src='https://imgv3.fotor.com/images/blog-richtext-image/indigo-color.png' alt='girl' className='card-img' />
                    <div className='card-text'>
                        <h1>ime i prezime</h1>
                        <div>
                            Founder & CEO. Having worked in some of New York's biggest agencies, Daniel's radical vision required a newfound venture.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
