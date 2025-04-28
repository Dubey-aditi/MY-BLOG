import { useState } from "react";
import { Button } from "../../components/components/ui/button";
import { Input } from "../../components/components/ui/input";
import { Label } from "../../components/components/ui/label";
import { Textarea } from "../../components/components/ui/textarea";
import background2 from "../assets/background2.png";
import Navbar from "../react-components/Navbar";
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
    <div className="h-screen flex flex-col overflow-clip">
      <div
        className="bg-cover bg-center bg-no-repeat relative"
        style={{ background: `url(${background2})`, backgroundSize: "cover" }}
      >
        <Navbar />
        <div className="flex justify-center min-h-screen px-4 items-center">
          <div className="w-full max-w-xl space-y-5 h-1/3 -mt-60">
            <div className="space-y-4 w-1/2 h-1/2">
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
    </div>
  );
}
