Describe '⚙️⚙️ Test script guardians'
  Include src/checkMyPullRequests.sh
  # username
  # GITHUB_TOKEN
  It '✓ should have curl installed'
    When call if_Curl_IsNotInstalled
    The status should be failure
    The output should include 'is installed.'
  End
  # if_Jq_IsNotInstalled
  # if_GitHubClientl_IsNotInstalled
End