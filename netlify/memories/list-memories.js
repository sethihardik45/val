const cloudinary = require("cloudinary").v2;

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

exports.handler = async (event) => {
    // Get folder from query string (e.g. ?folder=our-february-story/01-feb...)
    const folder = event.queryStringParameters.folder;

    if (!folder) {
        return {
            statusCode: 400,
            body: JSON.stringify({ error: "Folder parameter is required" }),
        };
    }

    try {
        // Search for resources in the folder, sorted by newest first
        const result = await cloudinary.search
            .expression(`folder:"${folder}"`) // Quotes important for special chars
            .sort_by("created_at", "desc")
            .max_results(100)
            .execute();

        const files = result.resources.map(file => ({
            url: file.secure_url,
            type: file.resource_type
        }));

        return {
            statusCode: 200,
            headers: {
                /* Required for CORS support to work */
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "Content-Type",
                "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
            },
            body: JSON.stringify(files),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: error.message }),
        };
    }
};
