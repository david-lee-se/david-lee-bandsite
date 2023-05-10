// const comments = [
//         {
//             username: "Connor Walton",
//             userComment: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
//             date: "02/17/2021",
//         },
//         {
//             username: "Emilie Beach",
//             userComment: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
//             date: "01/09/2021",
//         },
//         {
//             username: "Miles Acosta",
//             userComment: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
//             date: "12/20/2020",
//         },
// ]

const commentFormEl = document.querySelector(".comment-form");
const parentDiv = document.querySelector(".comments-container");
const commentArray = [];




function displayComment(commentObject) {
const commentContainer = document.createElement('div');
    commentContainer.classList.add("comment-card");

const avatarEl = document.createElement("div");
    avatarEl.classList.add("comment-card__avatar");
    

const contentDiv = document.createElement("div");
    contentDiv.classList.add("comment-card__content");

const nameEl = document.createElement("h2");
    nameEl.classList.add("comment-card__title");
    nameEl.innerText = commentObject.name;
    

const commentEl = document.createElement("p");
    commentEl.innerText = commentObject.comment;
    

const dateEl = document.createElement("p");
    dateEl.classList.add("comment-card__date");
    dateEl.innerText = commentObject.date;
    
contentDiv.append(nameEl, commentEl, dateEl);
commentContainer.append(avatarEl,contentDiv);
parentDiv.append(commentContainer);

const dividerEl = document.createElement("hr");
    dividerEl.classList.add("divider");
    parentDiv.append(dividerEl);

}





   



commentFormEl.addEventListener('submit', (e) => {
    e.preventDefault();
    const newComment = {name: e.target.name.value, comment: e.target.content.value, date: new Date().toDateString()};
    
    commentArray.unshift(newComment);
    e.target.reset();
    displayAllComments();
    
    return commentArray;
})


function displayAllComments () {
    parentDiv.innerHTML = " ";
    for(let i = 0; i <= commentArray.length-1; i++) {

    displayComment(commentArray[i])
}}




axios.get("https://project-1-api.herokuapp.com/comments?api_key=$api_key")
    .then((result) => {
        console.log(result)
        result.data.forEach(comments => {
        const date = new Date(comments.timestamp).toDateString();
        const commentObj = {name: comments.name, comment: comments.comment, date: date}
        commentArray.push(commentObj);
        })
        console.log(commentArray)
        displayAllComments();
    })