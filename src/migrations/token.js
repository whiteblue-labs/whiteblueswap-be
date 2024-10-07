import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const tokenSchema = new mongoose.Schema({
  name: { type: String, required: true },
  symbol: { type: String, required: true },
  deployedAddress: { type: String, required: true },
  network: { type: Number, required: true },
  image: { type: String }
}, {
  timestamps: true
});

const Token = mongoose.model('Token', tokenSchema);

const tokens = [
  {
    name: 'USDT',
    symbol: 'USDT',
    deployedAddress: '0x73b4a58138CCcBDa822dF9449FeDA5eaC6669ebD',
    network: 84532,
    image: 'https://w7.pngwing.com/pngs/520/303/png-transparent-tether-united-states-dollar-cryptocurrency-fiat-money-market-capitalization-bitcoin-logo-bitcoin-trade-thumbnail.png'
  },
  {
    name: 'Tether USD',
    symbol: 'USDT',
    deployedAddress: '0x2728DD8B45B788e26d12B13Db5A244e5403e7eda',
    network: 11155111,
    image: 'https://w7.pngwing.com/pngs/520/303/png-transparent-tether-united-states-dollar-cryptocurrency-fiat-money-market-capitalization-bitcoin-logo-bitcoin-trade-thumbnail.png'
  },
];

async function main() {
  await mongoose.connect(process.env.MONGODB_URL);
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