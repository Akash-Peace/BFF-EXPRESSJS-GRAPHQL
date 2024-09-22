<!-- PROJECT LOGO -->
<p align="center">
  <img src="https://github.com/Akash-Peace/BFF-EXPRESSJS-GRAPHQL/blob/main/Screenshot/BFF_logo.png" alt="Logo" width="150" height="150">
  <h3 align="center">BFF Service</h3>
  <p align="center">
    <a href="https://blog.bitsrc.io/bff-pattern-backend-for-frontend-an-introduction-e4fa965128bf"><strong>A Backend-For-Frontend Pattern</strong></a>
    <br />
    <br />
    <a href="#test-the-service">Test the service</a>
    ·
    <a href="https://github.com/Akash-Peace/BFF-EXPRESSJS-GRAPHQL/issues">Report Bug</a>
    ·
    <a href="https://github.com/Akash-Peace/BFF-EXPRESSJS-GRAPHQL/issues">Request Feature</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#about-the-project">About The Project</a></li>
    <li><a href="#built-with">Built With</a></li>
    <li><a href="#powered-by">Powered By</a></li>
    <li><a href="#encryption-support">Encryption support</a></li>
    <li><a href="#test-the-service">Test the service</a></li>
    <li><a href="#specifications-of-the-files-used">Specifications of the files used</a></li>
    <li><a href="#screenshots">Screenshots</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#my-system-spec">My System Spec</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

The BFF (Backend-For-Frontend) service objective is to deliver a multiple AI-generated response from different AI platforms in a single run, the client need not want to make multiple API requests for different AI services for the same prompt. Making a single call with appropriate queries to this BFF layer will do the thing. To highlight one use case, if users need to cross-verify their answers on multiple AI platforms, they need to open various AI sites and repeat the same prompt on each tab, which is a time-consuming process. To avoid such use cases, we can consume this BFF service and integrate it with any mode of platform. I implemented this service with [ExpressJS](https://expressjs.com/) on top of [NodeJS](https://nodejs.org/en), ExpressJS is a popular NodeJS framework for building efficient BFF layers. Its modular architecture, middleware capabilities, and strong community support make it an ideal choice for creating scalable and maintainable BFFs. The data access layer is handled by [GraphQL](https://graphql.org/), which helps to receive the specific data by querying, Unlike traditional REST APIs that often return fixed, large JSON payloads (including unnecessary fields), GraphQL allows the frontend to request exactly the data it needs, minimizing payload size. Hosted the service in [Render cloud](https://dashboard.render.com/web/srv-crmr7bd6l47c739v0emg) and it's live now! [MIT](https://github.com/Akash-Peace/BFF-EXPRESSJS-GRAPHQL/blob/main/LICENSE) licenses this project. If you like this project, please give it a _star_ and follow me.

## Built With

* [ExpressJS](https://expressjs.com/)
* [GraphQL](https://graphql.org/)
* [NodeJS](https://nodejs.org/en)
* [JavaScript](https://www.javascript.com/)


## Powered By

* [Render cloud](https://dashboard.render.com/web/srv-crmr7bd6l47c739v0emg)


## Encryption support

To safeguard your API key and prevent unauthorized access, our project offers a secure encryption mechanism. Simply encrypt your API key using the below steps, and pass the encrypted value to our service. We'll handle the decryption process internally, ensuring your API key remains confidential.
* Send the one-time request to get the server's public key (https://bff-expressjs-graphql.onrender.com/getPublicKey), [reference](https://github.com/Akash-Peace/BFF-EXPRESSJS-GRAPHQL/blob/main/Screenshot/BFF_public_key.png);
* Encrypt your API key with the help of a public key which is generated from the crypto library in Node.js and provides cryptographic functionality for secure communications with asymmetric (public/private key pairs) methods.
`Javascript:`
```
// to do a client-side encryption
function encryptData(apiKey) {
  return crypto.publicEncrypt(
      {
          key: publicKey,
          padding: crypto.constants.RSA_PKCS1_PADDING
      },
      Buffer.from(apiKey, 'utf8')
  ).toString('base64');
}
```
* While passing the encrypted API key, _isEncrypted_ query value should be _true_, else _false_.


## Test the service

Open the [postman](https://web.postman.co/workspace/My-Workspace~e1d61c7c-28a2-4e42-8d88-e4d256c8d9f1/import) tool and import the below curl to get started.
```
curl --location --request GET 'https://bff-expressjs-graphql.onrender.com/' \
--header 'Content-Type: application/json' \
--data '{
    "query": "query($geminiPayload: Payload!) { gemini(payload: $geminiPayload) }",
    "variables": {
        "geminiPayload": {
            "apiKey": "Provide your encrypted or non-encrypted apikey here",
            "model": "Provide your model here (eg: gemini-1.5-flash)",
            "prompt": "Prompts go here",
            "isEncrypted": false
        }
    }
}'
```
Note: `gemini`, `chatgpt`, `claude` - use these keywords in the query to access the appropriate AI models, [reference](https://github.com/Akash-Peace/BFF-EXPRESSJS-GRAPHQL/blob/main/Screenshot/BFF_request_and_response.png).


## Specifications of the files used

```
typedef:
This file defines the GraphQL schema using Schema Definition Language (SDL). It describes the structure of your GraphQL API, including types, queries, mutations, and any custom scalars.

resolvers:
This file contains resolver functions that handle the logic for fetching or modifying data in response to GraphQL queries or mutations. Resolvers are responsible for interacting with data sources or services

app.js:
This file is the main entry point of your application where you set up the GraphQL server, integrate it with your web framework (like Express), and start the server

schema:
This file serves as a representation of the GraphQL schema in a format that can be used for documentation, introspection, or schema validation purposes.
```


## Screenshots

View [Screenshots](https://github.com/Akash-Peace/BFF-EXPRESSJS-GRAPHQL/blob/main/Screenshot/) here.


<!-- LICENSE -->
## License

Distributed under the MIT License. See [LICENSE](https://github.com/Akash-Peace/BFF-EXPRESSJS-GRAPHQL/blob/main/LICENSE) for more information.


## My System Spec

**OS:** [Ubuntu 24.04 LTS](https://ubuntu.com/)\
**Model:** Customized PC\
**Processor:** Intel i5 13th gen\
**Ram:** DDR5 16gb\
**Disk:** NVMe 100gb


<!-- CONTACT -->
## Contact

Akash.A,\
Computer Science Engineer,\
akashcse2000@gmail.com,\
8608550403,\
Chennai.


![GitHub metrics](https://metrics.lecoq.io/Akash-Peace)  

Follow me on

[<img src='https://github.com/Akash-Peace/INDUSTRIAL-WEBSITE/blob/main/images/linkedin.png' alt='linkedin' height='40'>](https://www.linkedin.com/in/akash-2000-cse) &nbsp; &nbsp; &nbsp; [<img src='https://github.com/Akash-Peace/INDUSTRIAL-WEBSITE/blob/main/images/instagram.png' alt='instagram' height='40'>](https://www.instagram.com/nocturnal_lad) &nbsp; &nbsp; &nbsp; [<img src='https://github.com/Akash-Peace/INDUSTRIAL-WEBSITE/blob/main/images/facebook.png' alt='facebook' height='40'>](https://www.facebook.com/profile.php?id=100061841000593) &nbsp; &nbsp; &nbsp; [<img src='https://github.com/Akash-Peace/INDUSTRIAL-WEBSITE/blob/main/images/twitter.png' alt='twitter' height='40'>](https://twitter.com/AkashA53184506) &nbsp; &nbsp; &nbsp; [<img src='https://github.com/Akash-Peace/INDUSTRIAL-WEBSITE/blob/main/images/pypi.png' alt='pypi' height='50'>](https://pypi.org/user/Akash-Peace/) &nbsp; &nbsp; &nbsp; [<img src='https://github.com/Akash-Peace/INDUSTRIAL-WEBSITE/blob/main/images/youtube.png' alt='youtube' height='45'>](https://www.youtube.com/channel/UCmugCO6k7hgSZqaI1jzbelw/featured) 
