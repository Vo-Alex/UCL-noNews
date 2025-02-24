var waitingAnimationContainer = document.createElement("div");
waitingAnimationContainer.style.display = "flex";
waitingAnimationContainer.style.justifyContent = "center";
waitingAnimationContainer.style.alignItems = "center";
waitingAnimationContainer.style.padding = "2em";

var waitingAnimation = document.createElement("div");
waitingAnimation.style.width = "50px";
waitingAnimation.style.height = "50px";
waitingAnimation.style.border = "8px solid #f3f3f3";
waitingAnimation.style.borderTop = "8px solid #5db3e6";
waitingAnimation.style.borderRadius = "50%";

waitingAnimationContainer.appendChild(waitingAnimation);

// animate
waitingAnimation.animate([
    { transform: "rotate(0deg)" },
    { transform: "rotate(360deg)" }
], {
    duration: 1000,
    iterations: Infinity
});

var style = document.createElement("style");


var observer = new MutationObserver(function (mutations) {
    var newsSection = document.getElementById("block-ucl-dashboard-news");
    if (newsSection) {
        newsSection.parentNode.replaceChild(waitingAnimationContainer, newsSection);
        observer.disconnect();
    }
});
// Observe the news section
observer.observe(document, {
    childList: true,
    subtree: true
});

var loadObserver = new MutationObserver(function (mutations) {
    var widgets = document.getElementById("block-ucl-dashboard-widgets");
    if (widgets) {
        // Remove the waiting animation after the full page load
        console.log("Remove");  
        waitingAnimationContainer.parentNode.removeChild(waitingAnimationContainer);
        loadObserver.disconnect();
    }
});
// Observe the document for the full page load
loadObserver.observe(document, {
    childList: true,
    subtree: true
});
