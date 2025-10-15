// ==UserScript==
// @name            No Pornhub Verificaiton
// @namespace       npv
// @version         1.0.0
// @description:ru  Удаляет проверку на возраст на сайте PornHub
// @description     Removes age verification on the PornHub
// @author          https://github.com/MasedMSD
// @match           *://*.pornhub.com/*
// @match           *://*.pornhub.org/*
// @icon            https://ei.phncdn.com/www-static/favicon.ico
// @downloadURL     https://github.com/MasedMSD/No-PornHub-Verification/raw/refs/heads/main/no-pornhub-verification.user.js
// @updateURL       https://github.com/MasedMSD/No-PornHub-Verification/raw/refs/heads/main/no-pornhub-verification.user.js
// @grant           GM_addStyle
// ==/UserScript==

(function no_pornhub_verification() {
	"use strict";
	document.getElementsByClassName("ageDisclaimer")[0]?.remove();
	document.getElementById("ageDisclaimerMainBG")?.remove();
	document.getElementById("ageDisclaimerOverlay")?.remove();

	// Фикс скролла и блюра для андроида
	document.body.classList?.remove("is-blurred");
	GM_addStyle(`
        .isOpenMTubes {
            overflow: auto !important;
        }
    `);

	Object.values(document.getElementsByTagName("link"))
		.find(link => link.href.includes("css/modals_commons.css"))
		?.remove(); // Без этого не работает скролл

	["container", "wrapper"].forEach(function (id) {
		document.getElementById("age-verification-" + id)?.remove();
	});
})();
