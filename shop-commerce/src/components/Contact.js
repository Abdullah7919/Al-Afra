import React from 'react'
import './Contact.css'

function Contact() {
  return (
    <section class="section-signup container">
        <h2>Contact Us</h2>
        <form class="signup-form">
            <div class="form-group">
                <label for="Name">Name</label>
                <input type="text" placeholder="Enter your name"/>
            </div>
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" placeholder="Enter your Email"/>
            </div>
            <div class="form-group">
                <label for="subject">Subject</label>
                <input type="subject" placeholder="subject"/>
            </div>
            <div class="form-group">
                <label for="subject"></label>
                <textarea name="about" placeholder=" Your Message" id="Your Message" cols="10" rows="10"></textarea>
            </div>
            <button type="submit" class="btn">Send Message</button>
        </form>
    </section>
  )
}

export default Contact