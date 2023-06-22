import { GraphQLClient } from 'graphql-request';

const query = `
query {
    borrows {
      action
      amount
      assetPriceUSD
      borrowRate
      borrowRateMode
    }
  }
`;

const endpoint = 'https://api.thegraph.com/subgraphs/name/aave/protocol-v2';
const client = new GraphQLClient(endpoint);

// client.request(query)
// .then((data) => {
//     console.log(data);
// })
// .catch((error) => {
//     console.error(error);
// })

async function borrowsAave() {
  try {
    const data = await client.request(query);
    console.log(data);
  } catch(error) {
    console.error(error);
  }
}

(async () => {
  try {
    await borrowsAave();
  } catch(error) {
    console.log(error);
  }
})();

borrowsAave();