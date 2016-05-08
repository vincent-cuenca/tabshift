chrome.commands.onCommand.addListener(function(command) {
	chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
  		var tab = tabs[0];
		if (command === "shift-tab-left") { 
			chrome.tabs.move(tab.id, {index: (tab.index - 1)});	
		} else if (command === "shift-tab-right") {
			chrome.tabs.getAllInWindow(null, function (allTabs) {
				var i = tab.index + 1 == allTabs.length ? 0 : tab.index + 1;
				chrome.tabs.move(tab.id, {index: i});
			});
		}
	});
}); 