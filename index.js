import login from "./Modules/login.js";
import showBanner from "node-banner";
(async () => {
    await showBanner("ATM Machine", `Make Transaction Online`, "green");
})();
setTimeout(() => {
    login();
}, 1000);
