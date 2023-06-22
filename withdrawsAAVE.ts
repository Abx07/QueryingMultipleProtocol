import { GraphQLClient } from 'graphql-request';
require('dotenv').config();
const api_key = process.env.SubgraphApi;

const query = `
query {
    withdraws {
      amount
      amountUSD
      blockNumber
      hash
      nonce
      timestamp
      logIndex
      id
    }
  }
`;

const endpoint = `https://gateway.thegraph.com/api/${api_key}/subgraphs/id/HB1Z2EAw4rtPRYVb2Nz8QGFLHCpym6ByBX6vbCViuE9F`;
const client = new GraphQLClient(endpoint);

// client.request(query)
// .then((data) => {
//     console.log(data);
// })
// .catch((error) => {
//     console.error(error);
// })

async function withdrawsAave() {
  try {
    const data = await client.request(query);
    console.log(data);
  } catch(error) {
    console.error(error);
  }
}

(async () => {
  try {
    await withdrawsAave();
  } catch(error) {
    console.log(error);
  }
})();

withdrawsAave();