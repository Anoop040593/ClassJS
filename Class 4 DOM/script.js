const commentContainer = document.getElementById("commentContainer");

const createElement =  (elementName = "div", attributes = {}, ...children) => {
    //create element
    const element = document.createElement(elementName);

    //add attributes
    for(const key in attributes) {
        element[key]=attributes[key];
    }

    //append children
    children.forEach((child) => element.appendChild(child));

    return element;
}

const li = createElement("li", {class: "container", foo: "bar"})
const ul = createElement("ul", {}, li);

const createComment = (name, text) => {
    const p1 = createElement("p", {innerText: name});
    const p2 = createElement("p", {innerText: text});
    const replyBtn = createElement("button", {
        innerText: "Reply",
        className: "reply"
    });

    const mainComment = createElement("div", {className: "main-comment"}, p1, p2, replyBtn);
    // console.log(mainComment);
    const subCommentContainer = createElement("div", {
        className: "sub-comment-container"
    });

    const comment = createElement("div", {className: "comment"}, mainComment, subCommentContainer);
    return comment;

}

// console.log(createComment("Anoop", "Lets create"));

// createComment("Anoop", "Lets create!");

const createCommentInput = () => {
    const nameInput =  createElement("input", {
        type: "text",
        placeholder: "Name",
        className:"text-name name"
    });
    const commentInput = createElement("textarea", {
        rows: 2,
        cols: 40,
        placeholder: "comment",
        className: "comment-text"
    })

    const postBtn =  createElement("button", {
        innerText: "Post",
        className: "post"
    })

    const cancelBtn = createElement("button", {
        innerText: "Cancel",
        className: "cancel"
    })

    const btnHolder = createElement("div", {
        className: "btn-holder"

    }, postBtn, cancelBtn);

    const commentInputContianer = createElement("div", {className: "comment-input-container"},nameInput, commentInput, btnHolder)
    return commentInputContianer;
}

const firstComment = createComment("Anoop", "Lets create")
commentContainer.append(firstComment);
console.log(createCommentInput());

let isCommentOn = false;
commentContainer.addEventListener("click", function(event) {
    const clickedEvent=  event.target;
    if(clickedEvent.tagName === "BUTTON") {
        if(clickedEvent.classList.contains("reply") && !isCommentOn) {
            isCommentOn = true;
            clickedEvent.closest(".main-comment").nextElementSibling.append(createCommentInput())
            return;
        }

        if(clickedEvent.classList.contains("post")) {
            isCommentOn = false;
            const commentInput= clickedEvent.closest(".comment-input-container");
            const name = commentInput.children[0].value;
            const text=  commentInput.children[1].value;

            if(name && text) {
                clickedEvent.closest(".sub-comment-container").append(createComment(name, text));
            }

            commentInput.remove();
            return;
        }

        if(clickedEvent.classList.contains("cancel")) {
            isCommentOn = false;
            clickedEvent.closest(".comment-input-container").remove();
            return;
        }
    }
})