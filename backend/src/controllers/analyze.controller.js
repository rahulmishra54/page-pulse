import axios from "axios";



import { analyzeWebsiteService } from "../services/analyze.service.js";

export const analyzeWebsite = async (req, res) => {
    try {
        const { url } = req.body;

       
        if (!url) {
            return res.status(400).json({
                success: false,
                message: "URL is required."
            });
        }

       
        const analysis = await analyzeWebsiteService(url);

        
        return res.status(200).json({
            success: true,
            message: "Website analyzed successfully.",
            data: analysis
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
    });
}
};