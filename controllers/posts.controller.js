var posts=[{
	user:'ke',
	title:'hi'
}]

module.exports = (socket)=>{

	// for(var i=0;i<posts.length;i++){
	// 	socket.emit('post.add',posts[i]);
	// 	socket.emit('post.count',{
	// 		count:i+1
	// 	})
	// }
	var i=0;
	var addingPosts = setInterval(()=>{
		if(posts[i]){
		 	socket.emit('post.add',posts[i]);
			socket.emit('post.count',{
 			count:i+1
		});
		i++;
	}else{
		clearInterval(addingPosts);
		}
	},1000)
}