![](https://img.shields.io/badge/Microverse-blueviolet)

# Hello Rails-React

> This project is an introduction for Ruby on  Rails working with React.

## Built With

Ruby >= 3.0.0

Rails >= 7.0.0

Postgresql >= 12.9

nodejs >= 16.13

react >= 17.0

## Getting Started

- To get a local copy of the repository please run the following commands on your terminal:
   ```
   git clone https://github.com/nachosala89/hello-rails-react.git
   ```
- Go to the cloned directory with `cd hello-rails-react`
- Run `bundle install` to install the necessary packages for rails
- Run `npm install` or `yarn install` to install the necessary packages for react
- Install the `postgresql` database and all necessary dependencies (if you are on Ubuntu just run `sudo apt install postgresql postgresql-contrib`)
- Run `rails db:create` and `rails db:migrate` to create the database locally
  - If you already have one with the same name just run `rails db:reset` instead
- After installing everything, you can run now the website with `rails s`
- In another terminal run `./bin/webpack-dev-server` to make webpack recompile after every modification

<details>
  <summary>Running linters</summary>
  - Rubocop (Ruby code linter), run: `rubocop`
  - Stylelint (CSS linter), run: `npx stylelint "**/*.{css,scss}"`
  - ESLint (JS and JSX linter), run: `npx eslint .`
</details>

## Author

👤 **Nacho Sala**

- GitHub: [@nachosala89](https://github.com/nachosala89)
- Twitter: [@nachosala89](https://twitter.com/nachosala89)
- LinkedIn: [Juan Ignacio Sala](https://www.linkedin.com/in/nacho-sala)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](../../issues/).

## Show your support

Give a ⭐️ if you like this project!

## Acknowledgments

- Microverse

## 📝 License

This project is [MIT](./LICENSE) licensed.