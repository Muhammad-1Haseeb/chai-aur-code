const domElement = document.createElement(reactElement.type)
   domElement.innerHTML = reactElement.children
   for (const prop in reactElement.props) {
    domElement.setAttribute(prop, reactElement.props[prop])
   }
   container.appendChild(domElement)
