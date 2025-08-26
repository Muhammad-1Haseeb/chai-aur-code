// This function makes HTML elements from JavaScript objects
function customRender(reactElement, container){
    
    // OLD WAY (the commented part):
    // This way only works for links with href and target
    // Like having a machine that only makes one type of sandwich
    /*
    const domElement = document.createElement(reactElement.type)  // Make <a> tag
    domElement.innerHTML = reactElement.children;                // Put text inside
    domElement.setAttribute('href', reactElement.props.href)     // Add link address  
    domElement.setAttribute('target', reactElement.props.target) // Add "open in new tab"
    container.appendChild(domElement)                            // Put it on webpage
    */

   // NEW WAY (the actual code):
   // This way works for any HTML element with any properties
   
   // Step 1: Make a new HTML tag (whatever type we want)
   const domElement = document.createElement(reactElement.type)
   
   // Step 2: Put text inside the tag
   domElement.innerHTML = reactElement.children
   
   // Step 3: Add all the properties (href, target, class, id, whatever)
   // This loop goes through each property one by one
   for (const prop in reactElement.props) {
    domElement.setAttribute(prop, reactElement.props[prop])
   }
   
   // Step 4: Stick it on the webpage
   container.appendChild(domElement)
}

// This is like a recipe - it describes what we want to make
const reactElement = {
    type: 'a',                              // Make an <a> tag (link)
    props: {                                // These are the extra details:
        href: 'https://youtube.com',        // Link goes to YouTube
        target: '_blank'                    // Opens in new tab
    },
    children: 'Click me to visit Youtube'   // This text shows on the webpage
}

// Find the div with id="root" on the webpage
const mainContainer = document.querySelector('#root')

// Now actually make it happen - turn the recipe into real HTML
customRender(reactElement, mainContainer)