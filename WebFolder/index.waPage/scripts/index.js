
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var documentEvent = {};	// @document
// @endregion// @endlock

// eventHandlers// @lock

	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock
		 if (WAF.directory.currentUser() && $("#waf-body .loginButton").text() != 'Log Out'){
			$$('mainComponent').loadComponent({path: '/app.waComponent'});
			$$('switchStateButton').setValue('Log Out');
			$$('loginText').setValue("Logged in as: " + waf.directory.currentUser().fullName);
		} else {
			WakTmpl.init();
		}
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
// @endregion
};// @endlock
