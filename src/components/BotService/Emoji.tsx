import React, {useState} from "react";

const Emoji = () => {
    const [selectedEmoji, setSelectedEmoji] = useState('');  
    return (
      <div className="margin cursor-pointer">
        {['😁', '😃', '😅', '😆', '😇', '😉', '😂', '🙂', '🙃', '🤣', 
          '😊', '😍', '😘', '😋', '😜', '🤑', '🤗', '🤔', '😐', '😏',
          '🙄', '😔', '😴', '😪', '🤒', '🤕', '🤢', '😎', '😕', '🙁', 
          '😲', '😢', '😭', '😱', '😖', '😓', '😡', '😤', '🖐', '👌', 
          '👆', '👇', '👍', '👎', '✋', '🤝', '🙏', '👋', '👏', '💬', 
          '💔', '💜', '💖', '👓', '🎀', '👶', '👦', '👧', '🌎', '👪', 
          '💎', '💥', '🚦', '🚀', '🕓', '⚡', '🎁', '🎵', '📕', '📅', 
          '🐱', '🏠', '🎫', '📞', '💳', '🔒', '🌹'].map((emoji) => (
          <span 
            key={emoji} 
            onClick={() => setSelectedEmoji(emoji)} 
            style={{ cursor: 'pointer', padding: '5px' }} // Optional styling
          >
            {emoji}
          </span>
        ))}
      </div>
    );
}
export default Emoji;