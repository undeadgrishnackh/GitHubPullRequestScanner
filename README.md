# GitHubPullRequestScanner
[![Build Status](https://www.travis-ci.com/undeadgrishnackh/GitHubPullRequestScanner.svg?branch=main)](https://www.travis-ci.com/undeadgrishnackh/GitHubPullRequestScanner)

GitHubPullRequestScanner is a simple GitHub pulls request scanner to check my repositories and open the pull request web page if something is waiting for me to be merged 🕵🏻. Having only the GitHub slack integration wasn't enough anymore, so I decided to automate it by leveraging the GitHub API and the *GH client*.

To use it:

- ☝️ GH_USERNAME: tune the script variable to your 😸 GitHub username
- ✌️ GITHUB_TOKEN: inject in the shell the variable to prenvent the annoying error '403 too many calls... 😑'. To generate your OAuth Token go in the setting > developer zone.
- 🏃 run  `./checkMyPullRequests`
  
Enjoy 🥳

---

## Side talk - TDD/BDD with shell scripting

I decided to use [ShellSpec](https://shellspec.info/) as the testing library. In 2020 it was recognized as one of the most popular shell testing frameworks. [Here](https://github.com/dodie/testing-in-bash) you can read about the comparison. ShellSpec is a shell **full-featured BDD unit testing framework** that provides first-class features such as code coverage, mocking, parameterized test, parallel execution, etc. Tekton and many other projects relies on it to thest their bash scripts. So after years of using inspec.io as a "e2e" library to test the result of the script I wanted to try ShellSpec to understand if it's possible to use it as a real TDD/BDD unit test framework. *I'm really pleased to say that it satisfied all my expectation*. A pure Red/Green/Refactor loop is possible 🤩.

### ShellSpec & kcov

After playing with ShellSpec and kcov (local installation VS Docker) I opted for a development cycle with local installation. The e2e part with docker needs to build a new container with curl, jq, gh, and I wanted to have clean bash scripts instead of old looking sh scripts. Because I was focus to test ShellSpec, for the moment I decided to go with an 'easy CI setup' using travis on OSX and brew. I have to say that installing shellspec and kcov locally was kinda tricky, especially for the kcov part. It requires gmake, and on MacOS, is necessary to tune the installationscript with what reported in the official documentation due to an OpenSLL compiling error. For more details, I submitted the [ISSUE#357](https://github.com/SimonKagstrom/kcov/issues/357)) to explain what is necessary to do. So I'll upload the coverage from local and on Trvis I'll run a unit test run only for the build pass.
