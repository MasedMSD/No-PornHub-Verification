// ==UserScript==
// @name            No Pornhub Verificaiton
// @namespace       npv
// @version         1.0.0
// @description:ru  Удаляет проверку на возраст на сайте PornHub
// @descripyion     Removes age verification on the PornHub
// @author          https://github.com/MasedMSD
// @match           *://*.pornhub.com/*
// @match           *://*.pornhub.org/*
// @icon            https://ei.phncdn.com/www-static/favicon.ico
// @grant           none
// ==/UserScript==

(function no_pornhub_verification() {
	document.getElementsByClassName("ageDisclaimer")[0]?.remove();
	document.getElementById("ageDisclaimerMainBG")?.remove();
	document.getElementById("ageDisclaimerOverlay")?.remove();

	Object.values(document.getElementsByTagName("link"))
		.find(link => link.href.includes("css/modals_commons.css"))
		?.remove(); // Без этого не работает скролл

	["container", "wrapper"].forEach(function (id) {
		document.getElementById("age-verification-" + id)?.remove();
	});
})();
