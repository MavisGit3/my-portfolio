"use client";

import type React from "react";
import Link from "next/link";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser"; 
import { Mail, Phone, Send, Github, Twitter, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    emailjs
      .sendForm(
        "service_hbucpim",
        "template_9sm65vl",
        formRef.current,
        "PBgKEv-awPTgGOzaU"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSubmitted(true);
          setName("");
          setEmail("");
          setMessage("");
          setTimeout(() => setSubmitted(false), 3000);
        },
        (error) => {
          console.error(error.text);
          alert("Failed to send message. Please try again later.");
        }
      );
  };

  return (
    <div id="contact" className="container mx-auto py-12 px-4 md:px-6 ">
      <h1 className="text-3xl font-bold font-serif mb-8 text-center">
        Contact Me
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Contact Information */}
        <div className="space-y-6">
          <Card className="bg-transparent border border-gray-200 backdrop-blur-sm text-white">
            <CardHeader>
              <CardTitle className="text-2xl text-white font-serif">
                Contact Information
              </CardTitle>
              <CardDescription className="text-white">
                Feel free to reach out through any of these channels
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 ">
              <div className="flex items-center gap-3">
                <div className="bg-transparent border border-gray-300 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-white">Email</p>
                  <a
                    href="mailto:mavisogodu@gmail.com"
                    className="font-medium hover:underline"
                    target="_blank"
                  >
                    mavisogodu@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-transparent border border-gray-300 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-white">Phone</p>
                  <a
                    href="tel:07032820988"
                    className="font-medium hover:underline"
                  >
                    07032820988
                  </a>
                </div>
              </div>
              <div className="flex justify-center mt-7 gap-6">
                <Link
                  className="hover:text-orange-200 transition duration-300"
                  href="https://github.com/MavisGit3"
                  target="_blank"
                >
                  <Github />
                </Link>
                <Link
                  className="hover:text-orange-200 transition duration-300"
                  href="https://twitter.com/mavisogodu3"
                  target="_blank"
                >
                  <Twitter />
                </Link>
                <Link
                  className="hover:text-orange-200 transition duration-300"
                  href="https://www.linkedin.com/in/mavis-ogodu"
                  target="_blank"
                >
                  <Linkedin />
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact Form */}
        <div>
          <Card className="bg-transparent border text-white border-gray-200 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl font-serif">
                Send a Message
              </CardTitle>
              <CardDescription className="text-white">
                Fill out the form below and I will get back to you soon
              </CardDescription>
            </CardHeader>
            <CardContent>
              {submitted ? (
                <div className="bg-green-50/70 backdrop-blur-sm border border-green-200 text-green-700 p-4 rounded-md">
                  Thank you for your message! I will get back to you soon.
                </div>
              ) : (
                <form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >
                  <div className="space-y-2">
                    <Label htmlFor="from_name">Name</Label>
                    <Input
                      id="from_name"
                      name="from_name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your name"
                      required
                      className="bg-transparent border-gray-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="reply_to">Email</Label>
                    <Input
                      id="reply_to"
                      name="reply_to"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your email"
                      required
                      className="bg-transparent border-gray-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Your message here..."
                      className="min-h-[120px] bg-transparent border-gray-300"
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full font-serif">
                    <Send className="mr-2 h-4 w-4" /> Send Message
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
