// Week 4 JavaScript Portfolio Project - Data Organization
// Students will learn to organize their portfolio data using JavaScript objects and arrays

// TODO: Fill in your personal information
const portfolio = {
    // Personal information object
    owner: {
        name: "Lilia Mora",        // TODO: Add your name
        title: "Aspiring PM",      // TODO: Add your professional title
        email: "lilia.mora@berkeley.edu", // TODO: Add your email
        location: "San Francisco, CA",  // TODO: Add your location
        bio: "I studied Telecommunications and Electronics Engineering. I am passionate about the technical aspects of networking and I enjoy a creative approach to problem solving." // TODO: Add your bio
    },
    
    // Skills as an array
    skills: [
        "React",   // TODO: Replace with your actual skills
        "Frontend Framework",  // TODO: Add more skills
        "JavaScript",
        "Python",
        "SQL",
        "Go",
        "GraphQL",
    ],
    
    // Projects as array of objects
    projects: [
        {
            title: "E-Commerce Platform", 
            description: "A modern e-commerce platform built with React and Node.js, featuring shopping cart, payment integration, and admin dashboard.",
            technologies: ["HTML", "CSS", "JavaScript"],
            completionDate: "2025-09-01",
            featured: true,
        },
        {
            title: "Task Management App", 
            description: "Productivity app with drag-and-drop functionality, project collaboration, and deadline tracking.",
            technologies: ["HTML", "CSS", "JavaScript"],
            completionDate: "2025-09-01",
            featured: false
        },
        {
            title: "Weather Dashboard", 
            description: "Clean and intuitive weather dashboard with location search, 7-day forecast, and beautiful animations.",
            technologies: ["HTML", "CSS", "JavaScript"],
            completionDate: "2025-09-01",
            featured: false
        },
        
        
    ],
    
    // Contact and availability information
    availability: {
        freelance: false,    // TODO: Set to true if available for freelance work
        fullTime: false,     // TODO: Set to true if seeking full-time position
        partTime: true       // TODO: Set to true if available for part-time work
    }
};

// Let's explore our data structure in the console
console.log("=== PORTFOLIO DATA EXPLORER ===");
console.log("Full portfolio object:", portfolio);

console.log("My name:", portfolio.owner.name);
console.log("Total skills:", portfolio.skills.length);
console.log("First project:", portfolio.projects[0]);

// TODO: During class, we'll add more console.log() statements to explore the data
// Examples students will try:
// console.log("Owner name:", portfolio.owner.name);
// console.log("First skill:", portfolio.skills[0]);
// console.log("Number of projects:", portfolio.projects.length);

// TODO: Students will learn to access nested properties
// console.log("Email:", portfolio.owner.email);
// console.log("Second project:", portfolio.projects[1]);
// console.log("Available for freelance?", portfolio.availability.freelance);

// TODO: Students will create summary strings using template literals
// let summary = `${portfolio.owner.name} is a ${portfolio.owner.title} with ${portfolio.skills.length} skills.`;
// console.log("Summary:", summary);

// Create summary statistics
console.log("===== Portfolio Summary =====");
console.log(`${portfolio.owner.name} has ${portfolio.skills.length} skills`);
console.log(`and ${portfolio.projects.length} projects`);

// Find featured projects
for (let i = 0; i < portfolio.projects.length; i++) {
    if (portfolio.projects[i].featured === true) {
        console.log("⭐ Featured:", portfolio.projects[i].title);
    }
}

// Convert to JSON for storage/debugging
let dataAsJSON = JSON.stringify(portfolio, null, 2);
console.log("Portfolio as JSON:", dataAsJSON);