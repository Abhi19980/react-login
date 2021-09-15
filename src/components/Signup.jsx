import React from 'react'

function Signup() {
    return (
        <form>
            <div className="form-inner">
                <h2>SignUp</h2>
                <div className="form-group">
                    <label htmlFor="name">Name: </label>
                    <input type="text" name="name" id="name" />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email: </label>
                    <input type="email" name="email" id="email" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password: </label>
                    <input type="password" name="password" id="password" />
                </div>
            </div>
            <input type="SignUp" value="SignUp" />
        </form>
    )
}

export default Signup
