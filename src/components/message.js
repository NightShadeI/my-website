import Avatar from "./avatar.js"

const Message = (props) => {
	return (
		<div className="message-container">
			<Avatar/>
			<div className="message">
				{props.children}
			</div>
		</div>
	)
}

export default Message;