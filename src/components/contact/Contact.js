import React from 'react'

export const Contact = () => {
    return (
        <div class="contact-section" id='contact'>
            <div class="contact-heading">
                <h2>Keep in touch</h2>
                <div class="divider"></div>
            </div>
            <div class="container-contact">
                <img src="https://res.cloudinary.com/freelancer2222222222222222/image/upload/v1650543288/samples/img-opacity50_jgruyl.png" alt="" />
                <div class="contact-form">
                    <h4>Send me a message...</h4>
                    <form class="form-group">
                        <input type="text" placeholder="Name" class="input" />
                        <input type="email" placeholder="Email" class="input" />
                        <textarea name="message" placeholder="Place your message here..."></textarea>
                        <button type="submit" class="btn-submit">Send message</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
