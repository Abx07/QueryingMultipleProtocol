import { GraphQLClient } from 'graphql-request';
require('dotenv').config();
const api_key = process.env.SubgraphApi;

const query = `
query {
    withdraws {
      amountUSD
      blockNumber
      from
      hash
      id
      inputTokenAmounts
      outputTokenAmount
      timestamp
      to
      logIndex
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

async function withdrawsUniswap() {
  try {
    const data = await client.request(query);
    console.log(data);
  } catch(error) {
    console.error(error);
  }
}

(async () => {
  try {
    await withdrawsUniswap();
  } catch(error) {
    console.log(error);
  }
})();

withdrawsUniswap();