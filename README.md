# GitHubPullRequestScanner

A simple GitHub pulls request scanner to check my repositories and open the pull request web page if something is waiting for me to be merged 🕵🏻.
Having only the GitHub slack integration wasn't enough anymore. I decided to automate it by leveraging the GitHub API and the *GH client*.

To use it:

- tune the GH_USERNAME to your own 😸 GitHub username
- inject in the shell the GITHUB_TOKEN. This prenvents the annoying error '403 too many calls... 😑'. To generate your OAuth Token go in the setting > developer zone.
- `./bin/checkMyPullRequests`
  
Enjoy 🥳

---

## Doing TDD/BDD in a shell using ShellSpec

I decided to use [ShellSpec](https://shellspec.info/) as the testing library. In 2020 it was recognized as one of the most popular shell testing frameworks. [Here](https://github.com/dodie/testing-in-bash) you can read about the comparison.ShellSpec is a shell **full-featured BDD unit testing framework** that provides first-class features such as code coverage, mocking, parameterized test, parallel execution, etc.

### ShellSpec & kcov

After playing with ShellSpec and kcov (local installation VS Docker) I opted for the local. It's kinda tricky, especially for the kcov part. It requires gmake and on MacOS to tune what reported in the official documentation due to a OpenSLL compiling error. For more details, I submitted the [ISSUE#357](https://github.com/SimonKagstrom/kcov/issues/357)).
The official documentation for docker-ShellSpec is available [HERE](https://github.com/shellspec/shellspec/blob/master/docs/docker.md). To install the ShellSpec & kcov image `docker pull shellspec/shellspec:kcov` then test it with:
- `docker run -it --rm -v "$PWD:/src" shellspec/shellspec:kcov --help`

``` console
# Run docker command on the project root
$ docker run -it --rm -v "$PWD:/src" shellspec/shellspec

# Run with kcov (requires kcov supported image)
$ docker run -it --rm -u $(id -u):$(id -g) -v "$PWD:/src" shellspec/shellspec:kcov --kcov
```


## 📥 TODO:

- 📌 try shellspec.info to create the test scaffolding
- 📌 improve the exec command return code with a proper try/catch
