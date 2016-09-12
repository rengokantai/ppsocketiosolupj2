var posts=[{
	user:'ke',
	title:'hi'
}]

module.exports = (socket)=>{
	for(var i=0;i<posts.length;i++){
		socket.emit('post.add',posts[i]);
		socket.emit('post.count',{
			count:i+1
		})
	}
}