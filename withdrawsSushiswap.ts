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
      logIndex
      outputTokenAmount
      timestamp
      to
    }
  }
`;

const endpoint = `https://gateway.thegraph.com/api/${api_key}/subgraphs/id/7h1x51fyT5KigAhXd8sdE3kzzxQDJxxz1y66LTFiC3mS`;
const client = new GraphQLClient(endpoint);

// client.request(query)
// .then((data) => {
//     console.log(data);
// })
// .catch((error) => {
//     console.error(error);
// })

async function withdrawsSushiswap() {
  try {
    const data = await client.request(query);
    console.log(data);
  } catch(error) {
    console.error(error);
  }
}

(async () => {
  try {
    await withdrawsSushiswap();
  } catch(error) {
    console.log(error);
  }
})();

withdrawsSushiswap();