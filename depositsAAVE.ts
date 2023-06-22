import { GraphQLClient } from 'graphql-request';

const query = `
query {
  deposits(first: 10, orderDirection: asc) {
    action
    amount
    assetPriceUSD
    id
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

async function depositsAave() {
  try {
    const data = await client.request(query);
    console.log(data);
  } catch(error) {
    console.error(error);
  }
}

(async () => {
  try {
    await depositsAave();
  } catch(error) {
    console.log(error);
  }
})();

depositsAave();

