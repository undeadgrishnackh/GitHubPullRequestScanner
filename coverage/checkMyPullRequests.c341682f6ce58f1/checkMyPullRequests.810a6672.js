var data = {lines:[
{"lineNum":"    1","line":"#!/usr/bin/env bash"},
{"lineNum":"    2","line":"SCRIPT=\"$(readlink \"$0\")\"","class":"lineCov","hits":"2","order":"1","possible_hits":"0",},
{"lineNum":"    3","line":"SCRIPTPATH=\"$(dirname \"$SCRIPT\")\"","class":"lineCov","hits":"2","order":"2","possible_hits":"0",},
{"lineNum":"    4","line":"source ${SCRIPTPATH}/../src/checkMyPullRequests.sh","class":"lineCov","hits":"1","order":"3","possible_hits":"0",},
{"lineNum":"    5","line":""},
{"lineNum":"    6","line":"GH_USERNAME=\"undeadgrishnackh\"","class":"lineCov","hits":"1","order":"4","possible_hits":"0",},
{"lineNum":"    7","line":""},
{"lineNum":"    8","line":"if_GH_USERNAME_IsNotPresent && exit 1","class":"lineCov","hits":"1","order":"5","possible_hits":"0",},
{"lineNum":"    9","line":"if_GITHUB_TOKEN_IsNotPresent && exit 1","class":"lineCov","hits":"1","order":"9","possible_hits":"0",},
{"lineNum":"   10","line":"if_Curl_IsNotInstalled && exit 1","class":"lineCov","hits":"1","order":"13","possible_hits":"0",},
{"lineNum":"   11","line":"if_Jq_IsNotInstalled && exit 1","class":"lineCov","hits":"1","order":"14","possible_hits":"0",},
{"lineNum":"   12","line":"if_GitHubClientl_IsNotInstalled && exit 1","class":"lineCov","hits":"1","order":"15","possible_hits":"0",},
{"lineNum":"   13","line":""},
{"lineNum":"   14","line":"scanTheRepositories","class":"lineCov","hits":"1","order":"16","possible_hits":"0",},
{"lineNum":"   15","line":"searchForPendingPullRequests","class":"lineCov","hits":"1","order":"21","possible_hits":"0",},
]};
var percent_low = 25;var percent_high = 75;
var header = { "command" : "checkMyPullRequests", "date" : "2021-06-07 07:10:53", "instrumented" : 11, "covered" : 11,};
var merged_data = [];
