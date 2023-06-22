import { GraphQLClient } from 'graphql-request';
require('dotenv').config();
const api_key = process.env.SubgraphApi;

const query = `
query {
    deposits {
      amount
      amountUSD
      blockNumber
      hash
      id
      logIndex
      nonce
      timestamp
    }
  }
`;

const endpoint = `https://gateway.thegraph.com/api/${api_key}/subgraphs/id/6tGbL7WBx287EZwGUvvcQdL6m67JGMJrma3JSTtt5SV7`;
const client = new GraphQLClient(endpoint);

// client.request(query)
// .then((data) => {
//     console.log(data);
// })
// .catch((error) => {
//     console.error(error);
// })

async function depositsSushiswap() {
  try {
    const data = await client.request(query);
    console.log(data);
  } catch(error) {
    console.error(error);
  }
}

(async () => {
  try {
    await depositsSushiswap();
  } catch(error) {
    console.log(error);
  }
})();

depositsSushiswap();

