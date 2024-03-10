// import avalanche from "./Img/a.png";
// import binance from "./Img/binance.png";
// import ethereum from "./Img/ethereum.png";
// import polygon from "./Img/polygon.png";

export const LaunchPadABI = [
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_fee",
				"type": "uint256"
			}
		],
		"name": "changeFeeForPoolCreation",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_fee",
				"type": "uint256"
			}
		],
		"name": "changeWithdrawFee",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address[]",
				"name": "_token_owner_admin_currency",
				"type": "address[]"
			},
			{
				"internalType": "string[]",
				"name": "_title_symbol_SocialMedia",
				"type": "string[]"
			},
			{
				"internalType": "uint256[]",
				"name": "_noOfTokens_price_max_min_vesting_month_start_end",
				"type": "uint256[]"
			},
			{
				"internalType": "string",
				"name": "_hash",
				"type": "string"
			},
			{
				"internalType": "address[]",
				"name": "_whitelist",
				"type": "address[]"
			}
		],
		"name": "createPresale",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_token",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_amount",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_title",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_time",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "_contract",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "_LP",
				"type": "bool"
			}
		],
		"name": "setLockContract",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [],
		"name": "admin",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "feeForPooCreation",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_token",
				"type": "address"
			}
		],
		"name": "getLockContract",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "Title",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "Amount",
						"type": "uint256"
					},
					{
						"internalType": "address",
						"name": "Contract",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "Time",
						"type": "uint256"
					},
					{
						"internalType": "bool",
						"name": "LP",
						"type": "bool"
					}
				],
				"internalType": "struct LaunchPad.tokenLockStruct[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getPoolDetails",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "ind",
						"type": "uint256"
					},
					{
						"internalType": "address",
						"name": "_address",
						"type": "address"
					},
					{
						"internalType": "address[]",
						"name": "_token_owner_admin_currency",
						"type": "address[]"
					},
					{
						"internalType": "string[]",
						"name": "_title_symbol_SocialMedia",
						"type": "string[]"
					},
					{
						"internalType": "uint256[]",
						"name": "_noOfTokens_price_max_min_vesting_month_start_end",
						"type": "uint256[]"
					},
					{
						"internalType": "string",
						"name": "_hash",
						"type": "string"
					},
					{
						"internalType": "address[]",
						"name": "_whitelist",
						"type": "address[]"
					},
					{
						"internalType": "uint256",
						"name": "investedBUSD",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "investedTokens",
						"type": "uint256"
					}
				],
				"internalType": "struct LaunchPad.Presale[]",
				"name": "",
				"type": "tuple[]"
			},
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "investedBUSD",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "investedTokens",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "liquidity",
						"type": "uint256"
					},
					{
						"internalType": "address",
						"name": "LPTokens",
						"type": "address"
					}
				],
				"internalType": "struct LaunchPad.IGOData[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "LockLauncher",
		"outputs": [
			{
				"internalType": "contract tokenLockLauncher",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "PresaleArray",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "ind",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "_address",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "_hash",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "investedBUSD",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "investedTokens",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "PresaleIndex",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "PresaleMapping",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "TokenLockContracts",
		"outputs": [
			{
				"internalType": "string",
				"name": "Title",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "Amount",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "Contract",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "Time",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "LP",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "TokenPresale",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "TokenPresaleLocked",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "withdrawFee",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

export const IGOAbi = [
	{
		"inputs": [
			{
				"internalType": "address[]",
				"name": "_token_owner_admin_currency",
				"type": "address[]"
			},
			{
				"internalType": "string[]",
				"name": "_title_symbol_SocialMedia",
				"type": "string[]"
			},
			{
				"internalType": "uint256[]",
				"name": "_noOfTokens_price_max_min_vesting_month_start_end",
				"type": "uint256[]"
			},
			{
				"internalType": "string",
				"name": "_hash",
				"type": "string"
			},
			{
				"internalType": "address[]",
				"name": "_whitelist",
				"type": "address[]"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [],
		"name": "AdminAllowed",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "Badges",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "Buy",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "Router",
		"outputs": [
			{
				"internalType": "contract IUniswapV2Router02",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "UserClaimedTokens",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "WhitelistMapping",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bool[]",
				"name": "_badges",
				"type": "bool[]"
			}
		],
		"name": "addBadges",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenAmount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "ethAmount",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "token",
				"type": "address"
			}
		],
		"name": "addLiquidity",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address[]",
				"name": "_users",
				"type": "address[]"
			}
		],
		"name": "addWhiteListBulk",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_user",
				"type": "address"
			}
		],
		"name": "addWhiteListSingle",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "admin",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bool",
				"name": "_bool",
				"type": "bool"
			}
		],
		"name": "adminAllowance",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "min1",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "min2",
				"type": "uint256"
			}
		],
		"name": "changeTiers",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "claim",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string[]",
				"name": "_title_symbol_SocialMedia",
				"type": "string[]"
			},
			{
				"internalType": "string",
				"name": "_hash",
				"type": "string"
			}
		],
		"name": "editPool",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "factory",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "finalize",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getBadges",
		"outputs": [
			{
				"internalType": "bool[]",
				"name": "",
				"type": "bool[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getDetails",
		"outputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "_address",
						"type": "address"
					},
					{
						"internalType": "address[]",
						"name": "_token_owner_admin_currency",
						"type": "address[]"
					},
					{
						"internalType": "string[]",
						"name": "_title_symbol_SocialMedia",
						"type": "string[]"
					},
					{
						"internalType": "uint256[]",
						"name": "_noOfTokens_price_max_min_vesting_month_start_end",
						"type": "uint256[]"
					},
					{
						"internalType": "string",
						"name": "_hash",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "investedTokens",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "investedBUSD",
						"type": "uint256"
					},
					{
						"internalType": "address[]",
						"name": "_whitelist",
						"type": "address[]"
					},
					{
						"internalType": "uint256",
						"name": "finalized",
						"type": "uint256"
					},
					{
						"internalType": "address",
						"name": "LPToken",
						"type": "address"
					}
				],
				"internalType": "struct PresaleSale2.Presale",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_user",
				"type": "address"
			}
		],
		"name": "getEntitlement",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "netEntitlement",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_user",
				"type": "address"
			}
		],
		"name": "getTiers",
		"outputs": [
			{
				"internalType": "uint16",
				"name": "tier",
				"type": "uint16"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "noOfClaims",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "publicSale",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address[]",
				"name": "_users",
				"type": "address[]"
			}
		],
		"name": "removeWhiteListBulk",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_user",
				"type": "address"
			}
		],
		"name": "removeWhiteListSingle",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "selfInfo",
		"outputs": [
			{
				"internalType": "address",
				"name": "_address",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "_hash",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "investedTokens",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "investedBUSD",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "finalized",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "LPToken",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "userEntitlement",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_user",
				"type": "address"
			}
		],
		"name": "whiteListCheck",
		"outputs": [
			{
				"internalType": "bool",
				"name": "_yes",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "whitelistCounter",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "withdraw",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	}
];

export const IERC20 = [
	{
		"inputs": [
			{
				"internalType": "string[]",
				"name": "strings",
				"type": "string[]"
			},
			{
				"internalType": "address[]",
				"name": "addresses",
				"type": "address[]"
			},
			{
				"internalType": "uint256[]",
				"name": "integers",
				"type": "uint256[]"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "minTokensBeforeSwap",
				"type": "uint256"
			}
		],
		"name": "MinTokensBeforeSwapUpdated",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "tokensSwapped",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "ethReceived",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "tokensIntoLiqudity",
				"type": "uint256"
			}
		],
		"name": "SwapAndLiquify",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "bool",
				"name": "enabled",
				"type": "bool"
			}
		],
		"name": "SwapAndLiquifyEnabledUpdated",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "_liquidityFee",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "_maxTxAmount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "_taxFee",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			}
		],
		"name": "allowance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "decimals",
		"outputs": [
			{
				"internalType": "uint8",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "subtractedValue",
				"type": "uint256"
			}
		],
		"name": "decreaseAllowance",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tAmount",
				"type": "uint256"
			}
		],
		"name": "deliver",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "excludeFromFee",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "excludeFromReward",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "geUnlockTime",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "includeInFee",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "includeInReward",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "addedValue",
				"type": "uint256"
			}
		],
		"name": "increaseAllowance",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "isExcludedFromFee",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "isExcludedFromReward",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "time",
				"type": "uint256"
			}
		],
		"name": "lock",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tAmount",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "deductTransferFee",
				"type": "bool"
			}
		],
		"name": "reflectionFromToken",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "liquidityFee_",
				"type": "uint256"
			}
		],
		"name": "setLiquidityFeePercent",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "maxTxPercent",
				"type": "uint256"
			}
		],
		"name": "setMaxTxPercent",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bool",
				"name": "_enabled",
				"type": "bool"
			}
		],
		"name": "setSwapAndLiquifyEnabled",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "taxFee",
				"type": "uint256"
			}
		],
		"name": "setTaxFeePercent",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "swapAndLiquifyEnabled",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "rAmount",
				"type": "uint256"
			}
		],
		"name": "tokenFromReflection",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalFees",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "recipient",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "sender",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "recipient",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "uniswapV2Pair",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "uniswapV2Router",
		"outputs": [
			{
				"internalType": "contract IUniswapV2Router02",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "unlock",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"stateMutability": "payable",
		"type": "receive"
	}
];

export const tokenLockLauncherAbi = [
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_user",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [],
		"name": "Launcher",
		"outputs": [
			{
				"internalType": "contract LaunchPad",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "LockArray",
		"outputs": [
			{
				"internalType": "address",
				"name": "token",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_contract",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "title",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "symbol",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "user",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "time",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "LP",
				"type": "bool"
			},
			{
				"internalType": "uint256",
				"name": "now",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "admin",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getArray",
		"outputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "token",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "_contract",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "title",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "name",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "symbol",
						"type": "string"
					},
					{
						"internalType": "address",
						"name": "user",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "amount",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "time",
						"type": "uint256"
					},
					{
						"internalType": "bool",
						"name": "LP",
						"type": "bool"
					},
					{
						"internalType": "uint256",
						"name": "now",
						"type": "uint256"
					}
				],
				"internalType": "struct tokenLockLauncher.Locks[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_token",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_amount",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_title",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_time",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "LP",
				"type": "bool"
			}
		],
		"name": "lockToken",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	}
];

export const tokenLockAbi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_Title",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_Amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_Token",
        type: "address",
      },
      {
        internalType: "address",
        name: "_Owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_Time",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "Amount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "Owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "Time",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "Title",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "Token",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export const tokenLauncherAbi = [
	{
		"inputs": [
			{
				"internalType": "string[]",
				"name": "strings",
				"type": "string[]"
			},
			{
				"internalType": "address[]",
				"name": "addresses",
				"type": "address[]"
			},
			{
				"internalType": "uint256[]",
				"name": "integers",
				"type": "uint256[]"
			}
		],
		"name": "launchToken",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_user",
				"type": "address"
			}
		],
		"name": "getUserTokenList",
		"outputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "Address",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "name",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "symbol",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "decimals",
						"type": "uint256"
					}
				],
				"internalType": "struct tokenLauncher.tokenStruct[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "userTokenList",
		"outputs": [
			{
				"internalType": "address",
				"name": "Address",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "symbol",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "decimals",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

export const RouterA = {
  43113: "0x5ACfc74319Cc6d738140f684964481aF7865a4b0", //"0xb70F71cdCAd4Db7da3d171c62Abf8382c01b8f32",
  97: "0xD99D1c33F9fC3444f8101754aBC46c52416550D1", //"0xf4e9Bb60792d5BdF356F142cD7dF37238A305502",
  5: "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D",
  80001: "0xf4e9Bb60792d5BdF356F142cD7dF37238A305502",
};

const goerliRouter = "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D";

export const tokenLocklauncherAdd = {
  43113: "0x5ACfc74319Cc6d738140f684964481aF7865a4b0", //"0xb70F71cdCAd4Db7da3d171c62Abf8382c01b8f32",
  97: "0xB737FC711751169D1f28EF95cc5CDC95a030C494", //"0xf4e9Bb60792d5BdF356F142cD7dF37238A305502",
  5: "0x67ae17753Ef60c4D0b1d750a25fd76a29fC0A6df",
  80001: "0xf4e9Bb60792d5BdF356F142cD7dF37238A305502",
};

export const tokenlauncherAdd = {
  43113: "0x5ACfc74319Cc6d738140f684964481aF7865a4b0", //"0xb70F71cdCAd4Db7da3d171c62Abf8382c01b8f32",
  97: "0x999408659700e5E003daD759f7D89097E8C5923C", //"0xf4e9Bb60792d5BdF356F142cD7dF37238A305502",
  5: "0x0d20bD92838420ADFd7cf990ACa738213321A9E3",
  80001: "0xf4e9Bb60792d5BdF356F142cD7dF37238A305502",
};

export const tokenObj = {
  43113: "0x5ACfc74319Cc6d738140f684964481aF7865a4b0", //"0xb70F71cdCAd4Db7da3d171c62Abf8382c01b8f32",
  97: "0xdF776461ead75e4051324A1e459D1c6De24aFF5f", //"0xf4e9Bb60792d5BdF356F142cD7dF37238A305502",
  5: "0x36956D87522b3661a2D9De122f65f61a592AcC26",
  80001: "0xf4e9Bb60792d5BdF356F142cD7dF37238A305502",
};

export const rpcObj = {
  43113: "0x5ACfc74319Cc6d738140f684964481aF7865a4b0", //"0xb70F71cdCAd4Db7da3d171c62Abf8382c01b8f32",
  97: "https://data-seed-prebsc-2-s3.binance.org:8545/", //"0xf4e9Bb60792d5BdF356F142cD7dF37238A305502",
  5: "https://goerli.infura.io/v3/2d0256aba07e4704add58fd0713e24d5",
  80001: "0xf4e9Bb60792d5BdF356F142cD7dF37238A305502",
};

export const ethScanObj = {
	43113: "0x5ACfc74319Cc6d738140f684964481aF7865a4b0", //"0xb70F71cdCAd4Db7da3d171c62Abf8382c01b8f32",
	97: "https://testnet.bscscan.com/address/", //"0xf4e9Bb60792d5BdF356F142cD7dF37238A305502",
	5: "https://goerli.etherscan.io/address/",
	80001: "0xf4e9Bb60792d5BdF356F142cD7dF37238A305502",
  };

export var chainIdSelected = "5";

export const tempAdmin = "0xfef5f69FA76f35638Aa3ed77a0644Fa79d31A554"; //"0xF85ee861F7360E5882FE1efE8DFc29C204d4BfaE"//"0xAa2F7afCBfbfe76D0aa9460bC77ABe2b726E0A15"//"0xfef5f69FA76f35638Aa3ed77a0644Fa79d31A554"//"0x77547F859Ca0F1114c25Db094Bb0f682dD47512D"//"0xF85ee861F7360E5882FE1efE8DFc29C204d4BfaE"

export const LaunchPadAdd = {
  43113: "0xa522CF9B39CdA62650c060b692684b38286ce3a8",
  97: "0x45FbF6B252E07209D1d696B55Cc7dC83dA4ab701",
  5: "0x17Ce14dBb65f31c7E3c1Ab1C95f0B8DF22BfB19c",
  80001: "0x4e4cefab704e4579bf28d32230ddecf0117ae9c1",
};

export const BUSD = {
  43113: "0x5425890298aed601595a70AB815c96711a31Bc65",
  97: "0xeD24FC36d5Ee211Ea25A80239Fb8C4Cfd80f12Ee",
  5: "0xC2C527C0CACF457746Bd31B2a698Fe89de2b6d49",
  80001: "0x7ef95a0FEE0Dd31b22626fA2e10Ee6A223F8a684",
};

// export const logoArray = {
//   43113: avalanche,
//   97: binance,
//   5: ethereum,
//   80001: polygon,
// };

export const chainArray = {
  43113: "Avalanche",
  97: "Binance",
  5: "Ethereum",
  80001: "Polygon",
};

export const acceptableArray = [
  "0x7ef95a0FEE0Dd31b22626fA2e10Ee6A223F8a684",
  "0x7ef95a0FEE0Dd31b22626fA2e10Ee6A223F8a684",
];

export const acceptableObj = {};

//0x942ce81eed20d4ee6b07a194eaebc1a0d1d8576c contract //
const apikey = "NKXY8JG8IJ1GDK2HXJFUFZFCQW6HNY4DSY"


// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiI4YTg4YWE0Yy0xZWM0LTRiODMtYjk4Mi0xNTYxZWM5MjA0ZmYiLCJlbWFpbCI6IndhcWFzbml6YW1hbmkzQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJwaW5fcG9saWN5Ijp7InJlZ2lvbnMiOlt7ImlkIjoiRlJBMSIsImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxfV0sInZlcnNpb24iOjF9LCJtZmFfZW5hYmxlZCI6ZmFsc2UsInN0YXR1cyI6IkFDVElWRSJ9LCJhdXRoZW50aWNhdGlvblR5cGUiOiJzY29wZWRLZXkiLCJzY29wZWRLZXlLZXkiOiJjMDI4M2RkOTliNmVkYWFlOWVlZiIsInNjb3BlZEtleVNlY3JldCI6IjhmNjJiZDM4ZDUxMGVhZWI2N2RjZDU4NmY0MmZmMWZlOTlmOWM3ZTViMmYyY2Y2NDQ3Y2NiODBhYWEyYzc3ZDgiLCJpYXQiOjE2NzYwODU3MDl9.n3T-n5yFUj6sg0OrYxe2iZuPSHYZXNzm3sm5gsH1WPU