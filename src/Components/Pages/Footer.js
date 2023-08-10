import React from 'react'

export const Footer = () => {
    return (
        <div style={{ height: "300px" }} className='d-flex flex-row justify-content-between align-items-center w-100 container'>
            <form>
                <div class="form-group pt-3">
                    <label style={{ color: "white", paddingBottom: "20px" }} for="exampleInputEmail1">We have a newsletter in the making, sign up for early access</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Newsletter signup" />
                </div>
                <button type="submit" class="btn btn-outline-light mt-4">Submit</button>
            </form>
            <div className='text-muted'>
                © Copyright 2023 Yups - All Rights Reserved
            </div>

        </div>
    )
}
