const http = require('http');
const fs = require('fs');
const _ = require('lodash');
 const server = http.createServer((req,res)=>{
    //lodash
    const num=_.random(0,42);
    console.log(num);
    
    const greet =_.once(()=>{
        console.log('Helloo');
    });
    greet();
    greet();
     //for response set header content
     res.setHeader('Content-Type','text/html');
     let path ='./views/';
     switch(req.url){
         case '/':
            path+='index.html';
            res.statusCode =200;
            break;
            case '/blogs':
                path+='index.html';
                res.statusCode =200;
                break;
        case '/about':
             path+='about.html';
             res.statusCode =200;
             break;
             case '/about-us':
             res.statusCode =301;
             res.setHeader('Location','/about');
             res.end();
             break;
        default :
        path+='404.html';
        res.statusCode =404;
        break;
     }
     fs.readFile(path,(err,data)=>{
         if(err)
         {
             console.log(err);
             res.end();
         }
         else
         {
            //  res.write(data);
             res.end(data);
         }
         });
        });
 server.listen(3000,'localhost',()=>{
     console.log('listening on request on port number 3000');
 });