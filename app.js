// console.log('hello');
// console.log('hello');
// console.log('hello');
// console.log('hello');
// console.log('hello');
// console.log('hello');

// for (let i = 0; i < 20; i++) {
//         console.log('Hello', i);
// }
// const names = ['Kanat', 'Sagyn', 'Aiperi']

// console.log(names [1]);
// console.log(names [4]);

// console.log(names);

// for (let i = 0; i < names.length; i++) {
//         console.log('Hello', names [i]);
// }

//    % 5 KOKA
//    % 3 KOLA 
// for (let san = 1; san < 51; san++) {
//     if (san % 5 == 0)
//         console.log('KOKA');
// }
// for (let san = 1; san < 51; san++) {
//     if (san % 3 == 0)
//         console.log('KOLA');
// }
// for (let san = 1; san < 51; san++) {
//     if (san % 5 == 0 && san % 3 == 0)
//         console.log('KOLA KOLA', san);
// }

// let name = 'Adahan' 

// for (let tamga = 0; tamga< name.length; tamga++  ) {
//     // console.log(name [tamga]);
//     if (name[tamga].toLowerCase() === 'a') {
//         console.log(name [tamga].toLowerCase());
//     }
// }

// for (const t of name ) {
//     if (t.toUpperCase() === 'A');
//     console.log(t.toUpperCase());
// }


// // for in 
// const user = {
//     name: 'Adahan',
//     age: 25,
//     gender: 'male'
// }

// // console.log(user.name);
// // console.log(user.age);
// // console.log(user['gender'] );

// for (const key in user) {
//     console.log(key, ':', user[key]);
// }

let btn1 = document.querySelectorAll('button')

for(let i = 0; i < btn1.length; i++) {
    btn1[i].onclick = function () {
    document.body.style.background = btn1[i].innerText
}
}







