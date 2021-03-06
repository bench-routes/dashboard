# Contributing to Bench Routes Dashboard

:+1::tada: First off, thanks for taking the time to contribute! :tada::+1:

The following is a set of guidelines for contributing to `Bench-routes Dashboard`. These are mostly guidelines, not rules.
Use your best judgment, and feel free to propose changes to this document in a pull request.

## Code of Conduct

This project and everyone participates in it is governed by this [Code of Conduct](CODE_OF_CONDUCT.md).
By participating, you are expected to uphold this code. Please report unacceptable behavior to [**benchroutes@gmail.com**](mailto:benchroutes@gmail.com).

## How Can I Contribute?

Firstly, if you are new to the project, kindly go through [README.md](https://github.com/bench-routes/dashboard/blob/master/README.md) to setup the project
in your local machine. Then have a quick look at [GUIDE.md](GUIDE.md) to understand working of all the components present in the project. You can also have a look at our project [design documentation](https://docs.google.com/document/d/1kKA1wChDnPD9SWj-gHjG_bmvlk50aQiT_HoHWCc1ZFY/edit#heading=h.trvpxlqouz7z) to have more insights on our project structure and design.

### Contribution in code

We are excited to receive contributions from you in form of code.

Unsure where to begin contributing? You can start by looking through these `beginner` or `good-first-issue` and `help-wanted` issues:

- Beginner issues - issues which should only require a few lines of code, and a test or two.
- Help wanted issues - issues which should be a bit more involved than `beginner` issues.

Note: Please have a look at some of the [coding conventions]() we follow in this project to ensure code consistency.

### Best Practices to send Pull Requests:

- Fork the [project](https://github.com/bench-routes/dashboard) on GitHub
- Clone the project locally into your system.

```
git clone https://github.com/your-username/dashboard.git
```

- Make sure you are in the `master` branch.

```
git checkout master
```

- Create a new branch with a meaningful name for each feature/pull request.

```
git checkout -b branch-name
```

- Make all the required changes.

- Ensure that the code follows the linting standards. `eslint`, `tslint` and `prettier` are used for the TypeScript files.
- Its also advised to run the unit tests and e2e tests to ensure that your changes are not breaking some other part of the project.

```
yarn test
yarn test:e2e
```

- Add the files you changed.

```
git add file-name
```

- Write appropriate comments in the pull request, explaining the changes made. This helps maintainers, and the community understand the changes made by you and help review the PR. **Reference the issue you are fixing**.

```
git commit -m "message"
```

- If you forgot to add some changes, you can edit your previous commit message.

```
git commit --amend
```

- Squash multiple commits to a single commit. (example: squash last two commits done on this branch into one)

```
git rebase --interactive HEAD~2
```

- Push this branch to your remote repository on GitHub.

```
git push origin branch-name
```

- If any of the squashed commits have already been pushed to your remote repository, you need to do a force push.

```
git push origin remote-branch-name --force
```

- For changes to the front-end include screenshots or screencast showing the working changes. You can use browser extensions like `Screencastify` to create a screencast.

- Make sure you submit some kind of proof of your fix that makes the reviewing process easier for the maintainers.

- During review, if you are requested to make changes, rebase your branch and squash the multiple commits into one. Once you push these changes the pull request will edit automatically.

## Configuring remotes

When a repository is cloned, it has a default remote called `origin` that points to your fork on GitHub, not the original repository it was forked from. To keep track of the original repository, you should add another remote called `upstream`.

1. Set the `upstream`.

```
git remote add upstream https://github.com/bench-routes/dashboard.git
```

2. Use `git remote -v` to check the status. The output must be something like this:

```
  > origin    https://github.com/your-username/dashboard.git (fetch)
  > origin    https://github.com/your-username/dashboard.git (push)
  > upstream  https://github.com/bench-routes/dashboard.git (fetch)
  > upstream  https://github.com/bench-routes/dashboard.git (push)
```

3. To update your local copy with remote changes, run the following: (This will give you an exact copy of the current remote. You should not have any local changes on your master branch, if you do, use rebase instead.)

```
git pull upstream master
```

4. Push these merged changes to the master branch on your fork. Ensure to pull in upstream changes regularly to keep your forked repository up to date.

```
git push origin master
```

5. Switch to the branch you are using for some piece of work.

```
git checkout branch-name
```

6. Rebase your branch, which means, take in all latest changes and replay your work in the branch on top of this - this produces cleaner versions/history.

```
git fetch upstream master
git rebase upstream/master
```

7. Push the final changes when you're ready.

```
git push -f origin branch-name
```

### Things to keep in mind

1. Always make a draft PR when your work is not ready for review.
2. Request reviews from mentors or mention in a comment for the same.
