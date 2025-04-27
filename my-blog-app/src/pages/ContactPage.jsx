import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/components/ui/button";
import { Input } from "../../components/components/ui/input";
import { Label } from "../../components/components/ui/label";
import { Textarea } from "../../components/components/ui/textarea";
export default function Component() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://127.0.0.1:5000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });

      if (response.ok) {
        const result = await response.json();
        console.log(result.message);

        alert("Thank you! Your message has been sent.");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        alert("Failed to send your message. Try again!");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again later.");
    }
  };
  return (
    <div>
      <nav className="flex justify-start space-x-10 px-10 text-xl py-6 shadow-md bg-[#6c3319]">
        <Link to="/">Home</Link>
        <Link to="/blogs">Blogs</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <div className="flex justify-center items-center min-h-screen px-4">
        <div className="w-full max-w-2xl space-y-8">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold">Contact Us</h1>
            <p className="text-gray-500 dark:text-gray-400">
              Please fill in the form below to get in touch.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  placeholder="Enter your email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Enter your message"
                  className="min-h-[100px]"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
              <Button type="submit">Submit</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
