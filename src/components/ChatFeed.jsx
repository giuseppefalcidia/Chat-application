import MessageForm from './MessageForm';
import MyMessage from './MyMessage';
import TheirMessage from './TheirMessage';


const ChatFeed = (props) => {
   
    // destructure something from props:
    const { chats, activeChat, userName, messages } = props;

    // if chat exists... then find chat and then active chat
    const chat = chats && chats[activeChat];
    
    
    const renderReadReceipts = (message, isMyMessage ) => {

        chat.people.map((person, index) => person.last_read === message.id
        && (
         <div 
        key={`read_${index}`}
        className="read-receipts"
        style={{ 
            float: isMyMessage ? 'right' : 'left', 
            backgroundImage: `url(${person?.person?.avatar})`
        }}
    />
    ))

    }

    // functional component for generating messages
    const renderMessages = () => {
       // take the keys (id of specific messages) from our messages and put them right here
        const keys = Object.keys(messages);
         // keys = id of specific messages
        return keys.map((key, index) => {
            // dynamically take the message with this specific key - and then loop over them
            const message = messages[key];

            //if there are messages make sure to find the last message
            const lastMessageKey = index === 0 ? null : keys[index - 1];

            const isMyMessage = userName === message.sender.userName;

            return (
                //div that is gonna act like a message
                <div key={`msg_${index}`} style={ { width: '100%' }}>

                    <div className="message-block">

                        { 
                            // if it is isMyMessage then render my component 
                            // if it is not isMyMessage then it is TheirMessage
                            // and pass all the props:
                            isMyMessage 
                            ? <MyMessage  message={message} /> 
                            : <TheirMessage message={message} lastMessage={messages[lastMessageKey]} />

                        }

                    </div>

                    <div className="read-receipts" style={{ marginRight: isMyMessage ? '18px' : '0px', 
                    marginLeft: isMyMessage ? '0px' : '68px'}} >
                    {renderReadReceipts(message, isMyMessage)}
                      
                      </div>
                    </div>
    
            
            );
        }
        )
    }
 

    // if there is no chat.. returns this string: 'Loading...
    if(!chat) return 'Loading...';

    

    return (
        <div className="chat-feed">
        <div className="chat-title-container">
              {/* this question mark makes sure that we have the chat before we try to access our title variable*/}
            <div className="chat-title">{chat?.title}</div>
            <div className="chat-subtitle">
            {/* map through all the people and a string with the subtitle of the chat*/}
                {chat.people.map((person) => `${person.person.username}`)}
            </div>
        </div>

            {renderMessages()}

            <div  style={{ height: '100px' }} />
            <div className="message-form-container">
            {/* spread all the props and pass in the chat - structure of chat feed */}
                <MessageForm  {...props} chatId={activeChat} />
            </div>
        </div>
    );
}

export default ChatFeed;

