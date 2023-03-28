const express = require("express");
const router = express.Router();

/**
 * GET product list.
 *
 * @return product list | empty.
 */

const ERC20_ABI =[
  'function name() view returns(string)',
  'function symbol() view returns(string)',
  'function totalSupply() view returns(uint256)',
  'function balanceOf(address) view returns(uint)'
]

const address = '0x6B175474E89094C44Da98b954EedeAC495271d0F'
const contract = new ethers.Contract(address, ERC20_ABI,provider)

let name
let symbol
let totalSupply
let balance

const main =  async() =>{
   name = await contract.name()
   symbol = await contract.symbol()
   totalSupply = await contract.totalSupply()
   balance = await contract.balanceOf('0x837c20D568Dfcd35E74E5CC0B8030f9Cebe10A28')
}

router.get("/", async (req, res) => {
  try {
    res.json({
      status: 200,
      message: "Get data has successfully",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send("Server error");
  }
});

router.get('/dai',async()=>{
  main()
  res.send(`\nReading from address ${await address}
    \n Name: ${await name}
    \nSymbol: ${await symbol}
    \nTotal Supply: ${ await totalSupply}
    \nBalance: ${ethers.utils.formatEther(await balance)}
    `)
})



module.exports = router;
