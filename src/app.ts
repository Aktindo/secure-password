import * as dotenv from "dotenv";
import inquirer from "inquirer";
import Cryptr from "cryptr";
import chalk from "chalk";

dotenv.config();

console.log(
  chalk.green(`
█▀ █▀▀ █▀▀ █░█ █▀█ █▀▀   █▀█ ▄▀█ █▀ █▀ █░█░█ █▀█ █▀█ █▀▄
▄█ ██▄ █▄▄ █▄█ █▀▄ ██▄   █▀▀ █▀█ ▄█ ▄█ ▀▄▀▄▀ █▄█ █▀▄ █▄▀
`)
);

const cryptr = new Cryptr(process.env.CRYPTR_PASS || "secret");

inquirer
  .prompt([
    {
      type: "list",
      name: "typeOfOperation",
      message:
        "Hello there! Welcome to Secure Password, a utility that can be used to secure your passwords.\nPlease choose what you want to do below.",
      choices: ["Encode", "Decode"],
    },
    {
      type: "password",
      name: "password",
      message: "Enter the password: ",
    },
  ])
  .then((answers) => {
    const { typeOfOperation, password } = answers;

    if (typeOfOperation === "Encode") {
      const encodedPassword = cryptr.encrypt(password);
      console.log(
        `Your Input: ${password}\nEncoded Password: ${encodedPassword}\nYou can decode it by selecting the decode option.`
      );
    } else if (typeOfOperation === "Decode") {
      const decodedPassword = cryptr.decrypt(password);
      `Your Input: ${password}\nDecoded Password: ${decodedPassword}\nYou can encode it by selecting the decode option.`;
    }
  })
  .catch((e) => {
    console.log("Something went wrong:\n" + e);
  });
