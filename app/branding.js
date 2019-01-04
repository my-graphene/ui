/** This file centralized customization and branding efforts throughout the whole wallet and is meant to facilitate
 *  the process.
 *
 *  @author Stefan Schiessl <stefan.schiessl@blockchainprojectsbv.com>
 */

/**
 * Wallet name that is used throughout the UI and also in translations
 * @returns {string}
 */
export function getWalletName() {
    return "RuiChain";
}

/**
 * URL of this wallet
 * @returns {string}
 */
export function getWalletURL() {
    return "https://wallet.bitshares.org";
}

/**
 * Returns faucet information
 *
 * @returns {{url: string, show: boolean}}
 */
export function getFaucet() {
    return {
        url: "https://faucet.bitshares.eu/onboarding", // 2017-12-infrastructure worker proposal
        show: true,
        editable: true
    };
}

/**
 * Logo that is used throughout the UI
 * @returns {*}
 */
export function getLogo() {
    return require("assets/logo-ico-blue.png");
}

/**
 * Default set theme for the UI
 * @returns {string}
 */
export function getDefaultTheme() {
    // possible ["darkTheme", "lightTheme", "midnightTheme"]
    return "darkTheme";
}

/**
 * Default login method. Either "password" (for cloud login mode) or "wallet" (for local wallet mode)
 * @returns {string}
 */
export function getDefaultLogin() {
    // possible: one of "password", "wallet"
    return "password";
}

/**
 * Default units used by the UI
 *
 * @returns {[string,string,string,string,string,string]}
 */
export function getUnits() {
    return ["RUI", "USD", "CNY", "BTC", "EUR", "GBP"];
}

/**
 * These are the highlighted bases in "My Markets" of the exchange
 *
 * @returns {[string]}
 */

export function getMyMarketsBases() {
    return ["USD", "OPEN.BTC", "CNY", "RUI", "BTC"];
}

/**
 * These are the default quotes that are shown after selecting a base
 *
 * @returns {[string]}
 */
export function getMyMarketsQuotes() {
    return [
        "RUI",
        //
        "BKT",
        "BLOCKPAY",
        "BRIDGE.BCO",
        "BRIDGE.BTC",
        "BRIDGE.MONA",
        "BRIDGE.ZNY",
        "BTC",
        "RUIR",
        "BTWTY",
        "CADASTRAL",
        "CNY",
        "CVCOIN",
        "EUR",
        "GDEX.BTC",
        "GDEX.BTO",
        "GDEX.EOS",
        "GDEX.ETH",
        "GOLD",
        "HERO",
        "ICOO",
        "IOU.CNY",
        "KAPITAL",
        "KEXCOIN",
        "OBITS",
        "OCT",
        "OPEN.BTC",
        "OPEN.DASH",
        "OPEN.DGD",
        "OPEN.DOGE",
        "OPEN.EOS",
        "OPEN.ETH",
        "OPEN.EURT",
        "OPEN.GAME",
        "OPEN.GRC",
        "OPEN.INCNT",
        "OPEN.KRM",
        "OPEN.LISK",
        "OPEN.LTC",
        "OPEN.MAID",
        "OPEN.MKR",
        "OPEN.NEO",
        "OPEN.OMG",
        "OPEN.SBD",
        "OPEN.STEEM",
        "OPEN.TUSD",
        "OPEN.USDT",
        "OPEN.WAVES",
        "OPEN.ZEC",
        "OPEN.ZRX",
        "PPY",
        "RUBLE",
        "RUDEX.DCT",
        "RUDEX.GBG",
        "RUDEX.GOLOS",
        "RUDEX.KRM",
        "RUDEX.MUSE",
        "RUDEX.SBD",
        "RUDEX.STEEM",
        "SILVER",
        "SMOKE",
        "STEALTH",
        "USD",
        "WIN.ETC",
        "WIN.ETH",
        "WIN.HSR",
        "YOYOW"
    ];
}

/**
 * The featured markets displayed on the landing page of the UI
 *
 * @returns {list of string tuples}
 */
export function getFeaturedMarkets() {
    return [
        ["USD", "RUI"],
        ["USD", "OPEN.BTC"],
        ["USD", "OPEN.USDT"],
        ["USD", "OPEN.ETH"],
        ["USD", "OPEN.DASH"],
        ["USD", "GOLD"],
        ["USD", "HERO"],
        ["USD", "GDEX.BTC"],
        ["USD", "GDEX.ETH"],
        ["USD", "GDEX.EOS"],
        ["USD", "GDEX.BTO"],
        ["CNY", "RUI"],
        ["CNY", "OPEN.BTC"],
        ["CNY", "USD"],
        ["CNY", "OPEN.ETH"],
        ["CNY", "YOYOW"],
        ["CNY", "OCT"],
        ["CNY", "GDEX.BTC"],
        ["CNY", "GDEX.ETH"],
        ["CNY", "GDEX.EOS"],
        ["CNY", "GDEX.BTO"],
        ["CNY", "GDEX.BTM"],
        ["OPEN.BTC", "RUI"],
        ["OPEN.BTC", "OPEN.ETH"],
        ["OPEN.BTC", "OPEN.DASH"],
        ["OPEN.BTC", "BLOCKPAY"],
        ["OPEN.BTC", "OPEN.DGD"],
        ["OPEN.BTC", "OPEN.STEEM"],
        ["RUI", "OPEN.ETH"],
        ["RUI", "OPEN.EOS"],
        ["RUI", "PPY"],
        ["RUI", "OPEN.STEEM"],
        ["RUI", "OBITS"],
        ["RUI", "RUBLE"],
        ["RUI", "HERO"],
        ["RUI", "OCT"],
        ["RUI", "SILVER"],
        ["RUI", "GOLD"],
        ["RUI", "BLOCKPAY"],
        ["RUI", "BTWTY"],
        ["RUI", "SMOKE"],
        ["RUI", "GDEX.BTC"],
        ["RUI", "GDEX.ETH"],
        ["RUI", "GDEX.EOS"],
        ["RUI", "GDEX.BTO"],
        ["KAPITAL", "OPEN.BTC"],
        ["USD", "OPEN.STEEM"],
        ["USD", "OPEN.MAID"],
        ["OPEN.USDT", "OPEN.BTC"],
        ["OPEN.BTC", "OPEN.MAID"],
        ["RUI", "OPEN.MAID"],
        ["RUI", "OPEN.HEAT"],
        ["RUI", "OPEN.INCENT"],
        ["HEMPSWEET", "OPEN.BTC"],
        ["KAPITAL", "RUI"],
        ["RUI", "RUDEX.STEEM"],
        ["USD", "RUDEX.STEEM"],
        ["RUI", "RUDEX.SBD"],
        ["RUI", "RUDEX.KRM"],
        ["USD", "RUDEX.KRM"],
        ["RUBLE", "RUDEX.GOLOS"],
        ["CNY", "RUDEX.GOLOS"],
        ["RUBLE", "RUDEX.GBG"],
        ["CNY", "RUDEX.GBG"],
        ["RUI", "RUDEX.MUSE"],
        ["RUI", "RUDEX.TT"],
        ["RUI", "RUDEX.SCR"],
        ["RUI", "RUDEX.ETH"],
        ["RUI", "RUDEX.DGB"],
        ["RUI", "ZEPH"],
        ["RUI", "HERTZ"]
    ];
}

/**
 * Recognized namespaces of assets
 *
 * @returns {[string,string,string,string,string,string,string]}
 */
export function getAssetNamespaces() {
    return ["TRADE.", "OPEN.", "METAEX.", "BRIDGE.", "RUDEX.", "GDEX.", "WIN."];
}

/**
 * These namespaces will be hidden to the user, this may include "bit" for BitAssets
 * @returns {[string,string]}
 */
export function getAssetHideNamespaces() {
    // e..g "OPEN.", "bit"
    return [];
}

/**
 * Allowed gateways that the user will be able to choose from in Deposit Withdraw modal
 * @param gateway
 * @returns {boolean}
 */
export function allowedGateway(gateway) {
    return gateway in ["OPEN", "RUDEX", "WIN", "BRIDGE", "GDEX"];
}

export function getSupportedLanguages() {
    // not yet supported
}

export function getAllowedLogins() {
    // possible: list containing any combination of ["password", "wallet"]
    return ["password", "wallet"];
}
