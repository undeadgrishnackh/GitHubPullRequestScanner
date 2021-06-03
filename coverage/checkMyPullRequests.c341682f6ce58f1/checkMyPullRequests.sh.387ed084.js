var data = {lines:[
{"lineNum":"    1","line":"#!/usr/bin/env bash"},
{"lineNum":"    2","line":""},
{"lineNum":"    3","line":"function if_GH_USERNAME_IsNotPresent () {"},
{"lineNum":"    4","line":"  if [[ \"$GH_USERNAME\" == \"\" ]]; then","class":"lineCov","hits":"2","order":"10","possible_hits":"0",},
{"lineNum":"    5","line":"    echo \"🕵  Username ❌\"","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"    6","line":"    echo \"please setup the shell variable GH_USERNAME\"","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"    7","line":"    return 0","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"    8","line":"  else"},
{"lineNum":"    9","line":"    echo \"🕵  Username ✅ - $GH_USERNAME\"","class":"lineCov","hits":"2","order":"11","possible_hits":"0",},
{"lineNum":"   10","line":"    return 1","class":"lineCov","hits":"2","order":"12","possible_hits":"0",},
{"lineNum":"   11","line":"  fi"},
{"lineNum":"   12","line":"}"},
{"lineNum":"   13","line":""},
{"lineNum":"   14","line":"function if_GITHUB_TOKEN_IsNotPresent () {"},
{"lineNum":"   15","line":"  if [[ \"$GITHUB_TOKEN\" == \"\" ]]; then","class":"lineCov","hits":"2","order":"13","possible_hits":"0",},
{"lineNum":"   16","line":"    echo \"🪙  GITHUB_TOKEN ❌\"","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"   17","line":"    echo \"please setup a OAuth token in the GitHub devzone and inject it into the shell variable GITHUB_TOKEN\"","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"   18","line":"    return 0","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"   19","line":"  else"},
{"lineNum":"   20","line":"    echo \"🪙  GITHUB_TOKEN ✅\"","class":"lineCov","hits":"2","order":"14","possible_hits":"0",},
{"lineNum":"   21","line":"    return 1","class":"lineCov","hits":"2","order":"15","possible_hits":"0",},
{"lineNum":"   22","line":"  fi"},
{"lineNum":"   23","line":"}"},
{"lineNum":"   24","line":""},
{"lineNum":"   25","line":"function isThisCommandInstalled () {"},
{"lineNum":"   26","line":"  which $1 > /dev/null 2>&1","class":"lineCov","hits":"6","order":"17","possible_hits":"0",},
{"lineNum":"   27","line":"  if [[ $? -ne 0 ]]; then","class":"lineCov","hits":"6","order":"18","possible_hits":"0",},
{"lineNum":"   28","line":"    echo \"❌ $1 is NOT installed.\"","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"   29","line":"    return 0","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"   30","line":"  else"},
{"lineNum":"   31","line":"    echo \"👌 $1 is installed.\"","class":"lineCov","hits":"6","order":"19","possible_hits":"0",},
{"lineNum":"   32","line":"    return 1","class":"lineCov","hits":"6","order":"20","possible_hits":"0",},
{"lineNum":"   33","line":"  fi"},
{"lineNum":"   34","line":"}"},
{"lineNum":"   35","line":""},
{"lineNum":"   36","line":"function if_Curl_IsNotInstalled () {"},
{"lineNum":"   37","line":"  isThisCommandInstalled \"curl\" && return 0 || return 1;","class":"lineCov","hits":"4","order":"16","possible_hits":"0",},
{"lineNum":"   38","line":"}"},
{"lineNum":"   39","line":""},
{"lineNum":"   40","line":"function if_Jq_IsNotInstalled () {"},
{"lineNum":"   41","line":"  isThisCommandInstalled \"jq\" && return 0 || return 1;","class":"lineCov","hits":"4","order":"21","possible_hits":"0",},
{"lineNum":"   42","line":"}"},
{"lineNum":"   43","line":""},
{"lineNum":"   44","line":"function if_GitHubClientl_IsNotInstalled () {"},
{"lineNum":"   45","line":"  isThisCommandInstalled \"gh\" && return 0 || return 1;","class":"lineCov","hits":"4","order":"22","possible_hits":"0",},
{"lineNum":"   46","line":"}"},
{"lineNum":"   47","line":""},
{"lineNum":"   48","line":"function scanTheRepositories () {"},
{"lineNum":"   49","line":"  echo \"⚙️  Repos scanning...\"","class":"lineCov","hits":"2","order":"23","possible_hits":"0",},
{"lineNum":"   50","line":"  curl -s -H \"Authorization: token $GITHUB_TOKEN\" https://api.github.com/users/$GH_USERNAME/repos > /tmp/.GitHubReposJson","class":"lineCov","hits":"2","order":"24","possible_hits":"0",},
{"lineNum":"   51","line":"  sleep 1s","class":"lineCov","hits":"2","order":"25","possible_hits":"0",},
{"lineNum":"   52","line":"  jq -r \'.[].full_name\' /tmp/.GitHubReposJson > /tmp/.GitHubRep","class":"lineCov","hits":"2","order":"26","possible_hits":"0",},
{"lineNum":"   53","line":"}"},
{"lineNum":"   54","line":""},
{"lineNum":"   55","line":"function searchForPendingPullRequests () {"},
{"lineNum":"   56","line":"  echo \"🔂 Searching for any pull request into the various repositories...\"","class":"lineCov","hits":"2","order":"27","possible_hits":"0",},
{"lineNum":"   57","line":"  while read repo; do","class":"lineCov","hits":"46","order":"28","possible_hits":"0",},
{"lineNum":"   58","line":"    curl -s -H \"Authorization: token $GITHUB_TOKEN\" https://api.github.com/repos/$repo/pulls > /tmp/.GitHubPRJson","class":"lineCov","hits":"44","order":"29","possible_hits":"0",},
{"lineNum":"   59","line":"    RESULT=`jq \".[].url\" /tmp/.GitHubPRJson | grep \'/pulls/\'`","class":"lineCov","hits":"132","order":"30","possible_hits":"0",},
{"lineNum":"   60","line":"    if [ $? -eq 0 ]; then","class":"lineCov","hits":"44","order":"31","possible_hits":"0",},
{"lineNum":"   61","line":"      gh pr list -R $repo --web","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"   62","line":"    else"},
{"lineNum":"   63","line":"      echo \"☑️  No pulls request for the $repo\"","class":"lineCov","hits":"44","order":"32","possible_hits":"0",},
{"lineNum":"   64","line":"    fi"},
{"lineNum":"   65","line":"  done </tmp/.GitHubRep","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"   66","line":"}"},
{"lineNum":"   67","line":""},
]};
var percent_low = 25;var percent_high = 75;
var header = { "command" : "checkMyPullRequests", "date" : "2021-06-03 11:54:01", "instrumented" : 33, "covered" : 23,};
var merged_data = [];