# Scriveners Website

## Project Info

**Live URL:** https://scriveners.pythonabc.org

This is the official website for the Scriveners Club and LitFest events at GGITS, built to manage event registrations, leaderboards, and more.

---

## How can I edit this code?

You can work on this project using your preferred IDE (such as VS Code) or directly on GitHub.

### **Clone and Run Locally**

**Requirements:**  
- Node.js & npm (recommended to install with [nvm](https://github.com/nvm-sh/nvm#installing-and-updating))
- Python 3.8+ (for backend)
- MongoDB (cloud or local instance)

**Steps:**

```sh
# 1. Clone the repository
git clone https://github.com/Venom120/scriveners-website.git

# 2. Navigate to the project directory
cd scriveners-website

# 3. Install frontend dependencies
npm install

# 4. (Optional) Set up Python virtual environment for backend
cd backend
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt

# 5. Start the frontend and backend in development mode (from project root)
npm run dev         # For frontend (Vite/React)
npm run dev:backend # For backend (FastAPI)
```

Or, to run both together (from project root, after installing `concurrently`):
```sh
npm run dev:all
```

---

## Project Structure

- `/src` – Frontend (React, Vite, TypeScript, Tailwind CSS, shadcn-ui)
- `/backend` – Backend (FastAPI, Python, MongoDB)
- `/public` – Static assets

---

## Deployment

**Production deployment is handled on a VPS using:**
- Nginx (reverse proxy for frontend and backend)
- Git bare repo with post-receive hook for auto-deployment
- Systemd for backend process management

**To deploy:**
1. Push to the VPS bare repo:
   ```sh
   git push vpc main
   ```
2. The post-receive hook will update the working directory and restart the backend.

---

## Technologies Used

- **Frontend:** Vite, React, TypeScript, Tailwind CSS, shadcn-ui
- **Backend:** FastAPI, Python, MongoDB
- **DevOps:** Nginx, systemd, Git, SSH

---

## Custom Domain

The project is live at [https://scriveners.pythonabc.org](https://scriveners.pythonabc.org) using a custom domain and SSL via Let's Encrypt.

---

## Contact

For event or technical queries, contact:
- Vedant Talankar (8839198566)
- Yatharth Jain

---

## License

This project is for educational and club use at GGITS.
