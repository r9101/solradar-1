export default function handler(req, res) {
  res.status(200).json({
    tokens: [
      {
        mint: "So11111111111111111111111111111111111111112",
        supply: "1,000,000",
        decimals: 9,
        creator: "ExampleCreatorWallet",
        mintAuthority: "MintAuthorityWallet",
        priceUSD: 0.0012,
        marketCap: 1200,
        exchangeHolders: [
          { exchange: "MEXC", totalBalance: 20000 },
          { exchange: "Gate", totalBalance: 15000 }
        ],
        interactedWithKnownLaunchers: ["LauncherWallet1", "LauncherWallet2"]
      }
    ]
  });
}