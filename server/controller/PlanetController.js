import PlantModel from "../model/PlantSchema.js";

// THIS METHOD WILL GET PLANTS FROM DATABASE

const getPlant = async (req, res) => {
    try {
        // This will find the data from plant collection
        const data = await PlantModel.find();

        if (data == null) {
            return res.status(200).json({ message: "There is no data" });
        } else {
            return res.status(200).json(data);
        }

    } catch (error) {
        console.log('There is an error in get Plant ', error);

    }
}

// THIS METHOD WILL ADD PLANTS TO DATABASE;

const addPlant = async (req, res) => {
    try {

        const body = req.body;
        if (!body) {
            return res.status(400).json({ message: "Request body is missing or empty" });
        }

        const createdPlant = await PlantModel.create(body);

        if (createdPlant) {
            return res.status(200).json(createdPlant);
        } else {
            return res.status(500).json({ message: "Failed to create plant" });
        }

    } catch (error) {
        console.error('Error in addPlant:', error);
        return res.status(500).json({ message: "Internal server error" });
    }
}

const searchPlants = async (req, res) => {
    const searchTerm = req.body.q; // Assuming the search term is sent in the body

    // Log the entire request body
    console.log('Request Body:', req.body);

    // Validate that searchTerm is a string and not empty
    if (typeof searchTerm !== 'string' || searchTerm.trim() === '') {
        return res.status(400).json({ message: "Search term is required and must be a valid string" });
    }

    try {
        const results = await PlantModel.aggregate([
            {
                $match: {
                    $or: [
                        { scientific_name: { $regex: new RegExp(searchTerm, 'i') } },
                        { common_name: { $regex: new RegExp(searchTerm, 'i') } }
                    ]
                }
            },
            {
                $project: {
                    _id: 1,
                    scientific_name: 1,
                    common_name: 1,
                    family: 1,
                    description: 1
                }
            }
        ]).exec();

        if (results.length === 0) {
            return res.status(200).json({ message: "No matching plants found" });
        } else {
            return res.status(200).json(results);
        }

    } catch (error) {
        console.log('There is an error in search Plants ', error);
        return res.status(500).json({ message: "Internal server error" });
    }
}


export { getPlant, addPlant, searchPlants };