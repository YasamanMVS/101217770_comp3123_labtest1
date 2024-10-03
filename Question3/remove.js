// Yasaman Mirvahabi Sabet
// 101217770
// Question 3: File Module
// Remove Log files

const fs = require('fs');
const path = require('path');

// Logs directory
const logsDir = path.join(__dirname, 'Logs');

// // Removing the logs
if (fs.existsSync(logsDir)) {
    fs.readdirSync(logsDir).forEach((file) => {
        console.log(`Deleting file... ${file}`);
        fs.unlinkSync(path.join(logsDir, file));
    });
    fs.rmdirSync(logsDir);
    console.log('Logs directory deleted!');
} else {
    console.log('Logs directory does not exist!!');
}

// Second Version after add.js 

// // Removing the Logs
// if (fs.existsSync(logsDir)) {
//     fs.readdirSync(logsDir).forEach((file) => {
//         const filePath = path.join(logsDir, file);

//         if(fs.lstatSync(filePath).isFile()) {
//             console.log(`Deleting file... ${file}`);
//             fs.unlinkSync(filePath);
//         }
//     });
//     fs.rmdirSync(logsDir);
//     console.log('Logs directory deleted!!');
// } else {
//     console.log('Logs directory does not exist!!');
// }