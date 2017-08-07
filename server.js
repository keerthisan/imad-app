var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles ={
    'article-one' :{
    title:'Article-one',
    heading:'Article-one' ,
    date:'Aug 5th 2017',
    content:`
     <p>
                A toy is an item that is used in play, especially one designed for such use. Playing with toys can be an enjoyable means of training young children for life in society. Different materials like wood, clay, paper, and plastic are used to make toys. Many items are designed to serve as toys, but goods produced for other purposes can also be used. For instance, a small child may fold an ordinary piece of paper into an airplane shape and "fly it." Newer forms of toys include interactive digital entertainment. Some toys are produced primarily as collector's items and are intended for display only.
            </p>
            <p>
                The origin of toys is prehistoric; dolls representing infants, animals, and soldiers, as well as representations of tools used by adults are readily found at archaeological sites. The origin of the word "toy" is unknown, but it is believed that it was first used in the 14th century. Toys are mainly made for children.[1] The oldest known doll toy that has been found is thought to be 4,000 years old.[2]
            </p>
            <p>
                Playing with toys is considered to be important when it comes to growing up and learning about the world around us. Younger children use toys to discover their identity, help their bodies grow strong, learn cause and effect, explore relationships, and practice skills they will need as adults. Adults on occasion use toys to form and strengthen social bonds, teach, help in therapy, and to remember and reinforce lessons from their youth.


            </p>`
},
   
        'article-two':{
    title:'Article-two',
    heading:'Article-two' ,
    date:'Aug 5th 2017',
    content:`
     <p>
                Most children have been said to play with whatever they can find, such as sticks and rocks. Toys and games have been unearthed from the sites of ancient civilizations. They have been written about in some of the oldest literature. Toys excavated from the Indus valley civilization (3010-1500 BCE) include small carts, whistles shaped like birds, and toy monkeys which could slide down a string.
            </p>
            <p>
                The earliest toys are made from materials found in nature, such as rocks, sticks, and clay. Thousands of years ago, Egyptian children played with dolls that had wigs and movable limbs which were made from stone, pottery, and wood.[4] In Ancient Greece and Ancient Rome, children played with dolls made of wax or terracotta, sticks, bows and arrows, and yo-yos. When Greek children, especially girls, came of age it was customary for them to sacrifice the toys of their childhood to the gods. On the eve of their wedding, young girls around fourteen would offer their dolls in a temple as a rite of passage into adulthood
            </p>
            <p>
                The oldest known mechanical puzzle also comes from Greece and appeared in the 3rd century BC. The game consisted of a square divided into 14 parts, and the aim was to create different shapes from these pieces. In Iran "puzzle-locks" were made as early as the 17th century (AD).


            </p>
            `
},
    
    'article-three' :{
    title:'Article-three',
    heading:'Article-three' ,
    date:'Aug 5th 2017',
    content:`
     <p>
               Toys, like play itself, serve multiple purposes in both humans and animals. They provide entertainment while fulfilling an educational role. Toys enhance cognitive behavior and stimulate creativity. They aid in the development of physical and mental skills which are necessary in later life
            </p>
            <p>
                One of the simplest toys, a set of simple wooden blocks is also one of the best toys for developing minds. Andrew Witkin, director of marketing for Mega Brands told Investor's Business Daily that, "They help develop hand-eye coordination, math and science skills and also let kids be creative."[20] Other toys like Marbles, jackstones, and balls serve similar functions in child development, allowing children to use their minds and bodies to learn about spatial relationships, cause and effect, and a wide range of other skills as well as those mentioned by Mr. Witkin.
            </p>
            <p>
                One example of the dramatic ways that toys can influence child development involves clay sculpting toys such as Play-Doh and Silly Putty and their home-made counterparts. Mary Ucci, Educational Director of the Child Study Center of Wellesley College, demonstrates how such toys positively impact the physical development, cognitive development, emotional development, and social development of children.[21]

Toys for infants often make use of distinctive sounds, bright colors, and unique textures. Through play with toys infants begin to recognize shapes and colors. Repetition reinforces memory. Play-Doh, Silly Putty and other hands-on materials allow the child to make toys of their own.

Educational toys for school age children of often contain a puzzle, problem-solving technique, or mathematical proposition. Often toys designed for older audiences, such as teenagers or adults demonstrate advanced concepts. Newton's cradle, a desk toy designed by Simon Prebble, demonstrates the conservation of momentum and energy.
            </p>`
}
    
};
   


function createTemplate (data){
    var title=data.title;
    var date=data.date;
    var heading=data.heading;
    var content=data.content;
    

var htmlTemplate =
`<html>
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
        <div >
            ${content}
            
        </div>
        </div>
        </body>
    
</html>
`;
return htmlTemplate;
}

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'ui', 'index.html'));
 
});
app.get('/:articleName',function (req,res){
    
   var articleName = req.params.articleName;
   res.send(createTemplate(articles[articleName]));
   
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
