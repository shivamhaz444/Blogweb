const fs = require('fs');

// //reading the files and checkingf errors
// fs.readFile('./docs/blog1.txt',(err,data)=>{
//     if(err)
//     {
//         console.log(err);
//     }
//     console.log(data.toString());
// });
// console.log('last line!');

//writting on the files
// fs.writeFile('./docs/blog1.txt','Hello world Gandu!',()=>{
//     console.log('Files is being written');
// });
// if(!fs.existsSync('./assests'))
// {
//     fs.mkdir('./assests',(err)=>{
//         if(err)
//         {
//             console.log(err);
//         }
//         console.log('files was created');
//     });
// }
// else
// {
//     fs.rmdir('./assests',(err)=>{
//         if(err)
//         {
//             console.log(err);
//         }
//         console.log("Files was removed");
//     });
//     }

//deleting the files
if(fs.existsSync('./dst.txt'))
{
fs.unlink('./dst.txt',(err)=>{
    if(err)
    {
        console.log(err);
    }
    console.log('File deleted');
});
}