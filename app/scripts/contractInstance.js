import { ethers } from "ethers";

const provider = new ethers.JsonRpcProvider("https://sepolia.infura.io/v3/SEU_INFURA_ID");

const enderecoContrato = "0x3016fBB168Dd1a1A15d5f05271C4F146D8f08283"; // Seu endereço na Sepolia

const abiContrato = [
  // Insira aqui o ABI do contrato gerado no Remix
];

const contrato = new ethers.Contract(enderecoContrato, abiContrato, provider);

export default contrato; // Essa linha garante que o módulo seja exportado corretamente!
