# GitHubPullRequestScanner

A simple GitHub pulls request scanner to check my repos and open the pull request web page if anything is waiting for me to do a merge 🕵🏻.
I found that having only the GitHub slack integration wasn't anymore enough to keep under control my security pull requests, so I decided to automate it leveraging the GitHub API and the *gh client*.

To use it:
- tune the GH_USERNAME to your own 😸 GitHub username
- inject in the shell the GITHUB_TOKEN to don't get the annoying error '403 too many calls... 😑'. Generate your OAuth token in the setting > developer zone.

Enjoy 🥳

📥 TODO:
- 📌 try shellspec.info to create the test scaffolding
- 📌 improve the exec command return code with a proper try/catch
