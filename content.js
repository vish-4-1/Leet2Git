let uploaded = false;

function detectAccepted() {

    const accepted =
        document.body.innerText.includes("Accepted");

    if (!accepted || uploaded)
        return;

    uploaded = true;

    const title =
        document.title;

    const editor =
        document.querySelector(".view-lines");

    const code =
        editor ? editor.innerText : "Code not found";

    chrome.runtime.sendMessage({
        title,
        code
    });
}

setInterval(detectAccepted, 3000);