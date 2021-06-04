var data = {lines:[
{"lineNum":"    1","line":"#!/usr/bin/env bash"},
{"lineNum":"    2","line":"SCRIPT=\"$(readlink \"$0\")\"","class":"lineCov","hits":"4","order":"1","possible_hits":"0",},
{"lineNum":"    3","line":"SCRIPTPATH=\"$(dirname \"$SCRIPT\")\"","class":"lineCov","hits":"4","order":"2","possible_hits":"0",},
{"lineNum":"    4","line":"source ${SCRIPTPATH}/../src/checkMyPullRequests.sh","class":"lineCov","hits":"2","order":"3","possible_hits":"0",},
{"lineNum":"    5","line":""},
{"lineNum":"    6","line":"GH_USERNAME=\"undeadgrishnackh\"","class":"lineCov","hits":"2","order":"4","possible_hits":"0",},
{"lineNum":"    7","line":""},
{"lineNum":"    8","line":"if_GH_USERNAME_IsNotPresent && exit 1","class":"lineCov","hits":"2","order":"5","possible_hits":"0",},
{"lineNum":"    9","line":"if_GITHUB_TOKEN_IsNotPresent && exit 1","class":"lineCov","hits":"2","order":"6","possible_hits":"0",},
{"lineNum":"   10","line":"if_Curl_IsNotInstalled && exit 1","class":"lineCov","hits":"2","order":"7","possible_hits":"0",},
{"lineNum":"   11","line":"if_Jq_IsNotInstalled && exit 1","class":"lineCov","hits":"2","order":"8","possible_hits":"0",},
{"lineNum":"   12","line":"if_GitHubClientl_IsNotInstalled && exit 1","class":"lineCov","hits":"2","order":"9","possible_hits":"0",},
{"lineNum":"   13","line":""},
{"lineNum":"   14","line":"scanTheRepositories","class":"lineCov","hits":"2","order":"10","possible_hits":"0",},
{"lineNum":"   15","line":"searchForPendingPullRequests","class":"lineCov","hits":"2","order":"11","possible_hits":"0",},
]};
var percent_low = 25;var percent_high = 75;
var header = { "command" : "checkMyPullRequests", "date" : "2021-06-04 16:21:51", "instrumented" : 11, "covered" : 11,};
var merged_data = [];
