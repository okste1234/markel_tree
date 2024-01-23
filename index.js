const { MerkleTree } = require('merkletreejs')

const SHA256 = require('crypto-js/sha256')


const addresses = [
    '0x1234567890123456789012345678901234567890',
    '0xabcdefabcdefabcdefabcdefabcdefabcdefabcdef',
    '0x5555555555555555555555555555555555555555'
];
const leaves = addresses.map(x => SHA256(x));

const tree = new MerkleTree(leaves, SHA256);
const root = tree.getRoot().toString('hex');
const leafToVerify = SHA256('0x1234567890123456789012345678901234567890');
const proof = tree.getProof(leafToVerify);

console.log(tree.verify(proof, leafToVerify, root));



// const badLeaves = ['a', 'x', 'c'].map(x => SHA256(x))
// const badTree = new MerkleTree(badLeaves, SHA256)
// const badLeaf = SHA256('x')
// const badProof = badTree.getProof(badLeaf)
// console.log(badTree.verify(badProof, badLeaf, root))