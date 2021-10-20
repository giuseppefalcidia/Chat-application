import { useState } from 'react';
// predefined functions from 
import { sendMessage, isTyping } from 'react-chat-engine';
// icons 
import { SendOutlined, PictureOutlined} from '@ant-design/icons';

const MessageForm = (props) => {
    const [ value, setValue ] = useState('');
    const { chatId, creds } = props;

    const handleSubmit = (event) => {
        // preventing the page to refresh every time a new message is sent
        event.preventDefault();
  
        // removing white space from the message body 
        const text = value.trim();

        //                    passing three props and the object of our message
        if(text.length > 0) sendMessage(creds, chatId, { text });

        setValue('');


    }
    
    const handleChange = (event) => {
        // value of the input stored in
        setValue(event.target.value);

        isTyping(props, chatId);
    }
    
    // event that is gonna contain the image
    const handleUpload = (event) => {
        //event.target.value for text
        //event.target.files for images
     sendMessage(creds, chatId, {files: event.target.files, text: ''})
    }

    return (
       <form className="message-form" onSubmit={handleSubmit}>
        <input
        className="message-input"
        placeholder="Send a message..."
        value={value}
        onChange={handleChange}
        onSubmit={handleSubmit}
        />

        <label htmlFor="upload-button">
            <span className="image-button">
                <PictureOutlined className="picture-icon"/>
            </span>
        </label>
        <input
        type="file"
        multiple={false}
        id="upload-button"
        style={{ display: 'none' }}
        onChange={handleUpload}
         />

         <button type="submit" className="send-button">
          <SendOutlined className="send-icon" />
         </button>
       </form>
    );
}

export default MessageForm;