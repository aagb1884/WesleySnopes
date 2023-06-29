# Wesley Snopes - a factchecking app

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## How it works

This app allows users to input a true/false query into the text box, click 'Is This True?' and see whether Wesley Snipes thinks it is true. 

## How it actually works

There is an array of images, each of Wesley Snipes with a short pithy statement regarding truth, and clicking 'Is This True?' selects a random image from this array. The text input is unrelated to the image that is selected.

useState is used for setting the image, user query and click status with a conditional useEffect based on whether the button is clicked.

useState is also used to clear all the info using the 'Clear' button.

The header CSS is from [here](https://freefrontend.com/css-text-effects/).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### Alternatively

You can just view the app [here](https://wesleysnopes.surge.sh/).


