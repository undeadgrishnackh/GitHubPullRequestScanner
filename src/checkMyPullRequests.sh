#!/usr/bin/env bash
GH_USERNAME="undeadgrishnackh"
echo "🕵  Username: $GH_USERNAME"
if [[ "$GITHUB_TOKEN" == "" ]]; then
  echo "🪙  GITHUB_TOKEN ❌"
  echo "please setup a OAuth token in the GitHub devzone and inject it into the shell variable GITHUB_TOKEN"
  exit 1
else
  echo "🪙  GITHUB_TOKEN ✅"
fi

echo "⚙️  Repos scanning..."
curl -s -H "Authorization: token $GITHUB_TOKEN" https://api.github.com/users/$GH_USERNAME/repos > /tmp/.GitHubReposJson
sleep 1s
jq -r '.[].full_name' /tmp/.GitHubReposJson > /tmp/.GitHubRep

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