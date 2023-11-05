# E-Commerce Project - UzShop

## Table of Contents

1. [Introduction](#introduction)
2. [Features](#features)
3. [Technologies](#technologies)
4. [Setup](#setup)
5. [Usage](#usage)
6. [Contributing](#contributing)
7. [TODO](#todo)

## Introduction

An eCommerce project built with ReactJS, Redux, and Firebase for user authentication.

## Features

- User authentication
- Product browsing and cart management
- Checkout and order placement

## Technologies

- ReactJS
- Redux
- Firebase
- Other dependencies

## Setup

1. Clone this repository.
2. Install dependencies:

```bash
npm install
```

4.  Configure Firebase credentials in `.env` or config file.

## Usage

- Development:
  ```
  npm start
  ```
  The development server runs at `http://localhost:3000`.
- Production:
  ```
  npm run build
  ```
  Find the optimized build in the `build` directory, ready for deployment.

## Contributing

Contributions to this project are welcome! If you'd like to contribute, please follow these guidelines:

1. **Issues:** If you find a bug or have a suggestion, please [open an issue](https://github.com/IkboljonMe/uzshop-ecommerce/issues) to discuss it.

2. **Pull Requests:** To contribute code or documentation, submit a pull request to the [GitHub repository](https://github.com/IkboljonMe/uzshop-ecommerce/pulls).

3. **Coding Standards:** Ensure that your code follows the project's coding standards and conventions. If any guidelines or specific practices are required, mention them in the pull request description.

4. **Documentation:** Update the documentation, including the README file, if your changes impact how the project is used.

Thank you for your contributions to this project!

## TODO

- [ ] Add more auth methods(like Google, Github and etc)
- [ ] Better login and register.
- [ ] Forgot password
- [ ] Strong password, double check, if user is authenticated, navigate to login
- [ ] Save user in **localStorage**
