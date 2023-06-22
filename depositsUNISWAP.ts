import { GraphQLClient } from 'graphql-request';
require('dotenv').config();
const api_key = process.env.SubgraphApi;

const query = `
query {
    deposits {
      amountUSD
      blockNumber
      from
      hash
      inputTokenAmounts
      id
      outputTokenAmount
      logIndex
      timestamp
      to
    }
  }
`;

const endpoint = `https://gateway.thegraph.com/api/${api_key}/subgraphs/id/ELUcwgpm14LKPLrBRuVvPvNKHQ9HvwmtKgKSH6123cr7`;
const client = new GraphQLClient(endpoint);

// client.request(query)
// .then((data) => {
//     console.log(data);
// })
// .catch((error) => {
//     console.error(error);
// })

async function depositsUNISWAP() {
  try {
    const data = await client.request(query);
    console.log(data);
  } catch(error) {
    console.error(error);
  }
}

(async () => {
  try {
    await depositsUNISWAP();
  } catch(error) {
    console.log(error);
  }
})();

depositsUNISWAP();