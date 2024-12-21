import { useEffect } from "react";
import Navbar from "./components/ui/Navbar";
import "./app.css";

const App = () => {
  useEffect(() => {
    // Set dark mode by default
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-16">
        {/* Add some dummy content to enable scrolling */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold">Welcome to our site</h1>
          {/* Add more sections here for testing scroll behavior */}
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="mt-12">
              <h2 className="text-2xl font-semibold mb-4">Section {i + 1}</h2>
              <p className="text-foreground/80">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default App;
