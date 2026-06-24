# Leet2Git v1

Automatically sync your accepted LeetCode solutions to GitHub.

## Features

- Automatically detects accepted submissions.
- Uploads solutions directly to GitHub.
- Stores GitHub configuration locally.
- Supports C++ solutions.
- Creates commits automatically.
- Organizes solutions inside the repository.

---

## Project Structure

```text
leet2git/
│
├── manifest.json
├── background.js
├── content.js
├── popup.html
├── popup.js
├── popup.css
└── icons/
```

---

## Requirements

- Google Chrome or Microsoft Edge
- GitHub account
- LeetCode account
- GitHub Personal Access Token (PAT)

---

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/your-username/leet2git.git
cd leet2git
```

Or download the ZIP file and extract it.

---

### 2. Load the extension

Open Chrome:

```text
chrome://extensions
```

- Enable **Developer mode**
- Click **Load unpacked**
- Select the project folder

The extension should now appear in the browser toolbar.

---

## Creating a GitHub Personal Access Token (PAT)

### Step 1: Open GitHub Settings

Go to:

```text
https://github.com/settings/tokens
```

### Step 2: Create a Fine-grained Token

- Click **Generate new token**
- Select **Fine-grained token**

### Step 3: Configure the token

#### Token name

```text
Leet2Git
```

#### Expiration

Choose:

```text
90 days
```

or

```text
No expiration
```

#### Repository access

Choose:

```text
Only select repositories
```

Select your LeetCode repository.

---

### Step 4: Repository Permissions

| Permission | Access |
|------------|--------|
| Contents | Read and write |
| Metadata | Read-only |

No other permissions are required.

---

### Step 5: Generate the token

Click:

```text
Generate token
```

Copy the token immediately.

Example:

```text
github_pat_xxxxxxxxxxxxxxxxx
```

⚠️ GitHub will only show the token once.

---

## Creating a Repository

Create a new repository:

```text
Leetcode_vish41
```

Initialize it with:

- README.md

Example:

```text
Leetcode_vish41/
```

---

## Extension Setup

Click the extension icon.

Enter:

| Field | Example |
|-------|----------|
| GitHub Username | vish-4-1 |
| Repository | Leetcode_vish41 |
| GitHub Token | github_pat_xxxxx |

Click:

```text
Save
```

---

## Usage

1. Open LeetCode.
2. Solve a problem.
3. Submit the solution.
4. Wait a few seconds.
5. Refresh GitHub.

The extension automatically uploads:

```text
solutions/
└── Contains_Duplicate.cpp
```

---

## Example Repository Structure

```text
Leetcode_vish41/
│
├── README.md
└── solutions/
    ├── Two_Sum.cpp
    ├── Contains_Duplicate.cpp
    └── Valid_Anagram.cpp
```

---

## Example Commit

```text
Add Contains Duplicate - LeetCode
```

---

## Troubleshooting

### Repository not found

- Verify the repository name.
- Verify the GitHub username.

### Unauthorized (401)

- Generate a new PAT.
- Ensure "Contents: Read and write" permission is enabled.

### No files uploaded

- Verify the extension is enabled.
- Make sure the solution is accepted.
- Check browser console for errors.

---

## Security

- Tokens are stored locally using Chrome storage.
- Never share your PAT publicly.
- Revoke compromised tokens immediately.

To revoke a token:

```text
https://github.com/settings/tokens
```

---

## Future Improvements

- Difficulty folders
- Language detection
- Statistics dashboard
- README generation
- Multiple repositories
- GitHub OAuth support
- Automatic problem metadata

---

## License

MIT License

---

## Author

**Vishal Kumar D**

- GitHub: https://github.com/vish-4-1
- LeetCode: https://leetcode.com/u/vish41/
