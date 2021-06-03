var data = {lines:[
{"lineNum":"    1","line":"#!/usr/bin/env bash"},
{"lineNum":"    2","line":"source ./src/checkMyPullRequests.sh","class":"lineCov","hits":"1","order":"1",},
{"lineNum":"    3","line":"GH_USERNAME=\"undeadgrishnackh\"","class":"lineCov","hits":"1","order":"2",},
{"lineNum":"    4","line":""},
{"lineNum":"    5","line":"if_GH_USERNAME_IsNotPresent &&  exit 1","class":"lineCov","hits":"1","order":"3",},
{"lineNum":"    6","line":"if_GITHUB_TOKEN_IsNotPresent &&  exit 1","class":"lineCov","hits":"1","order":"4",},
{"lineNum":"    7","line":"if_Curl_IsNotInstalled &&  exit 1","class":"lineCov","hits":"1","order":"5",},
{"lineNum":"    8","line":"if_Jq_IsNotInstalled &&  exit 1","class":"lineCov","hits":"1","order":"6",},
{"lineNum":"    9","line":"if_GitHubClientl_IsNotInstalled &&  exit 1","class":"lineCov","hits":"1","order":"7",},
{"lineNum":"   10","line":""},
{"lineNum":"   11","line":"scanTheRepositories","class":"lineCov","hits":"1","order":"8",},
{"lineNum":"   12","line":"searchForPendingPullRequests","class":"lineCov","hits":"1","order":"9",},
]};
var percent_low = 25;var percent_high = 75;
var header = { "command" : "checkMyPullRequests", "date" : "2021-06-03 11:54:01", "instrumented" : 9, "covered" : 9,};
var merged_data = [];
