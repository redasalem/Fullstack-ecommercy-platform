// import express from 'express';
// import path from 'path';
// import { ENV } from './config/env.js';
// import { connectDB } from './config/db.js';
// import { clerkMiddleware } from '@clerk/express'
// import { serve } from "inngest/express";
// import { inngest, functions } from './config/inngest.js';

// const app = express();

// const __dirname = path.resolve();

// app.use(express.json());

// app.use(clerkMiddleware())

// app.use("/api/inngest", serve({ client: inngest, functions }));

// app.get("/api/health",(req,res)=>{
//     res.status(200).json({message:"success"})
// });

// //make our app ready for deployment

// if(ENV.NODE_ENV === 'production'){
//     app.use(express.static(path.join(__dirname,'../admin/dist')))

//     app.get("/{*any}",(req,res)=>{
//         res.sendFile(path.join(__dirname,"../admin","dist","index.html"));
//     })
// }



// const startServer = async () => {
//     await  connectDB();

//     app.listen(ENV.PORT,()=>{
//     console.log('Server on port 3000')
//      });
// };

//  startServer();


import express from 'express';
import path from 'path';
import { ENV } from './config/env.js';
import { connectDB } from './config/db.js';
import { clerkMiddleware } from '@clerk/express';
import { serve } from "inngest/express";
import { inngest, functions } from './config/inngest.js';

const app = express();

const __dirname = path.resolve();

// Middlewares
app.use(express.json());
app.use(clerkMiddleware());

// Inngest endpoint
app.use("/api/inngest", serve({ client: inngest, functions }));

// Health check
app.get("/api/health", (req, res) => {
    res.status(200).json({ message: "success" });
});

// Connect to DB
connectDB();

// Export for Vercel Serverless
export default app;

// For local development only
if (ENV.NODE_ENV !== 'production') {
    const PORT = ENV.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`✅ Server running on port ${PORT}`);
    });
}