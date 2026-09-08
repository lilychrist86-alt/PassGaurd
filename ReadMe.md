# 🔐 PassGaurd

### Secure Password Generator & Local Password Manager

> Generate strong passwords. Save them locally. Stay in control.

PassGaurd is a clean, privacy-focused password generator and lightweight password manager built using vanilla JavaScript.

It allows users to generate strong and unpredictable passwords using the browser's **Web Crypto API**, copy them instantly, and save them locally with a custom label such as Facebook, Gmail, Instagram, or any other service.

Everything happens directly inside your browser.

---

## ⚠️ Note

This README was created with AI because writing documentation is also a valid use of AI. 

However, I strongly believe that AI should not replace learning.

Use AI to:

* Understand difficult concepts
* Debug errors
* Learn new technologies
* Get explanations

Don't blindly copy-paste code without understanding it.

The goal should be:

> **Use AI as a teacher, not as a replacement for your brain.**

---

#  Features

## Password Generation

*  Cryptographically secure random password generation
*  Optional numbers
*  Optional uppercase letters
*  Optional symbols
*  Adjustable password length
*  One-click password copying
*  Unpredictable character selection

## Password Saving

*  Save generated passwords directly in the browser
*  Add a custom label for each password
*  Example labels: Gmail, Facebook, Instagram, etc.
*  View previously saved passwords
*  Saved passwords remain available after page refresh
*  Uses browser Local Storage for data persistence

## Interface

*  Responsive design
*  Clean and minimal UI
*  Fast and lightweight
*  No frameworks
*  No unnecessary dependencies

---

# 🔒 Security

PassGaurd is built with security-conscious principles.

## Cryptographically Secure Randomness

Password characters are selected using the browser's **Web Crypto API** instead of `Math.random()`.

The Web Crypto API provides cryptographically secure random values and is designed for security-sensitive operations.

This makes the generated passwords significantly less predictable than passwords generated using basic pseudo-random methods.

---

## Generated Locally

Passwords are generated directly inside your browser.

PassGaurd does not require a backend server to generate passwords.

This means your generated passwords are created locally on your device.

---

## Local Password Storage

Saved passwords are stored using your browser's **Local Storage**.

The saved data remains inside your browser and is not sent to an external server by PassGaurd.

However, this project is currently intended as an educational and portfolio project.

For highly sensitive accounts, dedicated password managers with encryption and zero-knowledge architecture are recommended.

---

#  How It Works

### Generating a Password

1. Choose your desired password length.
2. Select the character types you want.
3. PassGaurd creates a character pool.
4. The Web Crypto API generates secure random values.
5. Random characters are selected from the pool.
6. The final password is displayed.
7. Copy the password with a single click.

---

### Saving a Password

1. Generate a password.
2. Click the save button.
3. Enter what the password is for.
4. For example: Gmail, Facebook, Instagram, etc.
5. The password and its label are stored in browser Local Storage.
6. You can view your saved passwords later.

---

#  Technologies Used

* **HTML5**
* **CSS3**
* **JavaScript**
* **Web Crypto API**
* **Browser Local Storage**
* **Google Fonts**

No frameworks.

No external libraries.

Just vanilla web technologies.

---

#  Project Structure

```text
PassGaurd/
│
├── index.html
├── Style.css
├── Script.js
├── SavedPassword.html
├── SavedPassword.css
├── SavedPassword.js
└── README.md
```

---

#  Design Philosophy

PassGaurd follows a simple design philosophy:

> **Security → Clarity → Usability**

The interface avoids unnecessary elements and focuses on the most important actions:

* Generate a password
* Customize the password
* Copy it easily
* Save it for later

The goal is to make password generation feel simple without sacrificing the feeling of security and professionalism.

---

#  Future Improvements

Possible future updates include:

* Password strength analysis
* Password entropy estimation
* Search saved passwords
* Delete individual saved passwords
* Edit saved password labels
* Password categories
* Dark/light theme support
* Improved accessibility
* Better mobile optimization
* Export and import saved passwords
* Encrypted local password storage

---

# ⚠️ Important Security Note

No password generator can make an account completely immune to compromise.

PassGaurd helps generate strong and difficult-to-predict passwords, but account security also depends on several other factors:

* Website security
* Account recovery methods
* Multi-factor authentication
* Device security
* How passwords are stored

For better security:

* Use a unique password for every account.
* Avoid reusing passwords.
* Enable **Multi-Factor Authentication (MFA)** whenever possible.
* Use a trusted password manager for highly sensitive accounts.

---

#  Author

**Designed & Developed by Shrijib Dey**

PassGaurd was created as a project to explore:

* Secure random password generation
* The Web Crypto API
* Browser Local Storage
* JavaScript DOM manipulation
* Frontend UI/UX design

This project represents my journey of learning and building with core web technologies.

---

#  License

This project is available for personal and educational use.

You are welcome to explore and learn from the project.

If you modify or redistribute the project, please consider keeping the original author credit.

---

### ⭐ If you like this project, consider giving the repository a star!

**PassGaurd — Generate Strong. Save Securely. Stay Protected. 🔐**
