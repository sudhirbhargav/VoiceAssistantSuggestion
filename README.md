# 🍽️ Deligo - Voice Assistant for Restaurant Recommendations

## 🚀 Project Overview
Deligo is a **voice assistant** that suggests the **top 5 menu items** from nearby restaurants based on user location. It is built using:
- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Mongoose)
- **AI**: Gemini AI (for NLP and intelligent suggestions)
- **Geolocation**: Google Maps API (for finding nearby restaurants)

## 🎯 Features
✅ Voice-based interaction using Gemini AI  
✅ Find **nearby restaurants** based on latitude & longitude  
✅ Suggest **top-rated menu items** from nearby restaurants  
✅ Fetch data dynamically from MongoDB  
✅ Scalable and efficient API with Express.js  

## 🛠️ Tech Stack
- **Frontend**: React.js, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Mongoose)
- **AI Integration**: Gemini AI API
- **Geolocation API**: Google Maps API
- **Authentication**: JWT (if required)

## 📂 Folder Structure
```
deligo/
│-- frontend/              # React.js frontend
│-- backend/               # Node.js & Express backend
│   │-- models/            # Mongoose models (Restaurant, MenuItem)
│   │-- routes/            # API routes
│   │-- controllers/       # Business logic
│   │-- config/            # Configuration files
│   │-- .gitignore         # Git ignore files
│   │-- .env               # Environment variables
│   │-- server.js          # Entry point
│-- README.md              # Project documentation
```

## 🏗️ Installation & Setup
### 🔹 Backend Setup
1️⃣ Clone the repository
```bash
git clone https://github.com/sudhirbhargav/VoiceAssistantSuggestion.git
cd backend
```
2️⃣ Install dependencies
```bash
npm install
```
3️⃣ Set up environment variables (`.env` file)
```plaintext
MONGO_URI=mongodb+srv://your-db-url
GEMINI_API_KEY=your-gemini-api-key
GOOGLE_MAPS_API_KEY=your-google-maps-key
```
4️⃣ Start the server
```bash
npm start
```

### 🔹 Frontend Setup
1️⃣ Navigate to frontend
```bash
cd frontend
```
2️⃣ Install dependencies
```bash
npm install
```
3️⃣ Start the React app
```bash
npm start
```

## 🔥 API Endpoints
### **1️⃣ Get Top 5 Menu Items from Nearby Restaurants**
```http
GET /api/menu/top?lat=<latitude>&lng=<longitude>
```
_Response:_
```json
{
  "top_items": [
    { "restaurant": "Indian Spice", "items": [...] },
    { "restaurant": "Mumbai Tadka", "items": [...] }
  ]
}
```

## 📌 Future Enhancements
- ✅ **Voice Command Execution** using Gemini AI
- ✅ **User Authentication** (JWT-based login & favorites feature)
- ✅ **Dynamic Price & Discount Suggestions**

## 🤝 Contributors
- **Deepanshi Garg** (Backend Lead)
- **Nisarg Shah**
- **Sudhir Bharghav**

## ⭐ Support
If you like this project, please ⭐ the repository!

