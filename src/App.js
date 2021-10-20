import { ChatEngine } from 'react-chat-engine';

import LoginForm from './components/LoginForm';
import ChatFeed from './components/ChatFeed';

import './App.css';

//* Install dependencies:
//@ant-design/icons  axios  react-chat-engine

const App = () => {

    // if there is no username - you are not logged in => return LoginForm
 if (!localStorage.getItem('username')) return <LoginForm />

    return (
        <ChatEngine
         height="100vh"
         projectID="
         e5c5d5c9-62a4-484b-a1c7-c6b5ccc99341"

         //userName="First_User"
         //userName="Second_User"
         //userSecret="123456"
         
         userName={localStorage.getItem('username')}
         userSecret={localStorage.getItem('password')}

         //rendering my own component:
         // spreading all the props coming from the ChatFeed
         renderChatFeed ={(chatAppProps) => 
         <ChatFeed { ...chatAppProps } />}
         />
    );
}

export default App;