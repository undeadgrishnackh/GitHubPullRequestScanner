var data = {lines:[
{"lineNum":"    1","line":"#!/usr/bin/env bash"},
{"lineNum":"    2","line":"echo \"🧪 ShellSpec Tests report\"","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"    3","line":"echo \"🔬 UNIT TESTS\"","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"    4","line":"#shellspec ./spec/unit/unit_test_spec.sh"},
{"lineNum":"    5","line":""},
{"lineNum":"    6","line":"echo \"🚚 E2E TESTS\"","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"    7","line":"# shellspec ./spec/e2e/e2e_test_spec.sh"},
{"lineNum":"    8","line":""},
{"lineNum":"    9","line":"echo \"🙈 Coverage\"","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"   10","line":"KCOV_PATH=\"${HOME}/.local/bin\"","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"   11","line":"REPORT_PATH=${PWD}/coverage","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"   12","line":"${KCOV_PATH}/kcov ${REPORT_PATH} ./src/*.sh","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"   13","line":"open ${REPORT_PATH}/index.html","class":"lineNoCov","hits":"0","possible_hits":"0",},
]};
var percent_low = 25;var percent_high = 75;
var header = { "command" : "shellspec spec", "date" : "2021-06-02 13:42:48", "instrumented" : 8, "covered" : 0,};
var merged_data = [];
