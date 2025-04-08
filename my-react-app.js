import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Header Component
function Header() {
  return (
    <header className="bg-blue-500 text-white p-4 text-center text-xl font-bold">
      My Simple React App
    </header>
  );
}

// Footer Component
function Footer() {
  return (
    <footer className="bg-gray-200 text-center p-2 mt-4 text-sm">
      © 2025 My App. All rights reserved.
    </footer>
  );
}

// Main Content Component
function MainContent() {
  return (
    <main className="p-4 grid gap-4 grid-cols-1 md:grid-cols-2">
      <Card>
        <CardContent className="p-4">
          <h2 className="text-lg font-semibold mb-2">Component 1</h2>
          <p>This is the first component inside MainContent.</p>
          <Button className="mt-2">Click Me</Button>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-4">
          <h2 className="text-lg font-semibold mb-2">Component 2</h2>
          <p>This is the second component inside MainContent.</p>
          <Button className="mt-2" variant="outline">Click Me Too</Button>
        </CardContent>
      </Card>
    </main>
  );
}

// App Component (Root)
export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}
