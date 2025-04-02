const exrpess = require('express')

const app = exrpess()
const http =  require('http')
const  server= http.createServer(app)
const socket = require('socket.io')
const io = socket(server,{
    cors:{
        origin:''
    }
})
const cors = require('cors')

app.use(cors())

io.on('connection', (socket)=>{

    console.log("hello user");
    
})
app.get('/',(req,res)=>{
    const fs = require('fs');

    function imageToBase64(imagePath) {
      try {
        const imageBuffer = fs.readFileSync(imagePath);
        const imageBase64 = imageBuffer.toString('base64');
        return imageBase64;
      } catch (error) {
        console.error('Error converting image to Base64:', error);
        return null;
      }
    }
    
    // Example usage:
    const imagePath = './folder/premium_photo-jpg'; // Replace with your image path
    const base64String = imageToBase64(imagePath);
    
    if (base64String) {
      console.log('Base64 string:', base64String);
    }
})

app.listen(8000,()=>{
    console.log(`serer is running on http://localhost:8000`);
    
})