const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());
app.use(express.static('public'));

// Sample data
const resources = [
  { id: 1, name: "AWS EC2", provider: "AWS", type: "Compute", cost: 120.50 },
  { id: 2, name: "Azure DB", provider: "Azure", type: "Database", cost: 300.00 },
  { id: 3, name: "GCP Storage", provider: "GCP", type: "Storage", cost: 45.75 }
];

// Routes
app.get('/api', (req, res) => {
  res.json({ message: "API is working", version: "1.0" });
});

app.get('/api/resources', (req, res) => {
  res.json(resources);
});

app.get('/api/summary', (req, res) => {
  const total = resources.reduce((sum, r) => sum + r.cost, 0);
  res.json({
    totalResources: resources.length,
    totalMonthlyCost: total,
    averageCost: (total / resources.length).toFixed(2)
  });
});

app.get('/health', (req, res) => {
  res.json({ status: "OK", time: new Date().toISOString() });
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running: http://localhost:${PORT}`);
});
