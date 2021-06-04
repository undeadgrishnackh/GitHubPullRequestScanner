Describe '⚙️⚙️ Test PR scanner'
  Include src/checkMyPullRequests.sh

  Describe '📖 Scanner to collect the different Repositories'
    #!! [MOCKs]
    getRepositoriesListFromGitHubAPI () { 
      rm /tmp/.GitHubRepositories* > /dev/null 2>&1; 
      cp spec/unit/mocks/.GitHubRepositoriesJson /tmp; 
    }
    #!! [MOCKs - End]
    File GitHubRepositoriesJson='/tmp/.GitHubRepositoriesJson'
    File GitHubRepositories='/tmp/.GitHubRepositories'

    It '✓ should call 😼 GitHub API and dump a list of repositories into /tmp/.GitHubRepositories'
      When call scanTheRepositories
      The status should be success
      The output should include '⚙️  Repos scanning...'
      The file GitHubRepositoriesJson should be exist
      The file GitHubRepositories should be exist
      The output should include "🎉 Repos scanning completed."
    End
  End


  Describe '🔎 Check the repository in search of new PR'
    File GitHubRepositories='/tmp/.GitHubRepositories'
    File GitHubPRJson='/tmp/.GitHubPRJson'

    #!! [MOCKs]
    getRepositoryPullRequestsFromGitHubAPI () { 
      rm /tmp/.GitHubPRJson* > /dev/null 2>&1; 
      cp spec/unit/mocks/.GitHubPRJson.NOPR /tmp/.GitHubPRJson; 
      cp spec/unit/mocks/.GitHubRepositories /tmp; 
      sleep 1;
    }
    #!! [MOCKs - End]

    It '✓ should find no pull request from a sleepy repository 🥱'
      When call searchForPendingPullRequests
      The status should be success
      The file GitHubRepositories should be exist
      The file GitHubPRJson should be exist
      The output should include '🔂 Searching for any pull request into the various repositories...'
      The output should include '☑️  No pulls request for the'
      The output should include '😍 Mission completed 🤟'
    End


    #!! [MOCKs]
    getRepositoryPullRequestsFromGitHubAPI () { 
      rm /tmp/.GitHubPRJson* > /dev/null 2>&1; 
      cp spec/unit/mocks/.GitHubPRJson.PR /tmp/.GitHubPRJson; 
      cp spec/unit/mocks/.GitHubRepositories /tmp; 
      sleep 1;
    }
    openThePullRequestInTheBrowser () { echo "Opening github.com/undeadgrishnackh/CarParkEscape2021/pulls in your browser."; }
    #!! [MOCKs - End]

    It '✓ should find a new pull request from an active repository 🏋️‍♂️'
      When call searchForPendingPullRequests
      The status should be success
      The file GitHubRepositories should be exist
      The file GitHubPRJson should be exist
      The output should include '🔂 Searching for any pull request into the various repositories...'
      The output should include '🌐 New pull request found in undeadgrishnackh/CarParkEscape2021'
      The output should include '😍 Mission completed 🤟'
    End
  End
End