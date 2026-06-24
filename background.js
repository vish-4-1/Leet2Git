chrome.runtime.onMessage.addListener(async (data) => {

    chrome.storage.local.get(
        ["owner", "repo", "token"],
        async (settings) => {

            const owner = settings.owner;
            const repo = settings.repo;
            const token = settings.token;

            const filename =
                data.title.replace(/[^\w]/g, "_") + ".cpp";

            const path =
                "solutions/" + filename;

            const content =
                btoa(unescape(encodeURIComponent(data.code)));

            await fetch(
                `https://api.github.com/repos/${owner}/${repo}/contents/${path}`,
                {
                    method: "PUT",
                    headers: {
                        Authorization: `token ${token}`,
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        message: `Add ${data.title}`,
                        content: content
                    })
                }
            );

            console.log("Uploaded.");
        }
    );
});