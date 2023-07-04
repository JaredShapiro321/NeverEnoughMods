import express, { Express, Request, Response } from 'express';
const cors = require('cors');
const { Sequelize, DataTypes } = require('sequelize');

// Connect to the database
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite'
});

async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

testConnection();

// Define the model
const Mod = sequelize.define('Mod', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  url: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

Mod.sync();

// Create the Express app
const app = express();
app.use(express.json());

// Enable CORS middleware
app.use(cors());

// Define the routes
app.get('/mods', async (req: Request, res: Response) => {
  try {
    const mods = await Mod.findAll();
    res.json(mods);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/mods/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const mod = await Mod.findByPk(id);
    if (mod) {
      res.json(mod);
    } else {
      res.status(404).json({ error: 'Mod not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/mods', async (req: Request, res: Response) => {
  const { name, email } = req.body;
  try {
    const mod = await Mod.create({ name, email });
    res.json(mod);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.put('/mods/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, email } = req.body;
  try {
    const mod = await Mod.findByPk(id);
    if (mod) {
      mod.name = name;
      mod.email = email;
      await mod.save();
      res.json(mod);
    } else {
      res.status(404).json({ error: 'Mod not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.delete('/mods/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const mod = await Mod.findByPk(id);
    if (mod) {
      await mod.destroy();
      res.sendStatus(204);
    } else {
      res.status(404).json({ error: 'Mod not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});