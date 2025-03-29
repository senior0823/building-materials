import React, {useState} from "react";

const Emoji = ({handleEmojiClick}:{handleEmojiClick:Function}) => {

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
            onClick={() => handleEmojiClick(emoji)} 
            style={{ cursor: 'pointer', padding: '5px'}} // Optional styling
          >
            {emoji}
          </span>
        ))}
      </div>
    );
}
export default Emoji;