import { Transaction, TransactionInstruction } from "@solana/web3.js";

export default function ixsToTx(
  ixs: Array<TransactionInstruction>
): Transaction {
  const tx = new Transaction();
  ixs.forEach((ix) => tx.add(ix));
  return tx;
}
