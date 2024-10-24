
var post_count=Math.floor(Math.random()*10+1);
document.querySelector("#posts_count").innerHTML=post_count;
document.querySelector("#followers").innerHTML=Math.floor(Math.random()*1000+1);
document.querySelector("#following").innerHTML=Math.floor(Math.random()*2000+1);
fetch('https://randomuser.me/api/').then(response=>{
    response.json().then(data=>{
        let user=data.results[0];
        console.log(user);
        let name=user.name.first+"_"+user.name.last;
        document.querySelector(".profile_name").innerHTML=name.toLowerCase()
        let image=document.createElement("img");
        image.src=user.picture.medium;
        document.querySelector(".profile_img").append(image);
        document.querySelector(".name").innerHTML=user.name.last+" "+user.name.first;
        document.querySelector(".address").innerHTML=user.location.city;
        document.querySelector(".bday").innerHTML=user.dob.date.substring(0,10);
        document.querySelector(".email").innerHTML=user.email;
        document.querySelector(".phone").innerHTML=user.phone;
    })
})


// highlights
var count_high=Math.floor(Math.random()*10+1);
let highlights=document.querySelector(".highlights");
for(let i=0;i<count_high;i++){
    let high_div=document.createElement("div");
    high_div.className="high";

    let image_div=document.createElement("div");
    image_div.className="image hover";

    let img_ele=document.createElement("img");
    img_ele.src="https://picsum.photos/80"+i;

    image_div.append(img_ele);

    let text=document.createElement("p");
    text.innerHTML="random "+(i+1);

    high_div.append(image_div);
    high_div.append(text);

    highlights.append(high_div);
}


// posts
let post_pics=document.querySelector(".posts");
for(let i=0;i<post_count;i++){
    let img_post=document.createElement("img");
    img_post.src="https://picsum.photos/100"+i;
    post_pics.append(img_post);
}


let reels_img=document.querySelector(".reels");
var reel_count=Math.floor(Math.random()*10)+1;
console.log(reel_count);
for(let i=0;i<reel_count;i++){
    let reel=document.createElement("img");
    reel.src="https://picsum.photos/110"+i;
    reels_img.append(reel);
}

// selectors

function posts(){
    post_pics.style.display="grid";
    reels_img.style.display="none";
    document.querySelector(".reel_selector").style.backgroundColor="black";
    document.querySelector(".posts_selector").style.backgroundColor="#353535";
}

function reels(){
    reels_img.style.display="grid";
    post_pics.style.display="none";
    document.querySelector(".reel_selector").style.backgroundColor="#353535";
    document.querySelector(".posts_selector").style.backgroundColor="black";
}