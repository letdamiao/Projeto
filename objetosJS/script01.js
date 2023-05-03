// const object = {
//     id: 1,
//     name: "Eduarda",
//     age: 17,
//     city: "Maceió",
// };
// console.log(object.city);

// const user = {
//     id: 1,
//     name: "Eduarda",
//     age: 17,
//     city: "Maceió",
//     function: () => {
//         return console.log(`Usuário: ${user.name}`)
//     }
// };
// user.function();

const rewviews = [
    {
   
        name:"Susan Smith",
        job:"Web Developer",
        image:"https://images2.imgbox.com/e0/57/qI5bbwvg_o.jpeg",
        text:"I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up", 
    },
{
  
    name:"Anna Johnson",
    job:"Web Devsigner",
    image:"https://images2.imgbox.com/2e/6e/JAMvTZ56_o.jpeg",
    text:"Helvetica artisan kindfolk thundercats. Disrupt glossier gastropub deep v vice frazen.", 
},
{
 
    name:"Peter Jones",
    job:"Intern",
    image:"https://images2.imgbox.com/56/88/oJvFN3l5_o.jpeg",
    text:"Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa", 
},

{
  
    name:"Bill Anderson",
    job:"The Boss",
    image:"https://images2.imgbox.com/8b/1c/vwWNTsCd_o.jpeg",
    text:"Edison bulp put a bird on it humblebrag, marfa pok pok heirloom fashion axe crazy stumptown venmo actually seitan.", 
},
];
let i = 0

function ToRight(){
    i++
    document.getElementById("author").innerHTML = rewviews[i].name
    document.getElementById("job").innerHTML = rewviews[i].job
    image.SetAAtribut("src", rewviews[index].image)
  
}
function Toleft(){
    i--
    document.getElementById("author").innerHTML = rewviews[i].name
    document.getElementById("job").innerHTML = rewviews[i].job
}
