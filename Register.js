class Register extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            email: '',
            password: '',
            confirmPassword: ''

        }
    }

    handleUsername = (event) => {

        this.setState(
            {
                username: event.target.value
            }
        )
    }

    handleEmail = (event) => {

        this.setState(
            {
                email: event.target.value
            }
        )
    }

    handlePassword = (event) => {

        this.setState(
            {
                password: event.target.value
            }
        )
    }

    handleConfirmPassword = (event) => {

        this.setState(
            {
                confirmPassword: event.target.value
            }
        )
    }

    handleSubmit = (event) => {

        event.preventDefault()
					
								const users = [
									{
										username: 'Mary',
										password: 'verygoodpassword'
									},
									{
										username: 'admin',
										password: 'password'
									},
									{
										username: 'notausername',
										password: 'notapassword'
									},
									{
										username: 'john1946',
										password: 'yellow'
									},
									{
										username: 'ray_of_sunshine',
										password: 'Suns#1n3_2017'
									}
								]

        const userExists = users.find((user) => user.username === this.state.username)

        if (!userExists) {
            if (this.state.password !== this.state.confirmPassword) {
            alert('Passwords do not match')
            } else {
                alert(`
                    ${this.state.username} 
                    ${this.state.email} 
                    ${this.state.password} 
                    ${this.state.confirmPassword}
                `)
            }
        } else {
            alert('Username already exists')
        }
    }

    render() {
					
        return (

            <div className='registerBox'>
                
                <h1>
                    SIGN UP
                </h1>
                <form onSubmit={this.handleSubmit}>
                    
                    <div className='inputContainer'>

                        <input type='text' 
                        name='username'
                        placeholder='username'
                        value={this.state.username} 
                        onChange={this.handleUsername}
                        autoFocus 
                        required />

                        <input type='email' 
                        name='email' 
                        placeholder='email'
                        value={this.state.email}
                        onChange={this.handleEmail}
                        required />

                        <input type='password' 
                        name='password' 
                        placeholder='password'
                        value={this.state.password}
                        onChange={this.handlePassword}
                        required />

                        <input type='password' 
                        name='confirmPassword' 
                        placeholder='confirm password'
                        value={this.state.confirmPassword}
                        onChange={this.handleConfirmPassword}
                        required />

                    </div>
                    <div className='buttons'>
                        <input type='submit' value={'Submit'} />
                    </div>
                </form>
            </div>
        )
    }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Register />, rootElement);
