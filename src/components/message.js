const Message = (props) => {
	return (
		<div className="message-container">
			<div className="avatar"><img src="/images/avatar.jpg" alt="avatar"/></div>
			<div className="message">
				{props.children}
			</div>
		</div>
	)
}

export default Message;