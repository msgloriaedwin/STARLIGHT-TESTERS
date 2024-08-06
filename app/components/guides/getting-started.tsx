import React from "react";

export default function GettingStarted() {
  return (
    <section className="w-full flex flex-col gap-[30px] my-[50px]">
      <div className="flex flex-col w-full gap-[50px]">
        <p>To start working on the bingo frontend project, you will first need to clone the repo to your local machine/computer, as forking is disabled to help restrict access to the repository. Ensure you have Git installed and the necessary permissions to access the repository.</p>
        <div className="w-full flex flex-col gap-[10px]">
          <h3 className="text-[18px] leading-[24px] font-bold mb-[10px]">Cloning the repository</h3>
          <p>You can clone the repository by opening your chosen programming IDE, preferably Visual Studio Code, and navigating to the terminal.</p>
          <p>If you have a specific location you would like to clone the project into, run the following command:</p>
          <div className="w-full bg-zinc-950 break-words p-4 rounded-lg my-[10px]">
            <p className="text-gray-100"><span className="text-yellow-300">cd</span> C:\Users\*your user folder*\*preferred folder in your user&apos;s directory*</p>
          </div>
          <p>It should look like this:</p>
          <div className="w-full bg-zinc-950 break-words p-4 rounded-lg my-[10px]">
            <p className="text-gray-100"><span className="text-yellow-300">cd</span> C:\Users\User\Documents\hng_projects</p>
          </div>
          <p>With the web URL leading to the project on GitHub, enter the following command in the terminal:</p>
          <div className="w-full bg-zinc-950 break-words p-4 rounded-lg my-[10px]">
            <p className="text-gray-100"><span className="text-yellow-300">git</span> clone https://github.com/hngprojects/bingo_fe.git</p>
          </div>
          <p>After hitting enter, the project will clone into the selected destination on your local machine.</p>
          <p>Navigate to the folder using:</p>
          <div className="w-full bg-zinc-950 break-words p-4 rounded-lg my-[10px]">
            <p className="text-gray-100"><span className="text-yellow-300">cd</span> bingo_fe</p>
          </div>
        </div>
        <div className="w-full flex flex-col gap-[10px]">
          <h3 className="text-[18px] leading-[24px] font-bold mb-[10px]">Changing Branches</h3>
          <p>Before making changes, commits, or pushing to the remote repository, create a separate branch for your feature or page.</p>
          <p>The `dev` branch is the default branch for the repository; this is where you would pull changes from, and reviewers will merge your branch into it.</p>
          <p>Start your branch name with `feat` for a feature or component, or `page` for a full page. For example, `feat/game-card-selection-component`. To create your branch, use the following command:</p>
          <div className="w-full bg-zinc-950 break-words p-4 rounded-lg my-[10px]">
            <p className="text-gray-100"><span className="text-yellow-300">git</span> checkout <span className="text-gray-600">-b</span> feat/game-card-selection-component</p>
          </div>
        </div>
        <div className="w-full flex flex-col gap-[10px]">
          <h3 className="text-[18px] leading-[24px] font-bold mb-[10px]">Adding Upstream</h3>
          <p>To pull recent changes from the remote GitHub repository, you need to add the repository URL as upstream:</p>
          <div className="w-full bg-zinc-950 break-words p-4 rounded-lg my-[10px]">
            <p className="text-gray-100"><span className="text-yellow-300">git</span> remote add upstream https://github.com/hngprojects/bingo_fe.git</p>
          </div>
          <p>Verify if the upstream remote is already set up by running <span className="text-yellow-300">git remote -v</span>.</p>
        </div>
        <div className="w-full flex flex-col gap-[10px]">
          <h3 className="text-[18px] leading-[24px] font-bold mb-[10px]">Installing Node Modules</h3>
          <p>The project uses `pnpm` to manage its packages. Ensure you have `pnpm` installed. Run <span className="text-yellow-300">pnpm install</span> to install the required node modules:</p>
          <div className="w-full bg-zinc-950 break-words p-4 rounded-lg my-[10px]">
            <p className="text-gray-100"><span className="text-yellow-300">pnpm</span> install</p>
          </div>
          <p>After each pull from upstream, run `pnpm install` to include any new packages or modules added by other contributors, which helps avoid errors related to missing packages.</p>
        </div>
        <div className="w-full flex flex-col gap-[10px]">
          <h3 className="text-[18px] leading-[24px] font-bold mb-[10px]">Merging Changes to Your Branch</h3>
          <p>Before creating commits and pushing, fetch and merge changes from the remote repository to avoid conflicts:</p>
          <div className="w-full bg-zinc-950 break-words p-4 rounded-lg my-[10px]">
            <p className="text-gray-100"><span className="text-yellow-300">git</span> fetch upstream</p>
          </div>
          <p>Then merge changes from the `dev` branch of the upstream to your current local branch:</p>
          <div className="w-full bg-zinc-950 break-words p-4 rounded-lg my-[10px]">
            <p className="text-gray-100"><span className="text-yellow-300">git</span> merge upstream/dev</p>
          </div>
          <p>If there are any conflicts, resolve them, and test your branch thoroughly before pushing.</p>
        </div>
        <div className="w-full flex flex-col gap-[10px]">
          <h3 className="text-[18px] leading-[24px] font-bold mb-[10px]">Making Commits</h3>
          <p>When making commits, start your commit message with `feat` for components or features, and `page` for full pages. Use a concise, descriptive message:</p>
          <div className="w-full bg-zinc-950 break-words p-4 rounded-lg my-[10px]">
            <p className="text-gray-100"><span className="text-yellow-300">git</span> commit <span className="text-gray-600">-m</span> &apos;feat: /*your commit message*/&apos;</p>
          </div>
        </div>
        <div className="w-full flex flex-col gap-[10px]">
          <h3 className="text-[18px] leading-[24px] font-bold mb-[10px]">Pushing Your Changes/Commit</h3>
          <p>Typically, the remote URL for the repository is set as `origin` when cloning. If not, add it with:</p>
          <div className="w-full bg-zinc-950 break-words p-4 rounded-lg my-[10px]">
            <p className="text-gray-100"><span className="text-yellow-300">git</span> remote add origin https://github.com/hngprojects/bingo_fe.git</p>
          </div>
          <p>Push your branch to the remote repository:</p>
          <div className="w-full bg-zinc-950 break-words p-4 rounded-lg my-[10px]">
            <p className="text-gray-100"><span className="text-yellow-300">git</span> push origin feat/game-card-selection-component</p>
          </div>
          <p>Ensure to fetch and commit recent changes from the remote repository before pushing to avoid conflicts.</p>
        </div>
        <div className="w-full flex flex-col gap-[10px]">
          <h3 className="text-[18px] leading-[24px] font-bold mb-[10px]">Creating a Pull Request</h3>
          <p>After pushing your branch, go to the remote repository and create a pull request. Follow the same naming conventions as your branch. Include details of your implementation, screenshots, links to Figma designs, and a short video if possible.</p>
          <p>Ensure your pull request passes all required tests and matches the Figma design before it can be merged.</p>
        </div>
      </div>
    </section>
  );
}