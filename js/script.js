function sendRequest(method, url, data) {

    let promise = new Promise((resolve, reject) => {

        let xhr = new XMLHttpRequest(); //Create request object

        xhr.onload = function () {
            if (this.status >= 400) {
                reject(`An Error happened! The response status is ${this.status}`);

            } else {
                resolve(this.response);
            }

        }

        xhr.onerror = function () {
            reject("An Error happened!");
        }

        xhr.open(method, url);

        xhr.responseType = 'json';

        xhr.send(data);

    });
    return promise;
}

function getData() {
    sendRequest("GET", "https://jsonplaceholder.typicode.com/todos/1").then((responseData) => {
        console.log(responseData);
    }).catch((err) => {
        console.log(err);
    });
}

function sendData() {
    sendRequest("POST", "https://jsonplaceholder.typicode.com/posts",
        JSON.stringify({
            title: 'FOOD',
            body: 'BARBADOSE',
            userId: 1,
        }),).then((responseData) => {
            console.log(responseData);
        });
}

let getBtn = document.getElementById("get");
let sendBtn = document.getElementById("send");

getBtn.addEventListener('click', getData);
sendBtn.addEventListener('click', sendData);