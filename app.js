const express =require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes');
const { render } = require('ejs');
//create an express app
const app =express();
//connect mongo db
const dburl='mongodb+srv://shivam:haha123@cluster0.fft54.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(dburl)
.then((result)=> app.listen(3000))
.catch((err) => console.log(err))
//register an view engine
app.set('view engine','ejs');
app.use(morgan('dev'));
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));

// //add mongoose and mongo sandbox route
// app.get('/add-blog',(req,res)=>{
//     const blog = new Blog({
//         title:'first blog 6',
//         snippet:'its aditi rnd',
//         body : 'fuck off'
//     });
//     blog.save()
//     .then((result)=> {
//         res.send(result)
//     })
//     .catch((err)=>{
//         console.log(err);
//     });
    
// });


// app.get('/single-blog',(req,res)=>{
//     Blog.findById('62c20d2ef33573731294508b')
//     .then((result)=> {
//         res.send(result)
//     })
//     .catch((err)=>{
//         console.log(err);
//     });
// });
// // app.use((req,res,next)=>{
// //     console.log('New request made:');
// //     console.log('host:',req.hostname);
// //     console.log('path:',req.path);
// //     console.log('method:',req.method);
// //     next();
// // });
// // app.use((req,res,next)=>{
// //     console.log('In the next middleware');
// //     next();
// // });
// app.get('/all-blogs',(req,res)=>{
//     Blog.find()
//     .then((result)=> {
//         res.send(result)
//     })
//     .catch((err)=>{
//         console.log(err);
//     });
// })
app.get('/', (req, res) => {
    
    res.redirect('/blogs');
  });

app.get('/',(req,res)=>{
    res.render('index',{title:'home'});
});
app.get('/about',(req,res)=>{
    res.render('about',{title:'about'});});
//blog routes
app.use('/blogs',blogRoutes);

//404 page
app.use((req,res)=>{
    res.status(404).render('404',{title:'404'});
});