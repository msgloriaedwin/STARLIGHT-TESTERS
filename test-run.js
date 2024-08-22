const { CronJob } = require("cron");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const axios = require("axios");

const { BOILERPLATE_URL, BOILERPLATE_ENV, BINGO_ENV, BINGO_URL } = process.env;
const url = process.env.STATUS_IO_URL;

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
  try {
    const boilerplateReportPath = "boilerplate-postman-report.json";
    const bingoReportPath = "bingo-postman-report.json";
    const newManArgs1 = [
      "run",
      BOILERPLATE_URL,
      "-e",
      BOILERPLATE_ENV,
      "-r",
      "json",
      "--reporter-html-export",
      boilerplateReportPath,
    ];

    const newManArgs2 = [
      "run",
      BINGO_URL,
      "-e",
      BINGO_ENV,
      "-r",
      "json",
      "--reporter-json-export",
      bingoReportPath,
    ];

    await runProcess("newman", newManArgs1);
    await runProcess("newman", newManArgs2);
    console.log("Both tests completed successfully.");

    await sendTestReport(boilerplateReportPath, url);
    await sendTestReport(bingoReportPath, url);
    console.log("Reports sent to status.io.");
  } catch (err) {
    console.error("Error running tests:", err);
  }
};

const job = new CronJob("*/15 * * * *", testRun, null, true);

job.start();
