let usersData = [];
let postsData = [];

async function fetchUser() {
    await fetch("https://jsonplaceholder.typicode.com/users")
        .then(function (response) {
            return response.json();
        })
        .then(function (users) {
            usersData = users;
            console.log(users);

            if (postsData.length) {
                displayUserNames();
            }
        })
        .catch(function (error) {
            alert('Error fetching users:', error);
        });
}

async function fetchPosts() {
    await fetch("https://jsonplaceholder.typicode.com/posts")
        .then(function (response) {
            return response.json();
        })
        .then(function (posts) {
            postsData = posts;
            console.log(posts);

            if (usersData.length) {
                displayUserNames();
            }
        })
        .catch(function (error) {
            alert('Error fetching posts:', error);
        });
}

function displayUserNames() {
    const container = document.getElementById("user-post-container");
    container.innerHTML = '';

    usersData.forEach(user => {
        const userDiv = document.createElement("div");
        userDiv.classList.add("user");

        const buttonId = `more-button-${user.id}`;

        userDiv.innerHTML = `
            <h2 class="user-name">${user.name}</h2>
            <button id="${buttonId}"><img src="./assets/add-icon-24.png" alt="More"></button>
        `;

        // Adding a click event listener to toggle user posts and button visibility
        userDiv.addEventListener("click", function () {
            toggleUserPosts(userDiv, user.id);
            toggleButtonVisibility(buttonId);
        });

        container.appendChild(userDiv);
    });
}

function toggleButtonVisibility(buttonId) {
    const button = document.getElementById(buttonId);
    if (button.style.display === 'none') {
        button.style.display = 'block';
    } else {
        button.style.display = 'none';
    }
}

function toggleUserPosts(userDiv, userId) {
    let postContainer = userDiv.querySelector(".posts-container");

    if (postContainer) {
        userDiv.removeChild(postContainer);
    } else {
        postContainer = document.createElement("div");
        postContainer.classList.add("posts-container");
        postContainer.innerHTML = `
            <h3>User ID: ${userId}</h3>
            <h3>Posts:</h3>
        `;

        const postList = document.createElement("ul");

        postsData
            .filter(post => post.userId === userId)
            .forEach(post => {
                const postItem = document.createElement("li");
                postItem.innerHTML = `
                    <strong>Title:</strong> ${post.title} <br>
                    <strong>Body:</strong> ${post.body}
                `;
                postList.appendChild(postItem);
            });

        postContainer.appendChild(postList);
        userDiv.appendChild(postContainer);
    }
}

fetchUser();
fetchPosts();