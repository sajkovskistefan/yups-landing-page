import React from 'react'

export const Testemonials = () => {
    return (
        <div id="testimonials" class="carousel slide text-center testimonials-container testimonials">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img class="rounded-circle shadow-1-strong mb-4"
                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp" alt="avatar"
                        style={{ "width": "150px;" }} />
                    <div class="row d-flex justify-content-center">
                        <div class="col-lg-8">
                            <h5 class="mb-3">Maria Kate</h5>
                            <p>Photographer</p>
                            <p>
                                <i class="fas fa-quote-left pe-2"></i>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus et deleniti
                                nesciunt sint eligendi reprehenderit reiciendis, quibusdam illo, beatae quia
                                fugit consequatur laudantium velit magnam error. Consectetur distinctio fugit
                                doloremque.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <img class="rounded-circle shadow-1-strong mb-4"
                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp" alt="avatar"
                        style={{ "width": "150px;" }} />
                    <div class="row d-flex justify-content-center">
                        <div class="col-lg-8">
                            <h5 class="mb-3">John Doe</h5>
                            <p>Web Developer</p>
                            <p>
                                <i class="fas fa-quote-left pe-2"></i>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus et deleniti
                                nesciunt sint eligendi reprehenderit reiciendis.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <img class="rounded-circle shadow-1-strong mb-4"
                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp" alt="avatar" style={{ "width": "150px" }} />
                    <div class="row d-flex justify-content-center">
                        <div class="col-lg-8 d-flex flex-column justify-content-center align-items-center">
                            <h5 class="mb-3">Anna Deynah</h5>
                            <p>UX Designer</p>
                            <p>
                                <i class="fas fa-quote-left pe-2"></i>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus et deleniti
                                nesciunt sint eligendi reprehenderit reiciendis, quibusdam illo, beatae quia
                                fugit consequatur laudantium velit magnam error. Consectetur distinctio fugit
                                doloremque.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#testimonials"
                data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#testimonials"
                data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    )
}
