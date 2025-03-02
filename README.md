# 🍽️ Deligo - Voice Assistant for Restaurant Recommendations

## 🚀 Project Overview
Deligo is a **voice assistant** that suggests the **top 5 menu items** from nearby restaurants based on user location. It is built using:
- **Frontend**: React.js & Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Mongoose)
- **AI**: Gemini AI (for NLP and intelligent suggestions)
- **Geolocation**: Google Maps API (for finding nearby restaurants)

## 🎯 Features
- ✅ **Voice-Powered Search**: Users can interact with Deligo using voice commands to find the best food options.
- ✅ **Top 5 Recommendations**: The app provides the top 5 food items from nearby restaurants.
- ✅ **Real-time Suggestions**: Data is fetched dynamically based on user location.
- ✅ **User-Friendly Interface**: Simple and intuitive design for seamless user experience.
- ✅ **Scalable and Efficient API**: Uses Express.js for smooth backend performance.

## 🛠️ Tech Stack
- **Frontend**: React.js, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Mongoose)
- **AI Integration**: Gemini AI API
- **Geolocation API**: Google Maps API

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
1️⃣ Clone the repository:
```bash
git clone https://github.com/sudhirbhargav/VoiceAssistantSuggestion.git
cd backend
```
2️⃣ Install dependencies:
```bash
npm install
```
3️⃣ Set up environment variables (`.env` file):
```plaintext
MONGO_URI=mongodb+srv://your-db-url
GEMINI_API_KEY=your-gemini-api-key
GOOGLE_MAPS_API_KEY=your-google-maps-key
```
4️⃣ Start the server:
```bash
npm start
```

### 🔹 Frontend Setup
1️⃣ Navigate to frontend:
```bash
cd frontend
```
2️⃣ Install dependencies:
```bash
npm install
```
3️⃣ Start the React app:
```bash
npm start
```

## 🔥 API Endpoints
### **1️⃣ Get Top 5 Menu Items from Nearby Restaurants**
```http
GET /restaurants/top-items?longitude=<longitude>&latitude=<latitude>
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
- ✅ **Personalized Recommendations**: AI-based suggestions tailored to user preferences.
- ✅ **Order Placement**: Allow users to place orders directly through the app.
- ✅ **Multilingual Support**: Expanding voice assistant to support multiple languages.
- ✅ **User Authentication**: JWT-based login & favorites feature.
- ✅ **Dynamic Price & Discount Suggestions**

## 🤝 Team Members
1. **Sudhir Bhargav**  
   📧 [Sudhirbhargav100@gmail.com](mailto:Sudhirbhargav100@gmail.com)  
   🔗 [GitHub](https://github.com/sudhirbhargav)
2. **Nisarg Shah**  
   📧 [shahnisarg23@gmail.com](mailto:shahnisarg23@gmail.com)  
   🔗 [GitHub](https://github.com/nisargshah23)
3. **Deepanshi Garg**  
   📧 [deepanshigarg1307@gmail.com](mailto:deepanshigarg1307@gmail.com)  
   🔗 [GitHub](https://github.com/deepanshi-garg)

## ⭐ Support
If you like this project, please ⭐ the repository!

## 📜 License
This project is open-source and available under the MIT License.

---

## 🌍 Deployed Link
Access the live application here: **[Deligo - Voice Assistant for Restaurant Recommendations]()**

## 🎥 Project Walkthrough Video
Watch a detailed explanation of the entire project here: **[Deligo - Project Walkthrough]()**

---

**Contributions are welcome!** Feel free to fork the repository and submit a pull request.

