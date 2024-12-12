<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SuperMall Web Application</title>
</head>
<body>
    <h1>SuperMall Web Application</h1>
    
    <h2>Table of Contents</h2>
    <ul>
        <li><a href="#project-overview">Project Overview</a></li>
        <li><a href="#features">Features</a></li>
        <li><a href="#tech-stack">Tech Stack</a></li>
        <li><a href="#system-modules">System Modules</a></li>
        <li><a href="#project-setup">Project Setup</a></li>
        <li><a href="#folder-structure">Folder Structure</a></li>
        <li><a href="#database">Database</a></li>
        <li><a href="#logging">Logging</a></li>
        <li><a href="#deployment">Deployment</a></li>
        <li><a href="#solution-design">Solution Design</a></li>
        <li><a href="#testing">Testing</a></li>
        <li><a href="#contributing">Contributing</a></li>
        <li><a href="#license">License</a></li>
    </ul>

    <h2 id="project-overview">Project Overview</h2>
    <p>
        SuperMall is a web application developed using the <strong>MERN stack</strong> (MongoDB, Express.js, React.js, Node.js) that allows merchants to advertise and sell their products, particularly focusing on rural towns. This platform enables consumers to securely update product information and make purchases from merchants. The app aims to reach a global audience and boost the business potential of rural vendors.
    </p>
    <p><strong>Key Goals:</strong></p>
    <ul>
        <li>Empower rural towns to advertise and sell their products.</li>
        <li>Provide a seamless, mobile-friendly interface for users to purchase goods.</li>
        <li>Provide a secure and scalable platform for managing product and shop details.</li>
    </ul>

    <h2 id="features">Features</h2>

    <h3>Admin Features:</h3>
    <ul>
        <li><strong>Login:</strong> Admins can securely log in to the system.</li>
        <li><strong>Create Shop Details:</strong> Admins can create and update shop details for vendors.</li>
        <li><strong>Manage Shop Details:</strong> Admins can update shop information, including product offerings.</li>
        <li><strong>Manage Offers:</strong> Admins can create and manage special offers for users.</li>
        <li><strong>Manage Categories and Floors:</strong> Admins can categorize products and organize them by floors.</li>
    </ul>

    <h3>User Features:</h3>
    <ul>
        <li><strong>Category Wise Details:</strong> Users can browse products by categories.</li>
        <li><strong>Shop Details:</strong> View details of each shop and its offerings.</li>
        <li><strong>Offers:</strong> View products that are on special offers.</li>
        <li><strong>Product Comparison:</strong> Users can compare the prices and features of products.</li>
        <li><strong>Filters:</strong> Filter products based on price, features, and other criteria.</li>
        <li><strong>Shop Wise Offers:</strong> View offers specific to shops.</li>
        <li><strong>Floor Wise Details:</strong> View products categorized by floor.</li>
        <li><strong>View Shop Details:</strong> Users can explore shops and their product listings.</li>
    </ul>

    <h2 id="tech-stack">Tech Stack</h2>
    <ul>
        <li><strong>Frontend:</strong> React.js</li>
        <li><strong>Backend:</strong> Node.js, Express.js</li>
        <li><strong>Database:</strong> Firebase (for real-time data storage and management)</li>
        <li><strong>Authentication:</strong> Firebase Authentication</li>
        <li><strong>Logging:</strong> JavaScript or Python logging library</li>
        <li><strong>Deployment:</strong> Vercel (for hosting the web app)</li>
    </ul>

    <h2 id="system-modules">System Modules</h2>
    <h3>Admin:</h3>
    <ul>
        <li>Login</li>
        <li>Create Shop Details</li>
        <li>Manage Shop Details</li>
        <li>Manage Offer Details</li>
        <li>Manage Category & Floor</li>
    </ul>

    <h3>User:</h3>
    <ul>
        <li>Category Wise Details</li>
        <li>List of Shop Details</li>
        <li>List Offer Products</li>
        <li>Compare Products Cost & Features</li>
        <li>Filter</li>
        <li>Shop Wise Offers</li>
        <li>Floor Wise Details</li>
        <li>View Shop Details</li>
    </ul>

    <h2 id="project-setup">Project Setup</h2>

    <h3>Prerequisites</h3>
    <ul>
        <li>Node.js (v14.x or higher)</li>
        <li>npm or yarn</li>
        <li>Firebase account (for database and authentication)</li>
        <li>GitHub (for version control)</li>
    </ul>

    <h3>Installation</h3>
    <ol>
        <li>Clone the repository to your local machine:
            <pre><code>git clone https://github.com/your-username/supermall.git</code></pre>
        </li>
        <li>Navigate to the project directory:
            <pre><code>cd supermall</code></pre>
        </li>
        <li>Install the dependencies:
            <pre><code>npm install</code></pre>
        </li>
        <li>Set up Firebase:
            <ul>
                <li>Create a Firebase project at <a href="https://console.firebase.google.com/">Firebase Console</a>.</li>
                <li>Set up Firebase Authentication and Firestore for real-time data storage.</li>
                <li>Add your Firebase credentials to the <code>.env</code> file (ensure it includes keys like <code>FIREBASE_API_KEY</code>, <code>FIREBASE_AUTH_DOMAIN</code>, etc.).</li>
            </ul>
        </li>
        <li>Run the application:
            <pre><code>npm start</code></pre>
        </li>
        <li>Open your browser and go to <code>http://localhost:3000</code> to view the app.</li>
    </ol>

    <h2 id="folder-structure">Folder Structure</h2>
    <pre><code>
supermall/
│
├── client/                   # React frontend
│   ├── src/
│   ├── public/
│   └── .env                  # Frontend environment variables
│
├── server/                   # Backend (Node.js + Express)
│   ├── controllers/           # API logic
│   ├── models/                # Database models (Firebase integration)
│   ├── routes/                # Express routes
│   ├── services/              # Logic for Firebase services
│   └── .env                  # Backend environment variables
│
├── .gitignore                 # Git ignore file
├── README.md                  # This README file
└── package.json               # Project metadata
    </code></pre>

    <h2 id="database">Database</h2>
    <p>Firebase is used as the database for this application. It provides real-time data synchronization and handles authentication with ease. The database is structured as follows:</p>
    <ul>
        <li><strong>Shops:</strong> Contains details about each shop, including the products they offer.</li>
        <li><strong>Products:</strong> Stores product information like name, price, category, and offers.</li>
        <li><strong>Users:</strong> Stores information about users, including their shopping preferences.</li>
        <li><strong>Orders:</strong> Keeps track of the user's orders and transaction history.</li>
    </ul>

    <h2 id="logging">Logging</h2>
    <p>Logging is essential for tracking and debugging application behavior. The project uses a logging library (JavaScript or Python) to log the following:</p>
    <ul>
        <li>Admin actions (shop creation, category management, etc.)</li>
        <li>User interactions (product viewing, comparisons, etc.)</li>
        <li>Errors and warnings</li>
    </ul>
    <p>Logs are stored in a structured format and can be viewed for debugging and monitoring the app's performance.</p>

    <h2 id="deployment">Deployment</h2>
    <p>The web application is hosted on Vercel, which ensures fast and reliable access to the app globally. Vercel automatically handles deployment, scaling, and optimizing the app for the best performance.</p>

    <h3>Justification for System Design:</h3>
    <ul>
        <li><strong>Cloud Hosting:</strong> Ensures that the application is accessible to users worldwide with minimal latency.</li>
        <li><strong>Firebase:</strong> A scalable, real-time database solution that handles both user data and product details.</li>
        <li><strong>React.js & Node.js:</strong> A flexible frontend with React and a lightweight backend with Express, ensuring a smooth user experience and efficient data handling.</li>
    </ul>

    <h2 id="solution-design">Solution Design</h2>
    <p>For the solution design, refer to the <strong>LLD (Low-Level Design)</strong> and <strong>System Architecture</strong> documents, which include wireframes and architecture diagrams. These documents provide a detailed breakdown of the application's flow and design decisions.</p>

    <h2 id="testing">Testing</h2>
    <p>Test cases for the project are as follows:</p>
    <ul>
        <li><strong>User login and authentication:</strong> Ensures that users can securely log in and access their profile.</li>
        <li><strong>Product management by admins:</strong> Verifies that admins can create, update, and delete product and shop details.</li>
        <li><strong>Product comparison and filtering:</strong> Validates that users can compare products and filter based on categories, price, and other features.</li>
        <li><strong>Order management:</strong> Tests the process of placing and managing orders.</li>
    </ul>
    <p>To run the tests:</p>
    <pre><code>npm test</code></pre>

    <h2 id="contributing">Contributing</h2>
    <p>Feel free to fork this repository and submit pull requests. Please ensure you follow the coding standards and document your code properly. Before submitting a pull request, ensure that all tests pass.</p>

    <h2 id="license">License</h2>
    <p>This project is licensed under the MIT License - see the <a href="LICENSE">LICENSE</a> file for details.</p>
</body>
</html>
