import React from 'react'

export const WhatWeDo = () => {
    return (
        <div id="principles" className='d-flex flex-column what-we-do-container'>
            <h4 className='what-we-do-header text-center m-0'>Guiding Principles.</h4>
            <div className='what-we-do-cards'>
                <div className='we-do-card-column d-flex flex-column'>
                    <div className='we-do-card we-do-card-first'>
                        <h5 className="we-do-header">1. Simplicity Trumps All</h5>
                        Over complicating the problem overcomplicates the solution. A focussed and strategic approach yields the most effective outcomes.
                    </div>
                    <div>
                        <h5 className="we-do-header">3. Deliver & Awe</h5>
                        We take deadlines seriously. We're ready to deliver your next project on time and on budget, with results that blow you away.
                    </div>

                </div>
                <div>
                    <div className='we-do-card we-do-card-first'>
                        <h5 className="we-do-header">1. Simplicity Trumps All</h5>
                        Over complicating the problem overcomplicates the solution. A focussed and strategic approach yields the most effective outcomes.
                    </div>
                    <div>
                        <h5 className="we-do-header">3. Deliver & Awe</h5>
                        We take deadlines seriously. We're ready to deliver your next project on time and on budget, with results that blow you away.
                    </div>
                </div>
            </div>
        </div>
    )
}
