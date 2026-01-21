# cost-optimization-api
# ☁️ Cloud Cost Optimization Dashboard

A full-stack web application for monitoring and optimizing cloud infrastructure costs with a beautiful dashboard and RESTful API.

![Dashboard Preview](https://img.shields.io/badge/Dashboard-Live-brightgreen)
![Node.js](https://img.shields.io/badge/Node.js-18.x-green)
![Express](https://img.shields.io/badge/Express-4.x-blue)
![License](https://img.shields.io/badge/License-MIT-yellow)

## ✨ Features

### 📊 Dashboard
- Real-time cost statistics and metrics
- Interactive resource management table
- Cost distribution visualization
- Responsive design for all devices

### 🔧 API Endpoints
- `GET /api/resources` - List all cloud resources
- `GET /api/summary` - Get cost summary statistics
- `POST /api/resources` - Add new resource
- `PUT /api/resources/:id` - Update resource
- `DELETE /api/resources/:id` - Delete resource
- `GET /health` - API health check

### 🎨 UI Features
- Modern glass-morphism design
- Color-coded provider badges (AWS, Azure, GCP)
- Status indicators (Running/Stopped)
- Interactive forms with validation
- Mobile-responsive layout

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/cost-optimization-api.git
cd cost-optimization-api

