import { MasterEditionV2 } from "@metaplex-foundation/mpl-token-metadata";
import { Connection, PublicKey } from "@solana/web3.js";
import findEditionPda from "pdas/findEditionPda";

export default async function getMasterEditionSupply(
  connection: Connection,
  mint: PublicKey
): Promise<number> {
  const [editionPda] = findEditionPda(mint);
  const edition = await MasterEditionV2.fromAccountAddress(
    connection,
    editionPda
  );
  return typeof edition.supply === "number"
    ? edition.supply
    : edition.supply.toNumber();
}
