import Token from "../models/Token";

const tokens = [
  {
    name: 'Starbucks Loyalty Point',
    symbol: 'STB',
    deployedAddress: '0xf5BE20C709cD2D9eA5ee6bd2743f4f581032F39b',
    network: 4444,
    image: 'https://res.cloudinary.com/doc8edcms/image/upload/v1688353334/starbuck_ii5ask.svg'
  },
  {
    name: 'MCDonald Loyalty Point',
    symbol: 'MCD',
    deployedAddress: '0xd24E45978549eB00Ec5CDaC5CE805Bc945aA3b8b',
    network: 4444,
    image: 'https://res.cloudinary.com/doc8edcms/image/upload/v1688353334/MDP_oo1qot.svg'
  },
  {
    name: 'Walmart Loyalty Point',
    symbol: 'WLP',
    deployedAddress: '0xd4b7eD2b9F55146d993b471A6373237053af62cB',
    network: 8888,
    image: 'https://res.cloudinary.com/doc8edcms/image/upload/v1688353334/WMP_cn4gou.svg'
  },
  {
    name: 'Singapore Airlines Loyalty Point',
    symbol: 'SAP',
    deployedAddress: '0xe7004347d7460A77D42B8A3e7390DccE7A63CB55',
    network: 4444,
    image: 'https://res.cloudinary.com/doc8edcms/image/upload/v1688353334/SAP_pc6a2i.svg'
  },
  {
    name: 'Highlands Loyalty Point',
    symbol: 'HLP',
    deployedAddress: '0x7715c99Ed32cFCB2768844873475Fccd2ea41E51',
    network: 8888,
    image: 'https://res.cloudinary.com/doc8edcms/image/upload/v1689671430/hlp_n8cwfh.svg'
  }
];

async function main() {
  for (const token of tokens) {
    await Token.updateOne(
      { name: token.name },
      {
        symbol: token.name,
        deployedAddress: token.deployedAddress,
        network: token.network,
        image: token.image
      },
      { upsert: true }
    );
  }
}

main()
  .then(() => console.log("DONE"))
  .catch(console.error)
  .finally(() => process.exit(0));