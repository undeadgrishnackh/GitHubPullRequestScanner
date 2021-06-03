Describe '🙋‍ test the user running the checkMyPullRequests'
  It '✓ should have curl installed'
    When run curl --version
    The status should be success
    The output should include 'curl'
  End

  It '✓ should have jq installed'
    When run jq --version
    The status should be success
    The output should include 'jq'
  End

  It '✓ should have the GITHUB_TOKEN environment variable injected in the shell'
    When run env
    The status should be success
    The output should include 'GITHUB_TOKEN'
  End

  It '✓ should complete successfully the parse of all the repositories'
    When run ./checkMyPullRequests
    The status should be success
    The output should include 'Username'
    The output should include 'GITHUB_TOKEN'
    The output should include 'Repos scanning'
  End
End