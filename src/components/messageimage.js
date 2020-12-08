import Avatar from "./avatar.js"

const MessageImage = ({src, alt, caption}) => {
	return (
		<div className="message-container">
			<div className="message-image">
				<img src={src} alt={alt}/>
				<div className="image-caption">
					<span>Caption: {caption}</span>
				</div>
			</div>
		</div>
	)
}

export default MessageImage;