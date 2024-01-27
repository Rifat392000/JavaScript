function User(email, password) {
    this._email = email;
    this._password = password;

    Object.defineProperty(this, 'email', {
        get: function () {
            return this._email.toUpperCase();
        },
        set: function (value) {
            this._email = value;
        }
    });

    Object.defineProperty(this, 'password', {
        get: function () {
            return `ABC${this._password}`;
        },
        set: function (value) {
            this._password = value;
        }
    });
}

const admin = new User("admin@admin.com", "admin");
console.log(admin.email);
console.log(admin.password);
console.log(admin._password);
