import React from 'react';

import YupsLogoOrange from '../UI/Assests/YupsLogoOrange.png'
import { Footer } from './Footer';

export const Form = () => {
    return (
        <div className='form-and-footer-container'>
            <form id="formId" className='form-container w-100'>
                <img className='form-logo' src={YupsLogoOrange} alt='yups logo white' />
                <div className='w-50'>
                    <div class="form-group pt-3">
                        <label for="exampleInputPassword1">Full name</label>
                        <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Full name" />
                    </div>
                    <div class="form-group pt-3">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div class="form-group pt-3">
                        <label for="exampleFormControlTextarea1">Message</label>
                        <textarea placeholder='Enter message' class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <button type="submit" class="btn btn-outline-dark mt-3">Submit</button>
                </div>
            </form>
            <Footer />
        </div>
    )
}
