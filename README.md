# secure-password

This is a utility to secure your password.  
Basically you provide a value and it encrypts it to `aes-256-gcm` encoding.
You can use the generated value to again decode the password if you ever need it.

## Using it

Make sure you have [**NodeJS**](https://nodejs.org) installed on your machine.

1. Clone this repo or download the latest build files in the releases section.
2. Extract the files.
3. Copy the contents of the `example-env` file, create a new file called `.env` and then paste the content you copied there.
4. Run `npm install` or `yarn install`.
5. Build the src by running the command `npm run build` or `yarn build`.
6. Run the generated output by running `npm start` or `yarn start`.
7. That's it!
