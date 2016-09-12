var http =require('http'),
socketIO = require('socket.io'),
express = require('express'),
app = express(),
server,io;

app.get('/',(req,res)=>{
	res.sendFile(__dirname+'/index1.html');
})

server=http.Server(app);

server.listen(5000);
io=socketIO(server);
io.on('connection',(socket)=>{
	var controllers = ['comments','posts'];
	for(var i=0;i<controllers.length;i++){
		require('./controllers/'+controllers[i]+'.controller')(socket);
	}
})