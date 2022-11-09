import "./ContactPage.css";
const ContactPage = (props) => {
    return <div class="container">
    <div class="contact-box">
        <div class="left"></div>
        <div class="right">
        <form action="">
            <h2>Contact</h2>
            <input type="text" class="field" placeholder="Your Name"/>
            <input type="text" class="field" placeholder="Your Email"/>
            <input type="text" class="field" placeholder="Phone"/>
            <textarea placeholder="Message" class="field"></textarea>
                <input type="file" id="myFile" name="filename"/>
            <button type="submit" class="btn">Send</button>
            </form>
        </div>
    </div>
</div>
}

export default ContactPage;