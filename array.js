// array object
const userProfileInfos = [
    {
        name: "So tharak",
        position: "Backend_developer",
        age: 18,
        profileImage: "./image/1.jpg"
    },
    {
        name: "Koemtry",
        position: "Content Creator",
        age: 18,
        profileImage: "./image/2.jpg"
    },
    {
        name: "Makara",
        position: "Content Creator",
        age: 18,
        profileImage: "./image/3.jpg"
    },
    {
        name: "Vathana",
        position: "Chairman of big company",
        age: 17,
        profileImage: "./image/4.jpg"
    },
    {
        name: "Rith",
        position: "Content Creator",
        age: 18,
        profileImage: "./image/5.jpg"
    }
]

let userProfileCard="";
userProfileInfos.map((info)=>{

    userProfileCard = `
    <div style="border: 1px solid gray; padding: 10px; border-radius: 20px">
        
        <img src="${info.profileImage}" style="width:75px; height: 75px; border-radius: 50%;">
        
        <hr>
        <h1>Name: ${info.name}</h1>
        <h1>Age: ${info.age}</h1>
        <h1>Position: ${info.position}</h1>
    </div>
    `
    document.getElementById('userInfoDisplay').innerHTML += userProfileCard;
})
