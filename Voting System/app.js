let voteArray = [];
let countArray = [];

function addName() {
    const nameInput = document.getElementById("nameInput");
    const name = nameInput.value;
    console.log(name);

    if (name) {
        voteArray.push(name);
        countArray.push(0);

        displayName();
    }
    nameInput.value = '';
}

function displayName() {
    const nameList = document.getElementById("nameList");
    nameList.innerHTML = '';

    for (let i = 0; i < voteArray.length; i++) {
        let vote = document.createElement("p");
        vote.textContent = `${i + 1}. ${voteArray[i]} : ${countArray[i]} votes`;

        vote.addEventListener("click", function() {
            countArray[i]++;
            displayName();
        });

        nameList.appendChild(vote);
    }
}
