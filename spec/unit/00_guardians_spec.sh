Describe '⚙️⚙️ Test script guardians'
  Include src/checkMyPullRequests.sh
  
  Describe '✅ guardians with successful checks'
    #!! [MOCKs]
    findThisCommand() { commandFound ; }
    GH_USERNAME='username'
    GITHUB_TOKEN='TOKEN'
    #!! [MOCKs - End]

    Describe '🐚 Shell Variables'
      It '✓ should have set up the variable GH_USERNAME'
        When call if_GH_USERNAME_IsNotPresent
        The status should be failure
        The output should include '🕵  Username ✅ - username'
      End  
      It '✓ should have set up the variable GITHUB_TOKEN'
        When call if_GITHUB_TOKEN_IsNotPresent
        The status should be failure
        The output should include '🪙  GITHUB_TOKEN ✅'
      End  
    End
    
    Describe '🔌 3rd parties commands'
      It '✓ should have curl installed'
        When call if_Curl_IsNotInstalled
        The status should be failure
        The output should include 'is installed.'
      End
      It '✓ should have jq installed'
        When call if_Jq_IsNotInstalled
        The status should be failure
        The output should include 'is installed.'
      End
      It '✓ should have gh installed'
        When call if_GitHubClientl_IsNotInstalled
        The status should be failure
        The output should include 'is installed.'
      End
    End
  End 

  Describe '💣 guardians with failure checks'
    #!! [MOCKs]
    findThisCommand() { commandNotFound ; }
    GH_USERNAME=''
    GITHUB_TOKEN=''
    #!! [MOCKs - End]

    Describe '🐚 Shell Variables'
      It '✓ should raise the flag ✋ if the variable GH_USERNAME is NOT set up'
        When call if_GH_USERNAME_IsNotPresent
        The status should be success
        The output should include '🕵  Username ❌'
      End  
      It '✓ should raise the flag ✋ if the variable GITHUB_TOKEN is NOT set up'
        When call if_GITHUB_TOKEN_IsNotPresent
        The status should be success
        The output should include '🪙  GITHUB_TOKEN ❌'
      End  
    End
    Describe '🔌 3rd parties commands'
      It '✓ should raise the flag ✋ if curl is NOT installed'
        When call if_Curl_IsNotInstalled
        The status should be success
        The output should include 'is NOT installed.'
      End
      It '✓ should raise the flag ✋ if jq is NOT installed'
        When call if_Jq_IsNotInstalled
        The status should be success
        The output should include 'is NOT installed.'
      End
      It '✓ should raise the flag ✋ if gh is NOT installed'
        When call if_GitHubClientl_IsNotInstalled
        The status should be success
        The output should include 'is NOT installed.'
      End
    End
  End
End