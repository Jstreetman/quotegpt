"use client";
import Link from "next/link";
import { Menu, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useRouter } from "next/navigation";
import { UserInput } from "./UserInput";
import { useChat, Message } from "ai/react";

export function Landing() {
  const router = useRouter();
  const { input, handleInputChange, handleSubmit, isLoading, messages } =
    useChat();

  // console.log(input);

  // console.log(messages, "Message");

  // Vercel AI SDK (ai package) useChat()
  // useChat -> handles messages for us, user input, handling user submits, etc.

  const handleSignInRoute = () => {
    router.push("/login");
  };

  const handleSignUpRoute = () => {
    router.push("/signup");
  };
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <Bot className="h-6 w-6" />
              <span className="">QuoteGPT</span>
            </Link>
          </div>
          <div className="flex-1"></div>
          <div className="mt-auto p-4">
            <Card x-chunk="dashboard-02-chunk-0 ">
              <CardContent className="p-2 pt-0 md:p-4 md:pt-0  ">
                <div className="mx-auto mt-4">
                  <Button
                    size="sm"
                    className="w-full mb-2"
                    onClick={handleSignUpRoute}
                  >
                    Sign Up
                  </Button>
                  <Button
                    size="sm"
                    className="w-full"
                    onClick={handleSignInRoute}
                  >
                    Sign In
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col">
              <nav className="grid gap-2 text-lg font-medium">
                <Link
                  href="#"
                  className="flex items-center gap-2 text-lg font-semibold"
                >
                  <Bot className="h-6 w-6" />
                  <span className="">QuoteGPT</span>
                </Link>
              </nav>
              <div className="mt-auto">
                <Card x-chunk="dashboard-02-chunk-0 ">
                  <CardContent className="p-2 pt-0 md:p-4 md:pt-0  ">
                    <div className="mx-auto mt-4">
                      <Button
                        size="sm"
                        className="w-full mb-2"
                        onClick={handleSignUpRoute}
                      >
                        Sign Up
                      </Button>
                      <Button
                        size="sm"
                        className="w-full"
                        onClick={handleSignInRoute}
                      >
                        Sign In
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </SheetContent>
          </Sheet>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          <div className="flex items-center">
            {messages.map((message: Message) => (
              <p
                className="text-sm font-medium text-slate-500 dark:text-slate-400"
                key={message.id}
              >
                {message.content}
              </p>
            ))}
          </div>
          <div
            className="flex flex-1 items-bottom justify-center rounded-lg  shadow-sm"
            x-chunk="dashboard-02-chunk-1"
          ></div>
          <div className="flex flex-col ">
            {/* TODO Show GPT here */}
            <UserInput />
          </div>
        </main>
      </div>
    </div>
  );
}
