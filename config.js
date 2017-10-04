const config = {
//for mailing:
"smtp_host": "mail.neocodesoftware.com",
"smtp_port": "465",
"email_from": "support@neocode.com",
"email_from_name": "Neocode Support",
"user": "joshua",
"pass": "sungmikim",
"email_to": "emailrada@gmail.com",
"email_subject": "Marion WebDirect check failed",
"email_message": "Marion WebDirect failed the check. Attached is a screenshot of the test page",
"filename": "webd.png", //with png extention!

//for parsing through the page:
"page_address": "https://marion.neocodesoftware.com/fmi/webd/FMServer_Sample",
"check_str": "Tasks", //string present on the WebDir page when it isn't down
}

exports.config = config;