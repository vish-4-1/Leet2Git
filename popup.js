document.getElementById("save").onclick = () => {

    const owner = document.getElementById("owner").value;
    const repo = document.getElementById("repo").value;
    const token = document.getElementById("token").value;

    chrome.storage.local.set({
        owner,
        repo,
        token
    });

    alert("Saved!");
};