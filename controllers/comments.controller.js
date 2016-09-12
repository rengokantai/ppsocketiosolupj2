var comments=[{
	user:'ke',
	comment:'hi'
}]

module.exports = (socket)=>{
	for(var i=0;i<comments.length;i++){
		socket.emit('comment.add',comments[i]);
		socket.emit('comment.count',{
			count:i+1
		})
	}
}