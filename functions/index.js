/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const pug = require("pug");

exports.about = onRequest((request, response) => {
    let template = pug.compileFile('views/about.pug');
    let markup = template();
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.end(markup);
});

exports.contact = onRequest((request, response) => {
    let template = pug.compileFile('views/contact.pug');
    let markup = template();
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.end(markup);
});

exports.home = onRequest((request, response) => {
    let template = pug.compileFile('views/home.pug');
    let markup = template();
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.end(markup);
});

