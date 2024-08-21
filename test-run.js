import { CronJob } from "cron";
import { spawn } from "child_process";
import fs from "fs";
import axios from "axios";

const [newManReportPath, cypressReportPath, url] = process.argv.slice(2, 5);

const runProcess = (command, args) => {
  return new Promise((resolve, reject) => {
    const process = spawn(command, [...args]);

    process.on("close", (code) => {
      if (code === 0) {
        resolve();
      } else {
        reject(`${command} runner exited with code: ${code}`);
      }
    });

    process.on("error", (err) => {
      console.log(err);
      reject(err);
    });
  });
};

const sendTestReport = async (reportPath, statusIoUrl) => {
  try {
    const reportStream = fs.createReadStream(reportPath, { encoding: "utf-8" });

    const { data } = await axios({
      method: "post",
      url: statusIoUrl,
      headers: {
        "Content-Type": "text/plain",
      },
      data: reportStream,
    });

    console.log("Report sent to status.io successfully.");
  } catch (err) {
    console.error("Error sending report to status.io:", err);
  } finally {
    reportStream.close(); ;
  }
};

const testRun = async () => {
  try {
    const newManArgs = [
      "run",
      "Bingo_APIs.postman_collection.json",
      "-e",
      "Test.postman_environment.json",
      "-r",
      "html",
      "--reporter-html-export",
      newManReportPath,
    ];
    const cypressArgs = ["cypress", "run"];

    await runProcess("newman", newManArgs);
    await runProcess("npx", cypressArgs);
    console.log("Both tests completed successfully.");

    await sendTestReport(newManReportPath, url);
    await sendTestReport(cypressReportPath, url);
    console.log("Reports sent to status.io.");
  } catch (err) {
    console.error("Error running tests:", err);
  }
};

const job = new CronJob("*/15 * * * *", testRun, null, true);

job.start();
