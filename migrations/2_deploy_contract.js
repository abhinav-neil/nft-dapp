const contract = artifacts.require('NFT');

module.exports = function (deployer) {
  deployer.deploy(contract, "NFT", "NFT", "https://opensea-creatures-api.herokuapp.com/api/creature/", 3);
};
