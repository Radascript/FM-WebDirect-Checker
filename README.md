## Synopsis
This is a WebChecker for Filemaker WebDirect. It uses Node JS, Headless Chrome, Puppeteer and Nodemailer.
It goes to your Filemaker Webdirect Sample page, scans it, and emails you if it's down with a PNG screenshot of the page attached.

## Dependencies
Must have [Google Chrome](https://www.google.ca/chrome/browser/features.html)
Must have [Node JS](https://nodejs.org/en/)

## Setup
Download / clone the repository.
Install Node and/or Chrome if you don't have them.

Navigate to the repository from the command line.

Add Puppeteer to your directory with:
node i Puppeteer

Add Nodemailer to your directory with:
node i Nodemailer

All the setup for email, string to check against and file name should be done through config.js.
Add the schedule in your task scheduler to run the index.js file from this directory with the frequency of your choise.