import axios from "axios";
import * as cheerio from "cheerio";

export const analyzeWebsiteService = async (url) => {
    try {
        const startTime = Date.now();

        const response = await axios.get(url, {
            timeout: 10000,
        });

        const responseTime = Date.now() - startTime;

        const contentType = response.headers["content-type"] || "";

        if (!contentType.includes("text/html")) {
            throw new Error("URL does not contain an HTML page.");
        }

        const $ = cheerio.load(response.data);

        const title = $("title").text().trim();

        const metaDescription =
            $('meta[name="description"]').attr("content")?.trim() || "";

        const h1Count = $("h1").length;

        const headings = $("h1")
            .map((i, el) => $(el).text().trim())
            .get();

        const totalImages = $("img").length;

        const imagesMissingAlt = $("img")
            .filter((i, el) => !$(el).attr("alt"))
            .length;

        const totalLinks = $("a").length;

        const bodyText = $("body")
            .text()
            .replace(/\s+/g, " ")
            .trim();

        const wordCount = bodyText
            ? bodyText.split(" ").length
            : 0;

        return {
            status: response.status,
            responseTime: `${responseTime} ms`,
            title,
            metaDescription,
            h1Count,
            imagesMissingAlt,
            wordCount,
            headings,
            totalImages,
            totalLinks,
        };

    } catch (error) {

        if (error.code === "ECONNABORTED") {
            throw new Error("Request timed out.");
        }

        if (error.code === "ERR_INVALID_URL") {
            throw new Error("Invalid URL.");
        }

        if (error.response) {
            throw new Error(`Website returned status ${error.response.status}.`);
        }

        throw new Error(error.message || "Unable to analyze website.");
    }
};