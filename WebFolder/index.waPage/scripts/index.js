
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var switchStateButton = {};	// @button
	var documentEvent = {};	// @document
// @endregion// @endlock

// eventHandlers// @lock

	switchStateButton.click = function switchStateButton_click (event)// @startlock
	{// @endlock
		
		switch($$('switchStateButton').getValue()) {
			case "Sign Up":
			$$('mainComponent').loadComponent({path: '/signUp.waComponent'});
			$$('switchStateButton').setValue('Log In');
			break;
			
			case "Log In":
			$$('mainComponent').loadComponent({path: '/login.waComponent'});
			$$('switchStateButton').setValue('Sign Up');
			break;
			
			case "Log Out":
			waf.directory.logout({
				onSuccess: function(event) {
					$$('mainComponent').loadComponent({path: '/signUp.waComponent'});
					$$('switchStateButton').setValue('Log In');
				}
			});
			
			break;
			
			default:
			if (WAF.directory.currentUser() === null) {
				$$('mainComponent').loadComponent({path: '/signUp.waComponent'});
				$$('switchStateButton').setValue('Log In');
			} else {
				$$('mainComponent').loadComponent({path: '/login.waComponent'});
				$$('switchStateButton').setValue('Log out');
			}
			break;
		}	
		
	};// @lock

	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock
		if (WAF.directory.currentUser() === null) {
			$$('mainComponent').loadComponent({path: '/signUp.waComponent'});
			$$('switchStateButton').setValue('Log In');
		} else {
			$$('mainComponent').loadComponent({path: '/app.waComponent'});
			$$('switchStateButton').setValue('Log Out');
		}
		
		
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("switchStateButton", "click", switchStateButton.click, "WAF");
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
// @endregion
};// @endlock
