const resources = {
    "resume" : {
        "header_html" : "Resume",
        "doc_path" : "documents/web_resume.pdf"
    },
    "cover_letter" : {
        "header_html" : "Cover Letter",
        "doc_path" : "documents/Website_CoverLetter.pdf"
    }
}

const page_buttons = document.querySelectorAll(".nav_button")
console.log(page_buttons)
page_buttons.forEach(element => 
    element.parentElement.addEventListener("click", loadPage))

function loadPage(click){
    // Sets span element (click element depends on where user clicks)
    let click_elem = click.srcElement
    let span = click_elem.localName === "li" ? click_elem.firstElementChild :
                                               click_elem 

    // Grab Elements
    let header = document.querySelector("#pdf_viewer h2")
    let iframe = document.querySelector("#pdf_viewer iframe")
    let active = document.querySelector(".active")
    
    const page = resources[span.id]
    let parent = span.parentElement

    // console.log(resources[button.id])
    if (active === parent) {return null}
    // console.log(button.parentNode)
    
    // Update elements
    active.setAttribute("class", "inactive")
    parent.setAttribute("class", "active")
    header.innerHTML = page.header_html
    iframe.setAttribute("src", page.doc_path)

    // Update Mobile Elements
    let mobile_header = document.querySelector("#pdf_download h2")
    let mobile_pdf = document.querySelector("#pdf_download a")
    mobile_header.innerHTML = page.header_html
    mobile_pdf.setAttribute("href", page.doc_path)
}