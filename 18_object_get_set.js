const User = {
    _email: 'h@hc.com',
    _password: "abc",

    get email() {
        return this._email.toUpperCase();
    },

    set email(value) {
        this._email = value;
    }
}

const tea = Object.create(User);
console.log(tea.email); // Output: H@HC.COM

// You can also use the setter
tea.email = 'new@email.com';
console.log(tea.email); // Output: NEW@EMAIL.COM
