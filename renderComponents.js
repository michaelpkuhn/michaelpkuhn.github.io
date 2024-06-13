export async function renderComponent(tagName, params) {
    let htmlSrc = `/src/components/${tagName}.html`
    const response = await fetch(htmlSrc);
    let elem_tag = tagName.split('/').pop()
    //console.log(response)
    const text = await response.text();
    let elem = document.createElement(elem_tag)
    let classes = params.classes || ''
    elem.classList.add(classes)
    elem.innerHTML = text
    document.querySelector('body').appendChild(elem);
    //console.log(text)
}

