// Page Resource Data Structure
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

// Adds Event Listener to elements with nav_button class
const page_buttons = document.querySelectorAll(".nav_button")
page_buttons.forEach(element => 
    element.parentElement.addEventListener("click", loadPage))

function loadPage(click){
    // Sets span element (click element depends on where user clicks)
    let click_elem = click.srcElement
    let span = click_elem.localName === "li" ? click_elem.firstElementChild :
                                               click_elem;

    // Does nothing if the clicked page is the same as the active page
    let active = document.querySelector(".active")
    let parent = span.parentElement
    if (active === parent) {return null}

    // Grab Elements
    let header = document.querySelector("#pdf_viewer h2")
    let iframe = document.querySelector("#pdf_viewer iframe")

    // Uses span id to get resource data object
    const page = resources[span.id]
    
    /*
    Sets current active button to inactive
    Sets clicked button to active
    Updates the page header and iframe path reference
    */
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