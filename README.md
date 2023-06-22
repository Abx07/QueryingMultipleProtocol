# GraphQL API Data Retrieval

This project demonstrates how to retrieve data from GraphQL APIs using the `graphql-request` library for multiple protocols. It includes scripts to fetch deposit and withdrawal data from different protocols using the GraphQL queries.

## Prerequisites

Before running the scripts, make sure you have the following:

- Node.js installed (version >= 12.0.0)
- API keys or access tokens for the GraphQL endpoints

## Installation

1. Clone the repository:

   ```
   git clone https://github.com//graphql-api-data-retrieval.git
   ````

2. Navigate to the project directory:

    ```
    cd graphql-api-data-retrieval
    ````

3. Install the dependencies:

    ```
    npm install
    ```

4. Create a .env file in the project root directory and add your API key:

    ```
    touch .env
    ```

Add the following line to the .env file:

    ```makefile
    SubgraphApi=your-api-key
    ```

Replace your-api-key with the actual API key or access token.

## Usage

### Deposits or Withdraws

To fetch deposits or withdraws data from protocol, run the following command:

    ```
    node <filename.js>
    ```


