import mongoose from "mongoose";

const PlantSchema = new mongoose.Schema({
    scientific_name: { type: String, required: true },
    common_name: { type: String, required: true }, 
    taxonomic_description: {
        description: { type: String, required: true }
    },
    chemical_composition: {
        artemisinin: { type: String },
        flavonoids: { type: String },
        terpenes: { type: String },
        saponins: { type: String },
        alkaloids: { type: String }
    },
    most_used_parts: {
        leaves: { type: String },
        stems: { type: String },
        roots: { type: String }
    },
    uses: {
        description: { type: String, required: true }
    }
});

const PlantModel = mongoose.model("Plant", PlantSchema);

export default PlantModel;