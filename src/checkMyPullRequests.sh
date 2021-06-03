#!/usr/bin/env bash

function if_GH_USERNAME_IsNotPresent () {
  if [[ "$GH_USERNAME" == "" ]]; then
    echo "🕵  Username ❌"
    echo "please setup the shell variable GH_USERNAME"
    return 0
  else
    echo "🕵  Username ✅ - $GH_USERNAME"
    return 1
  fi
}

function if_GITHUB_TOKEN_IsNotPresent () {
  if [[ "$GITHUB_TOKEN" == "" ]]; then
    echo "🪙  GITHUB_TOKEN ❌"
    echo "please setup a OAuth token in the GitHub devzone and inject it into the shell variable GITHUB_TOKEN"
    return 0
  else
    echo "🪙  GITHUB_TOKEN ✅"
    return 1
  fi
}

commandNotFound() { echo "❌ $1 is NOT installed." ; return 1 ; }
commandFound() { echo "👌 $1 is installed." ; return 0 ; }
findThisCommand() { which "$@" > /dev/null 2>&1 && commandFound "$@" || commandNotFound "$@"; }
isThisCommandInstalled () { findThisCommand "$@" ; }

if_Curl_IsNotInstalled () { isThisCommandInstalled "curl" && return 1 || return 0; }
if_Jq_IsNotInstalled () { isThisCommandInstalled "jq" && return 1 || return 0; }
if_GitHubClientl_IsNotInstalled () { isThisCommandInstalled "gh" && return 1 || return 0; }

function scanTheRepositories () {
  echo "⚙️  Repos scanning..."
  curl -s -H "Authorization: token $GITHUB_TOKEN" https://api.github.com/users/$GH_USERNAME/repos > /tmp/.GitHubReposJson
  sleep 1s
  jq -r '.[].full_name' /tmp/.GitHubReposJson > /tmp/.GitHubRep
}

function searchForPendingPullRequests () {
  echo "🔂 Searching for any pull request into the various repositories..."
  while read repo; do
    curl -s -H "Authorization: token $GITHUB_TOKEN" https://api.github.com/repos/$repo/pulls > /tmp/.GitHubPRJson
    RESULT=`jq ".[].url" /tmp/.GitHubPRJson | grep '/pulls/'`
    if [ $? -eq 0 ]; then
      gh pr list -R $repo --web
    else
      echo "☑️  No pulls request for the $repo"
    fi
  done </tmp/.GitHubRep
}

