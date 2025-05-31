import React, { useState } from "react";
import { Card, CardContent } from "./components/ui/card";
import { Input } from "./components/ui/input";
import { Button } from "./components/ui/button";

export default function SolRadarLanding() {
  const [txSig, setTxSig] = useState("");
  const [bundleData, setBundleData] = useState(null);

  const handleScan = async () => {
    if (!txSig) return;
    const response = await fetch(`/api/scan-bundle`);
    const data = await response.json();
    setBundleData(data);
  };

  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center gap-6 p-6">
      <div className="flex items-center gap-2">
        <Input
          value={txSig}
          onChange={(e) => setTxSig(e.target.value)}
          placeholder="Token address"
        />
        <Button onClick={handleScan}>CHECK</Button>
      </div>
      {bundleData && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl w-full">
          {bundleData.tokens.map((token, i) => (
            <Card key={i}>
              <CardContent>
                <div><strong>Mint:</strong> {token.mint}</div>
                <div><strong>Supply:</strong> {token.supply}</div>
                <div><strong>Decimals:</strong> {token.decimals}</div>
                <div><strong>Creator:</strong> {token.creator}</div>
                <div><strong>Mint Authority:</strong> {token.mintAuthority}</div>
                <div><strong>Price (USD):</strong> {token.priceUSD}</div>
                <div><strong>Market Cap:</strong> {token.marketCap}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}