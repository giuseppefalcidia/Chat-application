//chat bubble that we send

const MyMessage = ({ message }) => {

    //*if the message is an actual text message or an image 
    // if the message is an image:
    if (message?.attachments?.length > 0) {
        return (
            <img
            src={message.attachments[0].file}
            alt="message-attachments"
            className="message-image"
            style={{ float: 'right' }}
            />
        )
    }

    // if it is not:
    return (
        <div className="message" style={{ float: 'right', marginRight: '18px', color: 'white'
        , backgroundColor: '#3B2A50' }}>
            {message.text}
        </div>
    );
}

export default MyMessage;
