const { CronJob } = require("cron");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const axios = require("axios");

const [cypressReportPath, url] = process.argv.slice(2, 4);

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
    reportStream.close();
  }
};

const testRun = async () => {
  const { API_KEY } = process.env
  try {
    const newManArgs = [
      "run",
      `https://api.getpostman.com/collections/37678338-b29374aa-a7b1-43e9-bdc8-fc3bcf39871b?apikey=${API_KEY}`,
      "-e",
      `https://api.getpostman.com/environments/37678787-5f6cbeff-c9d9-44c3-b670-7887cf48fc12?apikey=${API_KEY}`,
      "-r",
      "html",
      "--reporter-html-export",
      "test/postman/report_postman.html",
    ];
    const cypressArgs = ["cypress", "run"];

    await runProcess("newman", newManArgs);
    await runProcess("npx", cypressArgs);
    console.log("Both tests completed successfully.");

    await sendTestReport("test/postman/report_postman.html", url);
    await sendTestReport(cypressReportPath, url);
    console.log("Reports sent to status.io.");
  } catch (err) {
    console.error("Error running tests:", err);
  }
};

const job = new CronJob("*/15 * * * *", testRun, null, true);

job.start();
