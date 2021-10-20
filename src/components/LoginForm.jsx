import  { useState } from 'react';

// API CALLS FROM:
import axios from 'axios';


const LoginForm = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    const [error, setError] = useState('');

    //e.preventDefault() just to prevent the browser from refreshing
    const handleSubmit = async (e) => {
        e.preventDefault();
  
        // authentication - specify all the data 
        const authObject = {
            'Project-ID': "e5c5d5c9-62a4-484b-a1c7-c6b5ccc99341",
            'User-Name': username, 'User-Secret': password
        }

        // async code:
        try {
            // username or password => chatengine => give messages
            // if this is successful => works out => logged in 
           
            // making a request to the inner working of Chat engine 
            // api + headers 
            await axios.get('https://api.chatengine.io/chats', { headers: authObject });
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
            //once we do that => reload the page
            window.location.reload()

        } catch (error) {
            // otherwise error => try with new username..
            setError('Incorrect Credentials')

        }

        
    }

    return (
        <div className="wrapper">
         <div className="form">
             <h1 className="title">Chat Application</h1>
             <form onSubmit={handleSubmit}>
             <input type="text" value={username}  onChange={(e) => setUsername(e.target.value)} 
                 className="input" placeholder="Username"
                 required
             />

            <input type="password" value={password}  onChange={(e) => setPassword(e.target.value)} 
                 className="input" placeholder="Password"
                 required
             />
            
            <div align="center">
                <button type="submit" className="button">
                    <span>Start Chatting</span>
                </button>
            </div>

            <h2 className="error">{error}</h2>
             </form>
         </div>
        </div>
    )
}

export default LoginForm;