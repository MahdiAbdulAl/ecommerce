window.bootstrap = require('bootstrap/dist/js/bootstrap.bundle.js');
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";
import "../node_modules/@fortawesome/fontawesome-free/js/all.min"   

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))