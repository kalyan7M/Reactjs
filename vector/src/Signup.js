let Signup=()=>{
    return(
        <div className="signup">
            <div className="signup-card">
                <div>
                    <label>E-mail</label>
                    <input type="text" placeholder="Enter Email..." required className="input"/>
                </div>
                <div>
                    <label>Password</label>
                    <input type="passwword" placeholder="Enter Password..." required className="input"/>
                </div>
            </div>
        </div>
    )
}
export default Signup