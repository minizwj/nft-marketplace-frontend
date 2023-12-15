import { ethers } from 'ethers';
import ABI from '../contracts/cUSDT.json';

let provider = new ethers.BrowserProvider(window.ethereum)
const contractAddress = "0xd9145CCE52D386f254917e481eB44e9943F39138";

export async function approve(spender, amount) {
  const contract = new ethers.Contract(contractAddress, ABI, await provider.getSigner());
  const result = await contract.approve(spender, amount);
  console.log(result.hash);
}

export async function getAllowance(owner, spender) {
  const contract = new ethers.Contract(contractAddress, ABI, await provider.getSigner());
  const result = await contract.allowance(owner, spender);
  return Number(result);
}

