const connectToDatabase = require("../misc/db");

//create a division
async function create(req, res) {
    try {
        // Create the divisions using the Sequelize model
        const { Divisions } = await connectToDatabase();

        const data = await Divisions.create(req.body);
        return res.status(200).json({message: data });
    }catch(e) {
        return res.status(500).json({ error: e.message });
    }
}

//get all divisions
async function getAll(req, res) {
    try {
        // Retrieve all divisions using the Sequelize model
        const {Divisions} = await connectToDatabase();

        const data = await Divisions.findAll();
        return res.status(200).json({message : data});
    }catch(e) {
        return res.status(500).json({ error: e.message});
    }
}

//get all divisions
async function getAllById(req, res) {
    try {
        // Retrieve all divisions using the Sequelize model
        const {Divisions} = await connectToDatabase();

        const data = await Divisions.findAll({where :{mandal_id: req.params.id }});
        return res.status(200).json({message : data});
    }catch(e) {
        return res.status(500).json({ error: e.message});
    }
}

//get a single division
async function getById(req, res) {
    try {
        // Retrieve the division using the Sequelize model and the ID from req.params.id
        const {Divisions} = await connectToDatabase();

        const data = await Divisions.findByPk(req.params.id);
        if (!data) throw new HTTPError(404, `id: ${req.params.id} was not found`);
        return res.status(200).json({ message: data });
    } catch (e) {
      return res.status(500).json({ error: e.message });
    }
}

// Update a division
async function updateById(req, res) {
    try {
      const { Divisions } = await connectToDatabase();
      // Update the division using the Sequelize model
      const data = await Divisions.findByPk(req.params.id);
      if (!data) throw new HTTPError(404, `id: ${req.params.id} was not found`);
       // Update division properties
      if (req.body.title) data.title = req.body.title;
      if (req.body.description) data.description = req.body.description;
      await data.save();
      return res.status(200).json({ message: data });
    } catch (e) {
      return res.status(500).json({ error: e.message });
    }
  }
  

  //delete a division
  async function deletedById(req, res) {
    try {
      const { Divisions } = await connectToDatabase();
      const data = await Divisions.findByPk(req.params.id);
      if (!data) throw new HTTPError(404, `id: ${req.params.id} was not found`);
      await data.destroy();
      return res.status(200).json({ message: data });
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  }
  
  module.exports = {
    getById,
    getAll,
    create,
    updateById,
    deletedById,
    getAllById,
  };