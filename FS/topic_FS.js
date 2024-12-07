const fs = require('fs');

//notes:-
const fsMethods =
{
  writeFile: "create a new file",
  appendFile: "add data to file",
  rename,
  copyFile,
  unlink : "deleteFile"
}

const callingFs = (type) => {
  switch (type) {
    case "write":
      fs.writeFile("fs-test.txt", "fs testing", function (err) {
        if (err) {
          console.error(err);
        } else {
          console.log("File written successfully");
        }
      });
      break;

    case "append":
      fs.appendFile("fs-test.txt", " append testing", function (err) {
        if (err) {
          console.error(err);
        } else {
          console.log("File appended successfully");
        }
      });
      break;

    case "rename":
      fs.rename("fs-test.txt", "fs-test-renamed.txt", function (err) {
        if (err) {
          console.error(err);
        } else {
          console.log("File renamed successfully");
        }
      });
      break;

    case "copy":
      fs.copyFile("./fs-file/fs-test.txt", "./fs-file/copy-file.txt", function (err) {
        if (err) {
          console.error(err);
        } else {
          console.log("File copied successfully");
        }
      });
      break;

    case "delete":
      fs.unlink("./fs-file/fs-test.txt", function (err) {
        if (err) {
          console.error(err);
        } else {
          console.log("File deleted successfully");
        }
      });
      break;

    default:
      console.error("Invalid type specified. Please use 'write', 'append', or 'rename'.");
      break;
  }
};

// Example usage:
callingFs("copy");
