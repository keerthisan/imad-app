var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var ArticleOne = {
    title:'Articl One' ,
    heading:'Article one' ,
    date:'aug 5,2017' ,
    content:
                `<p>
                A toy is an item that is used in play, especially one designed for such use. Playing with toys can be an enjoyable means of training young children for life in society. Different materials like wood, clay, paper, and plastic are used to make toys. Many items are designed to serve as toys, but goods produced for other purposes can also be used. For instance, a small child may fold an ordinary piece of paper into an airplane shape and "fly it." Newer forms of toys include interactive digital entertainment. Some toys are produced primarily as collector's items and are intended for display only.
            </p>
            <p>
                The origin of toys is prehistoric; dolls representing infants, animals, and soldiers, as well as representations of tools used by adults are readily found at archaeological sites. The origin of the word "toy" is unknown, but it is believed that it was first used in the 14th century. Toys are mainly made for children.[1] The oldest known doll toy that has been found is thought to be 4,000 years old.[2]
            </p>
            <p>
                Playing with toys is considered to be important when it comes to growing up and learning about the world around us. Younger children use toys to discover their identity, help their bodies grow strong, learn cause and effect, explore relationships, and practice skills they will need as adults. Adults on occasion use toys to form and strengthen social bonds, teach, help in therapy, and to remember and reinforce lessons from their youth.


            </p>`

    
};
function createTemplate(data){
    var title=data.title;
    var date=data.date;
    var heading=data.heading;
    var content=data.content;
    

var htmlTemplate =`

<html>
<head>
<title>
${title}
</title>
<meta name="viewport" content="width-device-width,initial-scale-1"/>
        <link href="/ui/style.css" rel="stylesheet" />
        </head>
        <body>
        <div class="container">
        <div>
        <a href="/">Home</a>
        </div>
        <hr/>
        <h3>
        ${heading}
        </h3>
        <div>
        ${date}
        </div>
        <div>
        ${content}
        </div>
        </div>
        </body>
        </html>
;
return htmlTemplate;
}


app.get('/', function (req, res) {
  res.send(createTemplate(articleone));
});
app.get('/article-one',function (req,res){
   res.sendFile(path.join(__dirname, 'ui', 'article-one.html'));
   
});

app.get('/article-two',function (req,res){
      res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
    
});
app.get('/article-three',function (req,res){
      res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});



app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
