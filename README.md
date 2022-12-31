# Frontend assignment exercise

## Assignment

### Returning the finished exercise

We would like to get the assignment back from you 48 hours before the second interview. We prefer to receive it via email to the address you have from the recruiter:
* Use a file transfer service like wetransfer or Google Drive, store the assignment and share the location with us

### Goal

The goal of this assignment is to convert the provided designs below to a working frontend using HTML, CSS and JS. Please refrain from using react, if you really need to you can, but please build the main requested UI elements (FAQ and modal) yourself. 

- [Homepage - Desktop](designs/Red%20Alert%20-%20Homepage%20-%20Desktop.png)
- [Homepage - Mobile](designs/Red%20Alert%20-%20Homepage%20-%20Mobile.png)
- [More Information Popup - Desktop](designs/Red%20Alert%20-%20More%20Information%20Popup%20-%20Desktop.png)
- [Q&A Expanded - Mobile](designs/Red%20Alert%20-%20Q&A%20Expanded%20-%20Mobile.png)

### Scope

- [ ] Responsive design
- [ ] Accessible
- [ ] Being able to open and close the FAQ items
- [ ] Only one FAQ item is allowed to be open
- [ ] Being able to open and close the modal box
- [ ] Compatible with latest Chrome and Firefox versions 

## Design specifics

- Colors used:
    - Dark grey: `#2B2D42`
    - Grey: `#8D99AE`
    - Light grey: `#EDF2F4`
    - Dark red: `#7F1028`
    - Light red: `#AD646D`
    - White: `#FFFFFF` 
- Font used is `Helvetica`
- Static assets
    - [Product image 1 png](./public/assets/images/product-1-transparent.png)
    - [Product image 1 webp](./public/assets/images/product-1-transparent.webp)
    - [Product image 2 png](./public/assets/images/product-2-transparent.png)
    - [Product image 2 webp](./public/assets/images/product-2-transparent.webp)

## Usage

### Global dependencies

Make sure you have Node 14 installed. The project supports nvm:
- [Node.js](https://nodejs.org/)
- [nvm](https://github.com/nvm-sh/nvm)

### Install dependencies

```
npm install
```

### Run development server

```
npm run dev
```

Will open your default browser to http://localhost:8080

Webpack will watch for changes in the `./src` directory and output the bundled assets to `./public/assets`. In parallel, the development server will watch for changes in the `./public` directory and hot reload the browser.

### Build production bundles

```
npm run build
```

Will compile, minify and autoprefix Sass to CSS. Will Minify and uglify JavaScript and output the bundled assets to `./public/assets`.

### Assets

All the `designs, icons and images` needed to implement the designs are added to the `./public/assets/images` directory.

## Stack

The boilerplate consists of following tech stack and should run out of the box with a basic setup - 

- Webpack
- Sass compilation (and minification/autoprefixing in production)
- ES6+ transpilation (and minification/uglyfication in production)
- ES Modules

## Questions

- Q: How much time do I have?
- A: Try to limit your time to 4 hours total.

- Q: Can I use React or another framework or library?
- A: Yes if you really want to, but please build the main requested UI elements (FAQ and modal) yourself.

If you have any other questions while working on the exercise feel free to reach out. We will be happy to help.

Happy coding!
