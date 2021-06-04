#!/usr/bin/env bash

if_GH_USERNAME_IsNotPresent () {
  if [[ ${GH_USERNAME} == "" ]]; then
    echo "🕵  Username ❌";
    echo "please setup the shell variable GH_USERNAME";
    return 0;
  else
    echo "🕵  Username ✅ - ${GH_USERNAME}";
    return 1;
  fi;
}

if_GITHUB_TOKEN_IsNotPresent () {
  if [[ ${GITHUB_TOKEN} == "" ]]; then
    echo "🪙  GITHUB_TOKEN ❌";
    echo "please setup a OAuth token in the GitHub devzone and inject it into the shell variable GITHUB_TOKEN";
    return 0;
  else
    echo "🪙  GITHUB_TOKEN ✅";
    return 1;
  fi
}


isThisCommandInstalled () { findThisCommand "$@" ; }
findThisCommand() { which "$@" > /dev/null 2>&1 && commandFound "$@" || commandNotFound "$@"; }
commandFound() { echo "👌 $1 is installed." ; return 0 ; }
commandNotFound() { echo "❌ $1 is NOT installed." ; return 1 ; }


if_Curl_IsNotInstalled () { isThisCommandInstalled "curl" && return 1 || return 0; }
if_Jq_IsNotInstalled () { isThisCommandInstalled "jq" && return 1 || return 0; }
if_GitHubClientl_IsNotInstalled () { isThisCommandInstalled "gh" && return 1 || return 0; }


scanTheRepositories () {
  echo "⚙️  Repos scanning...";
  getRepositoriesListFromGitHubAPI
  parseJsonToFindAllTheRepositoriesFullName
  echo "🎉 Repos scanning completed."
}
getRepositoriesListFromGitHubAPI () { curl -s -H "Authorization: token $GITHUB_TOKEN" https://api.github.com/users/$GH_USERNAME/repos > /tmp/.GitHubRepositoriesJson; }
parseJsonToFindAllTheRepositoriesFullName () { jq -r '.[].full_name' /tmp/.GitHubRepositoriesJson > /tmp/.GitHubRepositories; }


searchForPendingPullRequests () {
  echo "🔂 Searching for any pull request into the various repositories...";
  while read repo; do
    getRepositoryPullRequestsFromGitHubAPI
    if parseJsonRepositoryToFindPR ; then
      echo "🌐 New pull request found in ${repo}"
      openThePullRequestInTheBrowser
    else
      echo "☑️  No pulls request for the ${repo}";
    fi;
  done </tmp/.GitHubRepositories;
  echo "😍 Mission completed 🤟";
}
openThePullRequestInTheBrowser () { gh pr list -R $repo --web; }
parseJsonRepositoryToFindPR () { jq ".[].url" /tmp/.GitHubPRJson | grep '/pulls/'; }
getRepositoryPullRequestsFromGitHubAPI () { curl -s -H "Authorization: token $GITHUB_TOKEN" https://api.github.com/repos/$repo/pulls > /tmp/.GitHubPRJson; }
