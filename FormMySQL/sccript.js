document.querySelector('.submit').addEventListener('click', function () {
    const name = String(document.querySelector('.name').value);
    const gender = String(document.querySelector('.gender').textContent);
    const age = Number(document.querySelector('.age').value);
    const phoneNum = Number(document.querySelector('.phone').value);

    console.log(`Name : ${name} , ${typeof name}`);
    console.log(`Gender : ${gender} , ${typeof gender}`);
    console.log(`Age : ${age} , ${typeof age}`);
    console.log(`phone Number : ${phoneNum} , ${typeof phoneNum}`);


    alert(`record saved!!!`);
    const pet = prompt(`do you have a pet?`);
    console.log(pet);
});