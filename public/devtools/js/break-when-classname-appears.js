// --- STEP 1: Get the Target Node ---
// Use the reliable global variable you just created (e.g., temp1)
const targetNode = temp1; // <-- **CHANGE THIS to your stored variable name (e.g., temp1)**

// --- STEP 2: Configure the Observer ---
const config = { childList: true, subtree: true };
const targetClassName = 'ugly-tooltip-box'; // <-- **CHANGE THIS to the tooltip's class**

const callback = function(mutationsList, observer) {
    for (const mutation of mutationsList) {
        if (mutation.type === 'childList') {
            // Check newly added nodes
            mutation.addedNodes.forEach(node => {
                // Check if it's an element
                if (node.nodeType === 1) {
                    // Check if the node itself has the class
                    if (node.classList.contains(targetClassName)) {
                        console.log('Target class found on added element:', node);
                        debugger; // PAUSE HERE!
                    }
                    // Check if any descendants of the added node have the class
                    const matchingDescendants = node.querySelectorAll(`.${targetClassName}`);
                    if (matchingDescendants.length > 0) {
                        console.log('Target class found on descendant:', matchingDescendants);
                        debugger; // PAUSE HERE!
                    }
                }
            });
        }
    }
};

// --- STEP 3: Start Observing ---
// Create an instance of the observer
const observer = new MutationObserver(callback);

// Start observing the target node for configured mutations
observer.observe(targetNode, config);

console.log(`MutationObserver started on ${targetNode.id || targetNode.tagName}. Waiting for class: ${targetClassName}`);