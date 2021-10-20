const TheirMessage = ( { lastMessage, message } ) => {

    // boolean value that it is gonna tell us if this is the first message by the  user
    const isFirstMessageByUser = !lastMessage || lastMessage.sender.username !== message.sender.userName;

    return (
        <div className="message-row">
            {isFirstMessageByUser && (
                // only if you have the firstMessage by the user
                <div 
                    className="message-avatar"
                    style={{backgroundImage: `url(${message?.sender?.avatar})`}}
                />
            )}

         {/* if it is an attachment, we are gonna return an image */}
         {message?.attachments?.length > 0 
         ? 
         (
        <img
        src={message.attachments[0].file}
        alt="message-attachment"
        className="message-image"
        style={{ marginLeft: isFirstMessageByUser ? '4px' : '48px'}}
        />

        //else:
         ) : (

              <div className="message" style={{ float: 'left', backgroundColor: '#CABCDC', marginLeft: isFirstMessageByUser ? '4px' : '48px'}}>
            {message.text}

        </div>

         )

     }
        </div>
    );
}

export default TheirMessage;
