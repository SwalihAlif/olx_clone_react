# OLX Clone (React + Vite)

An updated OLX clone built with React Vite, using Context API for state management, Firebase for authentication & database, and Cloudinary for image storage.

## 🚀 Features
- User Authentication (Firebase)
- Post Ads with Images (Cloudinary)
- Browse and Search Listings
- Edit & Delete Listings
- Responsive UI with Tailwind CSS

## 🛠️ Tech Stack
- **Frontend**: React.js (Vite), Context API, Tailwind CSS
- **Backend**: Firebase (Firestore, Authentication)
- **Storage**: Cloudinary (Image Uploads)

## 📌 Installation
### 1️⃣ Clone the Repository
```sh
git clone https://github.com/your-username/olx-clone.git
cd olx-clone
```
### 2️⃣ Install Dependencies
```sh
npm install
```
### 3️⃣ Configure Environment Variables
Create a `.env.local` file in the root directory and add:
```env
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
VITE_FIREBASE_APP_ID=your_firebase_app_id
VITE_CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
VITE_CLOUDINARY_UPLOAD_PRESET=your_cloudinary_upload_preset
```
### 4️⃣ Start the Development Server
```sh
npm run dev
```
The app will run on `http://localhost:5173/` by default.

## 📂 Project Structure
```
/src
  /components  --> Reusable UI Components
  /pages       --> Screens (Home, Login, PostAd, etc.)
  /context     --> Global Context API
  /firebase    --> Firebase Config
  /utils       --> Helper Functions
```

## 🎯 Upcoming Features
- Category-based Filtering
- User Profile Management
- Real-time Chat
- Wishlist & Saved Ads

## 📝 License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
💡 **Contributions & Issues**: Feel free to fork, raise issues, or contribute!

