function User(props) {
    console.log(props)

    return (
        <><div className="centerd-content">
            <img src="logo.jpg" alt="logo" />
            <h1>{props.name}</h1>
            <p>
                {props.para}
            </p>

        </div><div className="buttonContainer">
                <a href="https://in.linkedin.com/company/xyram-software-solutions" target="_blank">
                    <button className="button1">Linkedin</button>
                </a>
            </div><a href="https://www.xyramsoft.com" target="_blank">
                <button className="button2">Contact Us</button>
            </a><label for="email">Enter your email : </label><input type="email" id="email" name="email" /><button className="button3">Get Started</button></>


    );
};

export default User;
